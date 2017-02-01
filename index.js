var cheerio = require('cheerio')

module.exports = function (content) {
  var $ = cheerio.load(content)
  var features = this.options.vueFeatures

  $('off, on').each(function() {
    var _this = $(this)
    var feature = _this.attr('feature')
    var shouldReplace = _this.get(0).tagName === 'on' ? true : false

    if (features[feature] === shouldReplace) {
      _this.replaceWith(_this.children())
    } else {
      _this.remove()
    }
  })

  return $.html()
}
