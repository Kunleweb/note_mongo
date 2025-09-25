const app = require('./../index')
const express = require('express')
const route = express.Router()
const notecontroller = require('./../controllers/notecontroller')
const usercontroller = require('./../controllers/usercontroller')



route.use(usercontroller.isLoggedIn)
route.get('/home',notecontroller.notepage)

module.exports = route