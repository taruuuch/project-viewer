const User = require('../models/User')

exports.getUser = async (req, res) => {
  try {
    const { id } = req.decode

    const user = {}

    await User.findOne({ _id: id })
      .exec()
      .then(data => {
        user._id = data._id
        user.email = data.email
      })

    if(!user) {
      return res.status(400).json({ message: 'User not exist' })
    }

    res.json(user)
  } catch (e) {
    res.status(500).json({ message: e.message })
  }
}

exports.getUserById = async (req, res) => {
  try {

  } catch (e) {
    res.status(500).json({ message: e.message })
  }
}

// exports.funcName = async (req, res) => {
//   try {

//   } catch (e) {
//     res.status(500).json({ message: e.message })
//   }
// }