const mongoose = require('mongoose')
const chalk = require('chalk')
const { DB_URI } = require('../config/database.config')

exports.connect = async () => {
  try {
    const mongooseOptions = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true
    }

    return await mongoose.connect(
      DB_URI,
      mongooseOptions
    ).then(resolved => {
      console.log(chalk.yellow(`Server connected to MongoDB`))

      mongoose.connection.on('error', error => console.error(`Connection error: ${error}`))

      return resolved
    })
  } catch (e) {
    console.log(`Database error: ${e.message}`)
    process.exit(1)
  }
}

exports.close = async () => await mongoose.connections.close()