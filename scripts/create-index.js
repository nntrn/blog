const path = require('path')
const fs = require('fs')
const dir = require('./utils/files')

const { getDirList, camelcase, filterFileConditions } = dir

function init() {
  const [, , ...dirs] = process.argv

  dirs.forEach(directory => {
    const d = getDirList({ filePath: directory }),
      imports = [],
      exports = []

    filterFileConditions(d.files).forEach(e => {
      const name = e.split('.')[0]
      imports.push(`import ${camelcase(name)} from './${name}'`)
      exports.push(`  ${camelcase(name)},`)
    })

    const writeString = [imports.join('\n'), '', 'export {', exports.join('\n'), '}', ''].join('\n')

    fs.writeFileSync(path.join(path.resolve(__dirname, '../'), directory, 'index.js'), writeString)
  })
}
init()
