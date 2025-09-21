const express = require('express');
const app = express();
const user_route = require('./routes/userroute');
const mongoose = require('mongoose');
const dotenv = require('dotenv')



app.use(express.json());


app.use('/api/user', user_route)













module.exports = app