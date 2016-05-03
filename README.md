# a-fill [![Build Status](https://travis-ci.org/vikramcse/a-fill.svg?branch=master)](https://travis-ci.org/vikramcse/a-fill)
Fills elements of array with value

## Install

```sh
$ npm install --save a-fill
```

## Example

```js
var fill = require('a-fill');
console.log(fill([1, 2, 3, 4, 5], 10));
// - > [10, 10, 10, 10, 10]

console.log(fill([1, 2, 3, 4, 5], '*', -2, 4));
// -> [1, 2, 3, 10, 5]
```

### `require('a-fill')(array, value, [start=0], [end=array.length])`

**Arguments**:

- `array`: An array that to be filled
- `value`: The value to fill array with
- `[start=0] (number)`: The start position. It can be negative
- `[end=array.length] (number)`: The end position. It can be negative

**Returns**: Returns a array with filled value

## License

&copy; 2016 Vikram Jadhav. MIT License
