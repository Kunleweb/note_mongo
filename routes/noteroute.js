const app = require('./../index')
const express = require('express')
const route = express.Router()
const notecontroller = require('./../controllers/notecontroller')
const usercontroller = require('./../controllers/usercontroller')


route.get('/mynotes',usercontroller.protect, notecontroller.mynotes)



module.exports = route