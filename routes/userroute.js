const app = require('./../index')
const express = require('express')
const route = express.Router()
const usercontroller = require('./../controllers/usercontroller')





route.get('/', usercontroller.loginpage)
route.post('/api/user/login', usercontroller.login)
route.get('/api/user/logout', usercontroller.logout)
route.post('/api/user/signup', usercontroller.signup)
route.get('/api/user/signup', usercontroller.signuppage)



module.exports = route