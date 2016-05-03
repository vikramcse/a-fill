'use strict';

var expect = require('chai').expect;
var fill = require('../lib');

describe('test of fill with two arguments', function () {
  it('should return whole array with all 2', function () {
    var a = [1, 2, 3, 4, 5];
    var result = fill(a, 2);

    expect(result.length).to.be.eql(a.length);
    expect(result).to.eql([2, 2, 2, 2, 2]);
  });

  it('should return whole array with all *', function () {
    var a = [1, 2, 3, 4, 5];
    var result = fill(a, '*');

    expect(result.length).to.be.eql(a.length);
    expect(result).to.eql(['*', '*', '*', '*', '*']);
  });
});

describe('test of fill with all arguments', function () {
  it('should return an array changed value from 1 ot 4 by 10', function () {
    var a = [1, 2, 3, 4, 5];
    var result = fill(a, 10, 1, 4);
    expect(result).to.eql([1, 10, 10, 10, 5]);
  });
});

describe('test of fill with only negative start', function () {
  it('should return an array changed between second last position to length of array', function () {
    var a = [1, 2, 3, 4, 5];
    var result = fill(a, 10, -2);
    expect(result).to.eql([1, 2, 3, 10, 10]);
  });

  it('should return an whole array with 10', function () {
    var a = [1, 2, 3, 4, 5];
    var result = fill(a, 10, -5);
    expect(result).to.eql([10, 10, 10, 10, 10]);
  });
});

describe('test of fill with negative start and positive end', function () {
  it('should return an array changed between second postion from start to 4th postion', function () {
    var a = [1, 2, 3, 4, 5];
    var result = fill(a, 10, -2, 4);
    expect(result).to.eql([1, 2, 3, 10, 5]);
  });
});

describe('test of fill with negative start and negative end', function () {
  it('should return an array between third postion from start to second last from end', function () {
    var a = [1, 2, 3, 4, 5];
    var result = fill(a, 10, -3, -1);
    expect(result).to.eql([1, 2, 10, 10, 5]);
  });
});

describe('tests if the start is greater than end', function () {
  it('should return same array', function () {
    var a = [1, 2, 3, 4, 5];
    var result = fill(a, 10, 3, 2);
    expect(result).to.eql([1, 2, 3, 4, 5]);
  });

  it('should return same array as -1 is greater than -3', function () {
    var a = [1, 2, 3, 4, 5];
    var result = fill(a, 10, -1, -3);
    expect(result).to.eql([1, 2, 3, 4, 5]);
  });
});
