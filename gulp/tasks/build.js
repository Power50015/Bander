const { parallel, series } = require("gulp")
const { html } = require("./templates")
const { css } = require("./styles")
const { staticFiles } = require("./staticFiles")

const build = series(parallel(css, staticFiles), html)

module.exports = {
  build
}
