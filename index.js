'use strict';

const express = require('express');
const sequelize = require('./models');

const app = express();
const PORT = 4000;

(async function () {
  try {
    app.listen(PORT, () => {
      console.log(`🤟 Server running at http://localhost:${PORT} 👊`);
    });
    try {
      await sequelize.authenticate();
      await sequelize.sync(); // { force: true } use this to drop all data from table
      console.log('🤙 Database connection successful 👌');
    } catch (error) {
      console.error(`👎 Could not connect to database: ${error} 🖕`);
    }
  } catch (error) {
    console.error(error);
  }
})();
