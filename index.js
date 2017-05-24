module.exports = function (obj, rules) {
  if (!obj || typeof obj !== 'object') {
    throw new Error('filtero expects an object, e.g. filtero(object, function)')
  }

  if (typeof rules !== 'function') {
    throw new Error('filtero expects a filter function, e.g. filtero(object, function)')
  }

  return Object.keys(obj)
    .filter(function (key) { return rules(key, obj[key]) })
    .reduce(function (res, key) {
      res[key] = obj[key]
      return res
    }, {})
}
