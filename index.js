module.exports = function (o, f, ctx) {
  if (!o || typeof o !== 'object' || Array.isArray(o) || typeof f !== 'function') {
    throw new Error('filtero expects an object and a function, e.g. filtero(object, function)')
  }

  return Object.keys(o)
    .reduce(function (res, k) {
      if (f.call(ctx || this, k, o[k])) {
        res[k] = o[k]
      }
      return res
    }, {})
}
