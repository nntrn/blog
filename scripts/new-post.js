const fs = require('fs')
const path = require('path')

const config = require('../blog.config')

function writeUniqueFile(name, index = 0, value) {
  var indexValue = index ? `-${index}` : ''
  var filePath = path.join(config.content.path, `${name}${indexValue}.md`)

  if (fs.existsSync(filePath)) {
    index = index + 1
    writeUniqueFile(name, index, value)
  } else {
    console.log('added: ' + filePath)
    fs.writeFileSync(filePath, value)
  }
}

function init() {
  const [ , , ...args ] = process.argv
  const frontmatter = [
    '---',
    Object.entries(config.content.frontmatter)
      .map(e => `${e[0]}: ${e[1]}`)
      .join('\n'),
    `created: ${new Date().toLocaleString()}`,
    '---'
  ].join('\n')

  writeUniqueFile(args[0], 0, frontmatter)

}

init()
