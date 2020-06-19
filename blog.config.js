const path = require('path')

const type = {
  String: "''",
  Array: '[]',
  Object: '{}',
  Boolean: {
    true: true,
    false: false,
  },
}

module.exports = {
  title: 'blog',
  description: 'by annie tran',
  url: 'https://blog.nntrn.now.sh',
  GA: 'UA-91105441-10',
  favicon: '/favicon.ico',
  codepen: {
    username: 'nntrn',
  },
  dir: __dirname,
  social: {
    github: 'https://github.com/nntrn/blog',
  },
  stylesheets: [
    'https://unpkg.com/sanitize.css',
    'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.18.1/styles/night-owl.min.css',
    'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.1/css/all.min.css',
    '/style.css',
    // '/main.css',
  ],
  scripts: {
    console: '/assets/console.js',
  },
  routes: {
    Home: '/',
    Post: '/post',
  },
  dynamic: {
    post: '/post/[...slug]',
    tag: '/[tag]',
  },
  content: {
    path: path.join(__dirname, 'content/'),
    frontmatter: {
      title: type.String,
      description: type.String,
      tags: type.Array,
      sources: type.Array,
      references: type.Array,
      preview: type.Boolean.true,
    },
  },
  theme: {
    color: {
      primary: '#0074d9',
      secondary: '#e74c3c',
    },
  },
}
