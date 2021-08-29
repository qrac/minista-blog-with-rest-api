const path = require("path")
const glob = require("glob")

const HtmlWebpackPlugin = require("html-webpack-plugin")

const webpackConfig = {
  devServer: {
    open: ["/index.html"],
  },
  plugins: [],
}

const api = require(path.resolve(".minista/api/github-issues.json"))

glob
  .sync("**/*.js", {
    cwd: "src/pages",
  })
  .forEach((file) => {
    const extname = path.extname(file)
    const basename = path.basename(file, extname)
    const dirname = path.dirname(file)

    webpackConfig.plugins.push(
      new HtmlWebpackPlugin({
        template: path.resolve("src/pages", file),
        templateParameters: { globalData: api },
        filename: path.join(dirname, basename + ".html"),
      })
    )
  })

api.forEach((page) => {
  webpackConfig.plugins.push(
    new HtmlWebpackPlugin({
      template: path.resolve("src/templates/post.js"),
      templateParameters: { globalData: api, pageData: page },
      filename: `posts/${page.id}/index.html`,
    })
  )
})

module.exports = webpackConfig
