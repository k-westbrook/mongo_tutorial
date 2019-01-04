'use strict'

// The sole purpose of this module is to establish a connection to your
// Postgres database by creating a Sequelize instance (called `db`).
// You shouldn't need to make any modifications here.

const chalk = require('chalk')
const pkg = require('../../package.json')
const User = require('./user')
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/mongo_tutorial', { useNewUrlParser: true });

module.exports = { mongoose, User }
