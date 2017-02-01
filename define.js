function define (features) {
  var defines = {}

  for (feature in features) {
    defines[feature] = JSON.stringify(features[feature])
  }

  return defines
}

module.exports = define
