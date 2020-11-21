module.exports = {
  src: "src/**/*",
  tmp: "tmp",
  dist: "dist",
  images: {
    srcImgs: "src/images/**/*.*",
    tmpImgs: "tmp/images/",
    distImgs: "dist/images/"
  },
  styles: {
    srcCSS: "src/css/*.css",
    tmpCSS: "tmp/css/",
    distCSS: "dist/css/",
    injectTmpCss: "tmp/css/*.css",
    injectDistCss: "dist/css/*.min.css"
  },
  templates: {
    srcHTML: "src/*.html",
    tmpIndex: "tmp/index.html",
    distIndex: "dist/index.html"
  }
}