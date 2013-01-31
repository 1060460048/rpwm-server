//test boilerplate
var tu = require('../../modules/test_utils')
//modules being tested
  , app = require('./app')(tu.starter_app_generator);

describe('magi-cal.me', function() {

describe('app', function() {
  var app_tester = new tu.AppTester(app);
  app_tester.testHtmlGet('/', {
    navbar: false
  , banner: false
  });

  app_tester.testHtmlGet('/asdf', {
    type: 'text'
  , redirect: '/'
  });
});

});