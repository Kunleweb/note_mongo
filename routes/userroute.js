const app = require('./../index')
const express = require('express')
const route = express.Router()
const usercontroller = require('./../controllers/usercontroller')


route.get('/login', usercontroller.loginpage)
route.post('/login', usercontroller.login)
route.get('/logout', usercontroller.logout)
route.post('/signup', usercontroller.signup)


route

module.exports = route