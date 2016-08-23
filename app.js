'use strict';

const app = require('koa')(),
      serve = require('koa-static'),
      logger = require('koa-logger'),
      router = require('koa-router')(),
      path = require('path'),
      session = require('koa-session-store'),
      notifications = require('./controllers/notifications'),
      authorization = require('./controllers/authorization'),
      user = require('./controllers/user');

router.get('/urgent/:number', notifications.sms);
router.get('/authorization/verify', authorization.verify);
router.get('/user', user.info);

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
