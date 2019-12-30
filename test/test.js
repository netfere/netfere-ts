'use strict';
const expect = require('chai').expect;
const jwt = require('../dist/jwt');
const data=jwt.jwtSet("lingang",{iss:'iss',expires:'1d',data:{x:1,name:'lllll'}});
console.log(data);
console.log(jwt.jwtVaild("lingang",data.token));
describe('ts-hi function test', () => {
  /* it('should return 2', () => {
    const result = add(1, 1);
    expect(result).to.equal(2);
  }); */
});