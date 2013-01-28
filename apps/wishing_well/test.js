//test boilerplate
var tu = require('../../modules/test_utils')
//modules being tested
  , Wish = require('./wish')
  , User = require('../../modules/user');

describe('Wish', function() {
  var wish_tester = new tu.ModelTester(Wish);
  wish_tester.testModel();
  wish_tester.testSchema();
  describe('wish with user', function() {
    var wish_def = {
        wish: 'test wish',
        user: new User({
          username: 'test_user',
          password: 'test_password'
        })._id
      }, wish = new Wish(wish_def);
    before(function(done) {
      Wish.remove(wish_def, done);
    });
    wish_tester.testProperties(wish, wish_def);
    wish_tester.testSave(wish);
    wish_tester.testFind(wish_def, wish);
    wish_tester.testRemove(wish);
    wish_tester.testFind(wish_def, null);
    wish_tester.testFind({ _id: wish._id }, null);
  });
  describe('wish without user', function() {
    var wish_def = {
        wish: 'test wish',
      }, wish = new Wish(wish_def);
    before(function(done) {
      Wish.remove(wish_def, done);
    });
    wish_tester.testProperties(wish, wish_def);
    wish_tester.testSave(wish);
    wish_tester.testFind(wish_def, wish);
    wish_tester.testRemove(wish);
    wish_tester.testFind(wish_def, null);
    wish_tester.testFind({ _id: wish._id }, null);
  });
});