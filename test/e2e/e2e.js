var config = require('../../nightwatch.conf.BASIC.js');

module.exports = {
  'Demo test Nelisa' : function (client) {
    client
      .url('http://nelisa123.projectcodex.co/login')
      .waitForElementVisible('body', 1000)
      .assert.title('Nelisa')
      .assert.visible('input[type=text]')
      .assert.visible('input[name=username]')
      .assert.visible('input[name=password]')

      .setValue('input[type=text]', 'nelisa')
      .setValue('input[type=password]', 'pass')
      .waitForElementVisible('button[class="btn btn-default-outline waves-effect glyphicon glyphicon-plus-sign"]', 1000)
      .click('button[class=btn btn-default-outline waves-effect glyphicon glyphicon-plus-sign]')
      .pause(5000)
      // .assert.containsText('ol#rso li:first-child', 'Rembrandt - Wikipedia')
      .end();
  }
};
