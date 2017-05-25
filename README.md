# filtero [![npm version](https://badge.fury.io/js/filtero.svg)](https://badge.fury.io/js/filtero)

>Fileter an object by your own rule (function) which received keys and values of the object as parameters. Returns a filtered new object.

## Install
```
npm i filtero -S
```

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
