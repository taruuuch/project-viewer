const { Schema, model, Types } = require('mongoose')

const schema = new Schema({
  title: { type: String, required: true },
  logo: { type: String, required: true },
  create: { type: Date, required: true },
  devs: [
    { type: Types.ObjectId, ref: 'User' }
  ],
  description: { type: String, required: true },
  instruments: [
    { type: Types.ObjectId, ref: 'Instrument' }
  ],
  tags: { type: String, required: true },
  likes: [
    { type: Types.ObjectId, ref: 'Like' }
  ],
  comments: [
    { type: Types.ObjectId, ref: 'Comment' }
  ],
  viewers: { type: Number, default: 0 }
}, {
	versionKey: false
})

module.exports = model('Project', schema)