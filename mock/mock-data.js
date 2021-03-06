module.exports = function() {
  var Mock = require('mockjs');
  var _=require('lodash')

  return {
    people: _.times(100,function(n){
      return {
        id: n,
        name: Random.cfirst(),
        avatar: Random.image('200*100')
      }
    }),
    address: _.times(100,function(n){
      return {
        id: Mock.mock('@guid'),
        city: Mock.mock('@city'),
        country: Mock.mock('@country'),
      }
    }),
  }
}