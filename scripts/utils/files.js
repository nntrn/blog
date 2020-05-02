const fs = require('fs')
const path = require('path')

function isHidden(pathName) {
  return pathName.charAt(0) === '.'
}

function isIndex(pathName) {
  return pathName.split('.')[0].toLowerCase() === 'index'
}

function getDirList({ filePath = '.', ...config }) {
  const $path = path.join(process.cwd(), String(filePath)),
    files = [],
    dirs = []

  fs.readdirSync($path).forEach(e => {
    const stats = fs.statSync(path.join($path, e))

    if (stats.isDirectory()) dirs.push(e)
    if (stats.isFile()) files.push(e)
  })

  return { path: $path, files, dirs }
}

function filterFileConditions(arr) {
  return arr.filter(e => !isHidden(e) && !isIndex(e))
}

function camelcase(flag) {
  return flag.split('-').reduce(function(str, word) {
    return str + word[0].toUpperCase() + word.slice(1)
  })
}

module.exports = {
  isHidden,
  isIndex,
  getDirList,
  camelcase,
  filterFileConditions
}
