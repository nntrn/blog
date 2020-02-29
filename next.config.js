const blog = require('./summary.json')

module.exports = {
  // exportTrailingSlash: true,
  exportPathMap: function () {
    const paths = {
      '/': { page: '/' },
      '/about': { page: '/about' }
    }

    blog.forEach(post => {
      paths[post.url] = { query: { ...post } }
    })

    return paths
  }
}
 
