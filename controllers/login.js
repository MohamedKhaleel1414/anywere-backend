const jwt = require('jsonwebtoken')
const config = require('dotenv').config()

const logingin = (req,res)=>{
    console.log(req.body)
    const token = jwt.sign(req.body.password, process.env.TOKEN_SECRET)
    console.log(token)
    res.header("auth",token)
    res.cookie("authcookie",token,{httpOnly:false})
    res.send("done loging")
}

module.exports = {logingin}