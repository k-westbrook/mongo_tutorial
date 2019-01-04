'use strict'

const { mongoose } = require('./server/db')
const db = mongoose.connection;
const app = require('./server')
const PORT = 3000

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log('db synced')
  app.listen(PORT, () => console.log(`listening on ${PORT}`))
});

