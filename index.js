module.exports = function (obj, rules) {
  if (!obj || typeof obj !== 'object') {
    throw new Error('filtero expects an object, e.g. filtero(object, function)')
  }

  if (typeof rules !== 'function') {
    throw new Error('filtero expects a filter function, e.g. filtero(object, function)')
  }

  return Object.keys(obj)
    .reduce(function (res, key) {
      if (rules(key, obj[key])) {
        res[key] = obj[key]
      }
      return res
    }, {})
}
