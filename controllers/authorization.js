'use strict';

const config = require('../config.json');
const querystring = require('querystring');
const request = require('koa-request');

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

module.exports.verify = function * verify(next) {
  var redirectUrl = this.request.origin + this.request.path;
  var code = this.query.code;
  var accessTokenUrl = buildAccessTokenRequestUrl(redirectUrl, code);
  var res = yield request(accessTokenUrl);
  this.body = res.body;
};
