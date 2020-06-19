export function simpleMarkdownToHTML(string) {
  return string
    .replace(/`(.*)`/g, '<code>$1</code>')
    .replace(/(\s)?\*\*(.*)\*\*(\s)?/g, '$1<strong>$2</strong>$3')
    .replace(/(\s)?\*(.*)\*(\s)?/g, '$1<em>$2</em>$3')
}
