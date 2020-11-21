const { watch, series } = require("gulp")
const { styles, scripts, templates } = require("../config/paths")
const { html } = require("./templates")
const { css } = require("./styles")
const { reload } = require("./server")

const watcher = done => {

  watch(templates.srcHTML, series(html, reload))
  watch(styles.srcCSS, series(css, reload))
  done()
}

module.exports = {
  watcher
}
