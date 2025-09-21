const mongoose = require('mongoose');
const validator = require('validator')
const bcrypt = require('bcrypt')




const user_note = new mongoose.Schema({
    'name': {required: [true, 'user must have name'], type:String, maxlength: [100, 'max no of characters exceeded!']},
    'email': {required:[true, 'please supply your email'], type:String, unique:true, lowercase: true,
        validate:[validator.isEmail, 'Please provide a valid email']
    },
    'password': { required: [true, 'Please enter password'], type:String, minlength:5, select: false},
    'passwordConfirm': {required:[true, 'Please enter password'], type: String, minlength:5,
        validate: {validator:function(el){ return el === this.password},  message:'password does not match'}
    }
})








// document middelware for password hashing

user_note.pre('save', async function(next){
    if(!this.isModified('password')) return next();
    this.password = await bcrypt.hash(this.password,12);
    this.passwordConfirm = undefined;
    next()
})



//now we need a document middleware to compare hashed password to login password
user_note.methods.correctPassword = async function(candidatePassword, userPassword){
                        return await bcrypt.compare(candidatePassword, userPassword)

}



















const user_model = mongoose.model('user_note', user_note )

module.exports= user_model