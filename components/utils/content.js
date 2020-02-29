function camelCase(flag) {
  return flag.split('-').reduce(function (str, word) {
    return str + word[0].toUpperCase() + word.slice(1)
  })
}

function kebabCase(flag) {
  return flag.replace(/([A-Z])/g, '-$1').toLowerCase()
}

function htmlEscape(s) {
  return s
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
}

function uuid(s = 'xxxxx') {
  var seed = Date.now()

  return s.replace(/x/g, function (c) {
    var r = (seed + Math.random() * 16) % 16 | 0
    seed = Math.floor(seed / 16)

    return (c === 'x' ? r : r & (0x3 | 0x8)).toString(16)
  })
}

export { camelCase, kebabCase, htmlEscape, uuid }
