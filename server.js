require('dotenv').config()
const chalk = require('chalk')
const app = require('./app')
const { connect } = require('./util/database.utils')
const { SERVER, PORT } = require('./config/base.config')

const start = async () => {
  try {
    connect()
    app.listen(
      PORT,
      () => {
        console.clear()
        console.log(`Your server started!`)
        console.log(chalk.cyan(`${SERVER}:${PORT}`))
      }
    )
  } catch (e) {
    console.log(chalk.redBright(`Server start error: ${e.message}`))
    process.exit(1)
  }
}

start()