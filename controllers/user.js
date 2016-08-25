'use strict';

const request = require('koa-request');
var user = require('../models/user')

module.exports.info = function() {
  this.body = user.id;
};

module.exports.participants = function* () {
  if(user.access_token) {
    var ids = ['20172126', '148254788', '18299916', 'leskom', 'lesko_yuliya'].filter(enrty => {
    	return enrty !== user.id.toString();
    });
    var url = 'https://api.vk.com/method/users.get?user_ids=' + ids.join(',') + '&fields=bdate,photo_max&v=5.53';
    var res = yield request(url);
    this.body = res.body;
  } else {
  	this.body = 'You should be logged in.'
  }
}

module.exports.search = function* (name) {
  if(user.access_token) {
    var url = 'https://api.vk.com/method/friends.search?user_id=' + user.id + '&q=' + this.params.name + '&access_token=' + user.access_token;
    var res = yield request(url);
    this.body = res.body;
  } else {
    this.body = 'You should be logged in.'
  }
}