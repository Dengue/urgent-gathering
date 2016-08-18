'use strict';

const app = require('koa')();
const serve = require('koa-static');
const logger = require('koa-logger')
const router = require('koa-router')();
const path = require('path');
const session = require('koa-session-store');
const notifications = require('./controllers/notifications');
const authorization = require('./controllers/authorization');

router.get('/urgent/:number', notifications.sms);
router.get('/authorization/verify', authorization.verify);

app.keys = ['something secret'];

app
  .use(logger())
  .use(session({
    name: 'session',
    cookie: {
	  httpOnly: true
    }
  }))
  .use(router.routes())
  .use(router.allowedMethods());

app.use(serve(path.join(__dirname, 'ui')));

app.listen(process.env.PORT || 1337);
console.log('Listening on port 1337');
