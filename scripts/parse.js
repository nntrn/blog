const fs = require('fs')
const path = require('path')
const unified = require('unified')
const fm = require('front-matter')
const markdown = require('remark-parse')

const marked = require('./utils/marked')

const directory = path.resolve(__dirname, '../', 'content/')

const markdownFiles = {
  files: [],
  addFile: function (filePath, tree) {
    const stat = fs.statSync(filePath)
    this.files.push({
      path: path.relative('./', filePath),
      url: path.join('posts', path.relative(directory, filePath)).replace(/\.\w+$/, ''),
      ...tree,
      stat: {
        size: stat.size,
        created: stat.birthtime,
        modified: stat.mtime
      }
    })
  }
}

function readMarkdown(filePath) {
  const fileData = fs.readFileSync(filePath, 'utf-8')
  const frontmatter = fm(fileData)
  const fileLines = frontmatter.body.split('\n')

  var tree = unified()
    .use(markdown)
    .parse(fileData)
    .children.filter(e => e.type === 'code')

  return {
    content: fileLines.join('\n'),
    html: marked(fileLines.join('\n')),
    lines: fileLines.length,
    source: tree.map(e => ({ lang: e.lang, value: e.value })),
    frontmatter: frontmatter.attributes
  }
}

function getFiles(dir, regex = /.*/, files_ = []) {
  var files = fs.readdirSync(dir)
  if (dir.split('/').slice(-1)[0] === 'node_modules') return
  for (var i in files) {
    var name = dir + '/' + files[i]
    if (fs.statSync(name).isDirectory()) {
      getFiles(name, regex, files_)
    } else {
      if (regex.test(name)) {
        markdownFiles.addFile(name, readMarkdown(name))
        files_.push(path.relative(directory, name))
      }
    }
  }
  return files_
}

console.log(getFiles(directory, /\.md$/))

fs.writeFileSync('./summary.json', JSON.stringify(markdownFiles.files, null, 2))

const publicRoutes = markdownFiles.files.map(e => ({
  url: '/' + e.url,
  title: e.frontmatter.title,
  description: e.frontmatter.description,
  content: e.content
    .split('\n')
    .filter(Boolean)
    .join(' ')
    .replace(/```.*```/g, '')
    .replace(/^>\s/, ''),
  tags: e.frontmatter.tags
}))

fs.writeFileSync(
  './public/routes.js',
  `const _routes = ${JSON.stringify(publicRoutes, null, 2)}`
)

fs.writeFileSync('./routes.json', JSON.stringify(publicRoutes, null, 2))
