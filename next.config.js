const routes = require('./routes.json')
const config = require('./blog.config')

module.exports = {
  // exportTrailingSlash: true,
  devIndicators: {
    autoPrerender: false
  },

  exportPathMap: function () {
    const paths = Object.values(config.routes)
      .map(e => ({ [e]: { page: e } }))
      .reduce((a, b) => Object.assign(a, b), {})

    routes.forEach(post => {
      paths[post.url] = { page: '/posts/[...slug]' }

      post.tags.forEach(tag => {
        paths[`/${tag.replace(/\s/g, '-')}`] = { page: '/[tag]' }
      })
    })

    return paths
  }
}
