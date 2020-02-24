exports.SERVER = process.env.APP_URL
exports.PORT = process.env.APP_PORT || 5000
exports.DIRPATH = '/public/uploads'
exports.FILEPATH = `${process.cwd() + this.DIRPATH}`