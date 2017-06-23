module.exports = function (obj, rules) {
  if (!obj || typeof obj !== 'object' || Array.isArray(obj) || typeof rules !== 'function') {
    throw new Error('filtero expects an object and a function, e.g. filtero(object, function)')
  }

  return Object.keys(obj)
    .reduce(function (res, key) {
      if (rules(key, obj[key])) {
        res[key] = obj[key]
      }
      return res
    }, {})
}
