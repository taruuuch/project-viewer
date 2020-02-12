const mongoose = require('mongoose')
const { DB_URI } = require('../config/database.config')

exports.connect = async () => {
  try {
    const mongooseOptions = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true
    }

    await mongoose.connect(DB_URI,  mongooseOptions)

    let db = mongoose.connection

    db.on('error', () => console.error('Connection error: '))
    db.on('open', () => console.log('Database connected!'))
  } catch (e) {
    console.log(`Database error: ${e.message}`)
    process.exit(1)
  }
}

exports.close = async () => await mongoose.connections.close()