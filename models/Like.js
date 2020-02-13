const { Schema, model, Types } = require('mongoose')

const schema = new Schema({
  userId: {
    type: Types.ObjectId, ref: 'User'
  },
  projectId: {
    type: Types.ObjectId, ref: 'Project'
  }
}, {
	versionKey: false
})

module.exports = model('Like', schema)