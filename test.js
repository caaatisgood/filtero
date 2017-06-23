var filtero = require('./')

test('should filter out keys that includes "i"', function () {
  var obj = {
    foo: 'foo',
    bar: 'bar',
    filtero: 'filtero'
  }
  expect(filtero(obj, function (k, v) {
    return k.indexOf('c') === -1
  })).toMatchObject({
    foo: 'foo',
    bar: 'bar'
  })
})

test('should return empty object', function () {
  var obj = {
    filtero: 'filtero'
  }
  expect(filtero(obj, function () {})).toMatchObject({})
})

test('should throw an error', function () {
  expect(function () {
    filtero([], function () {})
  }).toThrowError()
})

test('should throw an error', function () {
  expect(function () {
    filtero({}, 3)
  }).toThrowError()
})
