require('dotenv').config()
const chalk = require('chalk')
const app = require('./app')
const { connect } = require('./util/database.utils')
const { SERVER } = require('./constants/base.constants')
const PORT = process.env.PORT || 5000

const start = async () => {
  try {
    connect()
    app.listen(
      PORT,
      () => {
        console.clear()
        console.log(`Your server started!`)
        console.log(chalk.cyan.underline(`http://${SERVER}:${PORT}`))
      }
    )
  } catch (e) {
    console.log(chalk.redBright(`Server start error: ${e.message}`))
    process.exit(1)
  }
}

start()