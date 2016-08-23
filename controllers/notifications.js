'use strict';

var config = require('../config.json');
var client = require('twilio')(config.accountSid, config.authToken);

function * sendMessage(number) {
  return client.messages.create({
    to: "+" + number,
    from: "+17637036384",
    body: "Срочный сбор первой категории!"
  });
}

module.exports.sms = function * sms(next) {
  try {
    this.body = yield sendMessage(this.params.number);
  } catch (err) {
    this.body = err;
  }
};
