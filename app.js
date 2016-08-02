'use strict';

var koa = require('koa');
var serve = require('koa-static');
var route = require('koa-route');
var path = require('path');
var notifications = require('./controllers/notifications');
var app = koa();

app.use(route.get('/urgent', notifications.sms));

app.use(serve(path.join(__dirname, 'ui')));
app.listen(1337);
console.log('Listening on port 1337');
