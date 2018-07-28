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
    const user = await User
      .findById(userId)
      .populate({
        path: 'groups',
        populate: { path: 'users' }
      })
    console.log('user HERE', user)

    if(!user) {
      next(new Error('User not found'))
    }

    if(user) {
      res.status(200).json(user)
    }
  } catch (e) {
    next(e)
  }
})

router.get('/:userId/:groupId', async (req, res, next) => {
  try {
    const { groupId } = req.params
    const group = await Group
      .findById(groupId)
      .populate('restaurants')
    if(!group) {
      next(new Error('Group not found'))
    }

    if(group) {
      res.status(200).json(group)
    }
  } catch (e) {
    next(e)
  }
})

module.exports = router