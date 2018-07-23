const express = require('express')
const Router = express.Router
const router = Router()
const User = require('../models/User')

router.post('/', async (req, res, next) => {
  const { email, password } = req.body
  try {
    const user = await User.findOne({ email })
    if(!user) {
      next(new Error('not found'))
    }
    if(user && user.password === password) {
      res.status(200).json(user);
    } else {
      next(new Error('unauthorized'))
    }
  } catch (err) {
    next(err)
  }
})

module.exports = router