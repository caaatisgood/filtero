# filtero
[![Build Status](https://travis-ci.org/imrobinized/filtero.svg?branch=master)](https://travis-ci.org/imrobinized/filtero) [![npm version](https://badge.fury.io/js/filtero.svg)](https://badge.fury.io/js/filtero)

>Fileter an object by your own rule (function) which received keys and values of the object as parameters. Returns a filtered new object.

## Install
```
npm i filtero -S
```

## Syntax
```javascript
filtero(obj, compareFunction [, thisArg])
```

### obj
Target object to be filtered

### compareFunction
A function that defines the filtering rule. It will have **key** and **value** as parameters while iterating the object. If the function returns a truthy value. The current key/value pair will be reserved in the returning object, and vice versa.

## Usage
```javascript
import filtero from 'filtero'

let obj = {
  a: 1,
  b: 2,
  c: 3,
  d: 'D'
}

filtero(obj, (k, v) => k === 'a')
// { a: 1 }

filtero(obj, (k, v) => ['b', 'c'].indexOf(k) >= 0)
// { b: 2, c: 3 }

filtero(obj, (k, v) => typeof v === 'string')
// { d: 'D' }
```
