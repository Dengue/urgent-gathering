'use strict';

var user = require('../models/user')

module.exports.info = function() {
  this.body = user;
};