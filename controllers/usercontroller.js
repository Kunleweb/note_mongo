const user = require('./../model/userSchema');
const jwt = require('jsonwebtoken');
const {promisify} = require('util');

const sign = id=>{
    return jwt.sign({id}, process.env.JWT_SECRET, {expiresIn: 
        process.env.JWT_EXPIRES_IN
    })
}

const cookieStore = (user, statusCode, res)=>{
    const token = sign(user._id)
    const cookieOptions ={
        expires: new Date(Date.now() + process.env.JWT_COOKIE_EXPIRES_IN *24*60*60*1000),
        httpOnly: true,

    }
    res.cookie('jwt',
    token,  cookieOptions
   )

   user.password = undefined;
   res.status(statusCode).json({
    status: 'success', token, data: {user}
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
    cookieStore(User, 200, res)
}




exports.logout =  (req, res)=>{
   res.end('wlecome to logout')
   
}

exports.signup = async(req, res)=>{
    try{const User = await user.create(req.body);
        res.status(200).json({ status: 'success', message:'User created!', data: {data:User}})
    }catch(err){res.status(400).json({status: 'error', message:err.message})}

    
}


exports.protect = async(req,res,next)=>{
    try{let token
    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
        token = req.headers.authorization.split(' ')[1]
    };
    if(!token){
        return next(res.status(401).json({status:'failed', message:'unauthorized'}))
    }
    const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);
    const currentUser = await user.findById(decoded.id);
    if(!currentUser){
        res.status(401).json({status:'error', message:'User not logged in!'})
    }
    req.user = currentUser;
    next()}catch(err){
        res.status(400).json({status:'error', message:err.message})
    }

}