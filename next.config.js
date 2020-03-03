const summary = require('./summary.json')
const config = require('./blog.config')

const p = Object.values(config.routes)
  .map(e => ({ [e]: { page: e } }))
  .reduce((a, b) => Object.assign(a, b), {})

module.exports = {
  // exportTrailingSlash: true,
  devIndicators: {
    autoPrerender: false
  },
  exportPathMap: function () {
    const paths = Object.values(config.routes)
      .map(e => ({ [e]: { page: e } }))
      .reduce((a, b) => Object.assign(a, b), {})

    summary.forEach(post => {
      paths[post.url] = { query: { ...post } }
    })

    return paths
  }
}
