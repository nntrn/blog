const path = require('path')

const type = {
  String: "''",
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
    'https://unpkg.com/sanitize.css',
    // 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.18.1/styles/night-owl.min.css',
    'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.1/css/all.min.css',
    '/codyhouse-framework.css'
    // '/style.css'
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
  },
  theme: {
    color: {
      primary: '#0074d9',
      secondary: '#e74c3c'
    }
  }
}
