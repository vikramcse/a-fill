'use strict';

var fill = function (array, value, origin, dest) {
  var len = array.length;
  var start;
  var end;

  if (origin < 0) {
    start = Math.max(0, origin + len);
  } else {
    start = origin || 0;
  }

  if (dest === undefined) {
    end = dest || len;
  } else if (dest < 0) {
    end = len + dest;
  } else {
    end = dest;
  }

  if (start > end) {
    end = 0;
  }

  while (start < end) {
    array[start++] = value;
  }

  return array;
};

module.exports = fill;
