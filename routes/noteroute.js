const app = require('./../index')
const express = require('express')
const route = express.Router()
const notecontroller = require('./../controllers/notecontroller')
const usercontroller = require('./../controllers/usercontroller')


route.use(usercontroller.protect)
route.get('/mynotes', notecontroller.mynotes)
route.get('/mynote/:slug', notecontroller.note)
route.post('/addnote', notecontroller.addnote)
route.patch('/editnote/:slug', notecontroller.editnote)
route.delete('/deletenote/:slug', notecontroller.deletenote)

module.exports = route