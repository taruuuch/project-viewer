const { Schema, model, Types } = require('mongoose')

const schema = new Schema({
  userId: {
    type: Types.ObjectId, ref: 'User'
  },
  projectId: {
    type: Types.ObjectId, ref: 'Project'
  },
  description: { type: String, required: true },
  publishDate: { type: Date, default: new Date()}
}, {
	versionKey: false
})

module.exports = model('Comment', schema)