'use strict';

var Sequelize = require('sequelize');
var db = require('../db');

var Category = db.define('category', {
  name: {
    type: Sequelize.STRING
  }
});

module.exports = Category;
