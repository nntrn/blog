const fs = require('fs')
const path = require('path')
const unified = require('unified')
const fm = require('front-matter')
const markdown = require('remark-parse')
const format = require('rehype-format')
const html = require('rehype-stringify')
const remark2rehype = require('remark-rehype')

const directory = path.resolve(__dirname, '../', 'content/')

// const { htmlEscape } = require('../components/utils/content')

function htmlEscape(s) {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
}

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

  var tree = unified()
    .use(markdown)
    .parse(fileData)
    .children.filter(e => e.type === 'code')

  const frontmatter = fm(fileData)
  const fileLines = frontmatter.body.split('\n')

  var processor = unified()
    .use(markdown)
    .use(remark2rehype)
    .use(format, { indentInitial: false })
    .use(html)

  return {
    content: fileLines.join('\n'),
    html: processor.processSync(fileLines.join('\n')).toString(),
    lines: fileLines.length,
    source: tree.map(e => ({ type: e.type, lang: e.lang, value: e.value })),
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
