const fs = require('fs');
const path = require('path');
const { capitalize, parseArgumentsCli } = require('./utils');

const config = require('../blog.config');

function writeUniqueFile(name, index = 0, value) {
  var indexValue = index ? `-${index}` : '';
  var filePath = path.join(config.content.path, `${name}${indexValue}.md`);

  if (fs.existsSync(filePath)) {
    index = index + 1;
    writeUniqueFile(name, index, value);
  } else {
    console.log('added: ' + filePath);
    fs.writeFileSync(filePath, value);
  }
}

function init() {
  const [ , , ...args ] = process.argv;
  config.content.frontmatter.title = capitalize(args[0]);

  Object.entries(parseArgumentsCli(args)).slice(1).forEach(e=>{
    config.content.frontmatter[e[0]] = e[1]
  })
  
  const frontmatter = [
    '---',
    Object.entries(config.content.frontmatter)
      .map((e) => `${e[0]}: ${e[1]}`)
      .join('\n'),
    `created: ${new Date().toLocaleString()}`,
    '---'
  ].join('\n');

  writeUniqueFile(args[0], 0, frontmatter);
}

init();
