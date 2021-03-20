'use strict';

const Sequelize = require('sequelize');

// const seq = new Sequlize('DB_NAME', 'USERNAME', 'DB_PASSWORD', host...)
const seq = new Sequelize('testyml', 'postgres', 'postgres', {
  host: 'localhost',
  dialect: 'postgres'
});

// Just runs a test query to the DB
seq.getQueryInterface().showAllSchemas().then((tableObj) => {
  console.log('// Tables in database','==========================');
  console.log(tableObj);
})
.catch((err) => {
  console.log('showAllSchemas ERROR',err);
})

module.exports = seq;
