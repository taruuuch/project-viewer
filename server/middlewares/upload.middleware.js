const multer = require('multer')
const fs = require('fs')
const { FILEPATH } = require('../config/base.config')

const maxCountFilesInDescription = 8;

const createDir = () => fs.mkdirSync(FILEPATH, { recursive: true })

const config = multer.diskStorage({
  destination: (req, file, cb) => {
    createDir()
    cb(null, FILEPATH)
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname)
  }
})

const filters = (req, file, cb) => {
  if (file.mimetype === 'image/png' ||
    file.mimetype === 'image/jpg' ||
    file.mimetype === 'image/jpeg' ||
    file.mimetype === 'image/gif') {
    cb(null, true);
  } else {
    cb(null, false);
  }
}

exports.singleUpload = fieldName => multer({
  storage: config,
  fileFilter: filters
}).single(fieldName)

exports.multiUpload = fieldName => multer({
  storage: config,
  fileFilter: filters
}).array(fieldName, maxCountFilesInDescription)
