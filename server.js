const app = require('./index')
const mongoose = require('mongoose');
const dotenv = require('dotenv')
dotenv.config({path: './config.env'})
const port = process.env.PORT || 3000


const DB = process.env.DATABASE.replace('<PASSWORD>', process.env.PASSWORD);
mongoose.connect(DB, {useNewUrlParser: true,useUnifiedTopology: true}).then(
    ()=>{console.log('DB connection succesful')}) 



app.listen(port, ()=>{
    console.log(`Listening on port ${port}`)
})