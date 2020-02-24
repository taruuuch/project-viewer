const { Schema, model, Types } = require('mongoose')
const dayjs = require('dayjs')

const schema = new Schema({
  title: { type: String, required: true },
  cover: { type: String, required: true, default: 'none' },
  create_by: { type: Types.ObjectId, ref: 'User' },
  create_at: { type: Date, required: true, default: dayjs() },
  devs: [
    { type: Types.ObjectId, ref: 'User' }
  ],
  description: { type: String, required: true },
  // instruments: [
  //   { type: Types.ObjectId, ref: 'Instrument' }
  // ],
  tags: { type: String, required: true },
  // likes: [
  //   { type: Types.ObjectId, ref: 'Like' }
  // ],
  // comments: [
  //   { type: Types.ObjectId, ref: 'Comment' }
  // ],
  viewers: { type: Number, default: 0 }
}, {
	versionKey: false
})

module.exports = model('Project', schema)