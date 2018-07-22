const express = require('express')
const Router = express.Router
const router = Router()
const Group = require('../models/Group')

router.get('/', async (req, res, next) => {
  try {
    const docs = await Group.find()
    res.status(200).send(docs)
  } catch (err) {
    next(err)
  }
})

module.exports = router