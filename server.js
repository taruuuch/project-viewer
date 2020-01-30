require('dotenv/config');
const app = require('./app');
const { connect } = require('./utils/database.utils');
const { SERVER } = require('./constants/base.constants');
const PORT = process.env.PORT || 5000;

async function start() {
  try {
    connect();
    app.listen(PORT, () => console.log(`${SERVER} ${PORT}`));
  } catch (e) {
    console.log('Server start error: ', e.message);
    process.exit(1);
  }
};

start();