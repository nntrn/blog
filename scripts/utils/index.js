/**
 * capitalize('file-name') //=> "File Name"
 * capitalize('fileName-name') //=> "fileName Name"
 */
function capitalize(str) {
  return str
    .replace(
      /([a-z]+)-?/gi,
      (whole, w) => (w.toLowerCase() === w ? w.charAt(0).toUpperCase() + w.substr(1, 100) : w) + ' '
    )
    .trim()
}

exports.capitalize = capitalize

function parseArgumentsCli(args = []) {
  return args
    .join(' ')
    .split(/\s-+/g)
    .filter(Boolean)
    .map((e) => ({
      [e.toString().split(' ')[0]]: e.toString().split(' ').slice(1).join(' ').trim(),
    }))
    .reduce((a, b) => Object.assign(a, b), {})
}

exports.parseArgumentsCli = parseArgumentsCli
