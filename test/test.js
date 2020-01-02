'use strict';
const expect = require('chai').expect;
const $ = require('../dist/cmjs/index').default;

describe('ts-hi function test', () => {
  it('.slice({},[])',()=>{
    const source = {a:1,b:'2',c:3,d:'4'};
    expect($.slice(source,['a','c'])).to.eql({a:1,c:3});
  });
  it('.slice({},[],false)',()=>{
    const source = {a:1,b:'2',c:3,d:'4'};
    expect($.slice(source,['a','c'],false)).to.eql({b:'2',d:'4'});
  })
  it('.slice([],[-2])',()=>{
    const source = [0,1,2,3,4];
    expect($.slice(source,[-2],false)).to.eql([3,4]);
  })
  /* it('should return 2', () => {
    const result = add(1, 1);
    expect(result).to.equal(2);
  }); */
});