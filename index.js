const express = require('express');
const app = express();
const user_route = require('./routes/userroute');
const note_route = require('./routes/noteroute')





app.use(express.json());


app.use('/api/user', user_route)
app.use('/api/note', note_route)













module.exports = app