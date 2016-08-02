'use strict';

var config = require('../config.json');
var client = require('twilio')(config.accountSid, config.authToken); 

module.exports.sms = function * home(next) {
  console.log('Urgent meeting!')
  client.messages.create({ 
    to: "+375297718485", 
    from: "+17637036384", 
    body: "Urgent meeting 1'st category!",   
  }, function(err, message) { 
    console.log(err, message.sid); 
  });
}