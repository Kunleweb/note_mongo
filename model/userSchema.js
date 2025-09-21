const mongoose = require('mongoose');
const validator = require('validator')





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



























const user_model = mongoose.model('user_note', user_note )

module.exports= user_model