'use strict';

const config = require('../config.json');
const querystring = require('querystring');
const request = require('koa-request');
var user = require('../models/user');
var redis = require("redis");
// var client = redis.createClient(6379);

function buildAccessTokenRequestUrl(redirectUrl, code) {
  var origin = 'https://oauth.vk.com/access_token?';
  var query = querystring.stringify(
  {
    client_id: config.vkClientId,
  	client_secret: config.vkClientSecret,
    redirect_uri: redirectUrl,
    code: code
  });
  return origin + query;
}

module.exports.verify = function* verify(next) {
  var redirectUrl = this.request.origin + this.request.path;
  var code = this.query.code;
  var accessTokenUrl = buildAccessTokenRequestUrl(redirectUrl, code);
  var res = yield request(accessTokenUrl);
  user.id = JSON.parse(res.body).user_id;
  user.access_token = JSON.parse(res.body).access_token;
  this.redirect('/');
};
