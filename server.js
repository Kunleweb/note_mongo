const app = require('./index')
const mongoose = require('mongoose');
const dotenv = require('dotenv')
dotenv.config({path: './config.env'})


const DB = process.env.DATABASE.replace('<PASSWORD>', process.env.PASSWORD);
mongoose.connect(DB, {useNewUrlParser: true,useUnifiedTopology: true}).then(
    ()=>{console.log('DB connection succesful')}) 

app.listen(3000, "127.0.0.1", ()=>{
    console.log('Listening on port 3000')
})