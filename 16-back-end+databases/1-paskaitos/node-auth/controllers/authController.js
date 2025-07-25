const User = require("../models/User");

// cookies
const jwt = require('jsonwebtoken')

const maxAge = 3*24 *60 *60 ; // 3 days in seconds
const createToken = (id) => {
    return jwt.sign({id}, 'slaptas dalykas', {
        expiresIn: maxAge
    })
}

const handleErrors = (error) => {
    let errors = {email: '', password: ''}
    console.log(error)

    if (error.code === 11000) {
        errors.email = 'emailas naudojamas, naudok kita';

        return errors;
    }

        if (error.message === 'incorrect email') {
        errors.email = 'toks mailas nera registruotas';
    }
    
    if (error.message === 'incorrect password') {
        errors.password = 'slaptazodis neteisingas';
    }
    if (error.message.includes('user validation failed')) {
        Object.values(error.errors).forEach(({properties}) => {
            errors[properties.path] = properties.message;
        });
    }
    return errors
}

const signupGet = (req, res) => {
    res.render('signup');
}
const loginGet = (req, res) => {
    res.render('login');
}
const signupPost = async (req, res) => {
    const {email, psw} = req.body;

    try{
        const user =  await User.create({
            email:email,
            password: psw
        });
        // cookie
        const token = createToken(user._id);
        res.cookie('jwt', token, {httpOnly: true, maxAge: maxAge * 1000});
        res.json({user:user._id})

    }   catch(e){
        const error = handleErrors(e);
        res.json({error})
    }

    res.send('new signup');
}
const loginPost = async (req, res) => {
    const {email, psw} = req.body;

    try {
        const user = await User.login(email, psw)

        const token = createToken(user._id);
        res.cookie('jwt', token, {httpOnly: true, maxAge: maxAge * 1000});
        res.json({user:user._id})
    } catch(e) {
        const error = handleErrors(e);
        res.json({error})
    }
}
const logoutGet = (req, res) => {
    res.cookie('jwt', '', {maxAge: 1});
    res.redirect('/')
}
module.exports = {
    signupGet,
    loginGet,
    signupPost,
    loginPost,
    logoutGet
};