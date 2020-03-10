const path = require('path')

const type = {
  String: '\'\'',
  Array: '[]',
  Object: '{}',
  Boolean: false
}

module.exports = {
  title: 'blog',
  description: 'by annie tran',
  favicon: '/favicon.ico',
  codepen: {
    username: 'nntrn'
  },
  dir: __dirname,
  stylesheets: [
    // 'https://unpkg.com/normalize.css@8.0.1/normalize.css',
    'https://unpkg.com/sanitize.css',
    'https://fonts.googleapis.com/css?family=Source+Serif+Pro&display=swap',
    'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.18.1/styles/night-owl.min.css',
    'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.1/css/all.min.css',
    '/style.css'
  ],
  routes: {
    Home: '/',
    Posts: '/posts'
  },
  content: {
    path: path.join(__dirname, 'content/'),
    frontmatter: {
      title: type.String,
      description: type.String,
      tags: type.Array,
      sources: type.Array,
      references: type.Array,
      preview: type.Boolean
    }
  }
}
