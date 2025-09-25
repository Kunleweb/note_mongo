const express = require('express');
const app = express();
const cookieParser = require('cookie-parser')
const user_route = require('./routes/userroute');
const note_route = require('./routes/noteroute');
const view_route = require('./routes/viewroute')
const path = require('path');
const ejs = require('ejs');
const helmet = require('helmet')






app.use(express.json());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')))
app.set('view-engine', ejs);
app.set('views', path.join(__dirname, 'views'))

app.use(helmet.crossOriginResourcePolicy({policy: 'cross-origin'}))

app.use('/api/user', user_route)
app.use('/api/note', note_route)
app.use('/api/v1', view_route)













module.exports = app