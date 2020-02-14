const multer = require('multer')

const maxCountFilesInDescription = 8;

const config = multer.diskStorage({
  destination: (req, file, cb) =>{
    cb(null, 'uploads')
  },
  filename: (req, file, cb) =>{
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

exports.singleUpload = multer({ storage: config, fileFilter: filters }).single('filedata')
exports.multiUpload = multer({ storage: config, fileFilter: filters }).array('filedata', maxCountFilesInDescription)
