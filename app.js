'use strict';

var app = require('koa')();
var serve = require('koa-static');
var router = require('koa-router')();
var path = require('path');
var notifications = require('./controllers/notifications');

router.get('/urgent/:number', notifications.sms);

app
  .use(router.routes())
  .use(router.allowedMethods());

app.use(serve(path.join(__dirname, 'ui')));

app.listen(process.env.PORT || 1337);
console.log('Listening on port 1337');
