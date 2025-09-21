const user = require('./../model/userSchema');
const jwt = require('jsonwebtoken');


const sign = id=>{
    return jwt.sign({id}, process.env.JWT_SECRET, {expiresIn: 
        process.env.JWT_EXPIRES_IN
    })
}




exports.loginpage = (req,res)=>{
    res.end('Welcome to login page')
}
exports.login = async (req,res, next)=>{
    const email = req.body.email;
    const password = req.body.password
    if(!email|| !password){
        res.status(401).json({status: 'error', message: 'Please enter details'})
    }
    const User = await user.findOne({email}).select('+password');
    if(!User||!await User.correctPassword(password, User.password)) return next(res.status(401).json({status: 'wrong details'}));
    const token = sign(User)
    res.status(200).json({status: 'success', token, message: 'user logged in!'})
}




exports.logout =  (req, res)=>{
   res.end('wlecome to logout')
   
}

exports.signup = async(req, res)=>{
    try{const User = await user.create(req.body);
        res.status(200).json({ status: 'success', message:'User created!', data: {data:User}})
    }catch(err){res.status(400).json({status: 'error', message:err.message})}

    
}