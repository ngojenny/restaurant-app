const express = require('express')
const Router = express.Router
const router = Router()
const Group = require('../models/Group')
const User = require('../models/User')

router.get('/', async (req, res, next) => {
  try {
    const docs = await Group.find()
    res.status(200).send(docs)
  } catch (err) {
    next(err)
  }
})

router.get('/:userId', async (req, res, next) => {
  try {
    const { userId } = req.params
    const user = await User.findById(userId).populate('groups')
    console.log('user HERE', user)

    if(!user) {
      next(new Error('User not found'))
    }
    
    if(user) {
      // const groupIds = user.group
      // const groups = groupIds.map((group) => {
      //   group.populate()
      // })
      res.status(200).json(user)
    }
  } catch (e) {
    next(e)
  }
})

module.exports = router