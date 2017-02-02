var config = require('../../nightwatch.conf.BASIC.js');
'use strict';


module.exports = {
  'test if elements are visible and filling out the form on the login and press button' : function (client) {
    client
      .url('http://nelisa123.projectcodex.co/login')
      .assert.title('Nelisa')
      .assert.visible('input[type=text]')
      .assert.visible('input[name=username]')
      .assert.visible('input[name=password]')
      .setValue('input[type=text]', 'nelis')
      .setValue('input[type=password]', 'pas')
      .waitForElementVisible('button[class="btn btn-default-outline waves-effect glyphicon glyphicon-plus-sign"]', 1000)
      .click('button[class="btn btn-default-outline waves-effect glyphicon glyphicon-plus-sign"]')
      .waitForElementVisible('h4[id="warning"]', 1000)
      .pause(1000)
      // .assert.containsText('ol#rso li:first-child', 'Rembrandt - Wikipedia')
      .end();
  },
  'test if only when there is a password will it login and will the errorhandler show' : function (client) {
    client
      .url('http://nelisa123.projectcodex.co/login')
      .setValue('input[type=password]', 'pass')
      .click('button[class="btn btn-default-outline waves-effect glyphicon glyphicon-plus-sign"]')
      .waitForElementVisible('h4[id="warning"]', 2000)
      .pause(5000)
      .end();

    },

  'test if only when there is a username will it login and will the errorhandler show' : function (client) {
    client
      .url('http://nelisa123.projectcodex.co/login')
      .setValue('input[type=text]', 'nelisa')
      .click('button[class="btn btn-default-outline waves-effect glyphicon glyphicon-plus-sign"]')
      .waitForElementVisible('h4[id="warning"]', 1000)
      .pause(1000)
      .end();
  }




};
