const USERS= require ('../models/userSchema')
const jwt = require('jsonwebtoken')
const COURTS=require('../models/courtSchema')


const doSignUp =(req,res)=>{
    try{
   USERS({
        name:req.body.name,
        email:req.body.email,
        mobileNumber:req.body.number,
        password:req.body.pass,
        confpass:req.body.confpass,
    }).save().then((resp)=>{
        console.log(resp,"res after user creation")
        res.status(200).json({message:'signup successful'})
    })
}catch(error){
    console.log(error)
    res.status(403).json({message:'signup failed'})
}
}

const doLogin= async(req,res)=>{
    console.log(req.body)
const userDetails =await USERS.findOne({email:req.body.email})
if(userDetails){
if(userDetails.password===req.body.password){
    let token=null
    token =jwt.sign({userID:userDetails._id,name:userDetails.name,role:userDetails.role,email:userDetails.email},process.env.JWT_PASSWORD,{expiresIn:'2d'})
    res.status(200).json(
        {message:'Login successful',
   token, 
   //you can also simply write just token or token:token as key and variable value are both same//
    userDetails
})
}
}else{
    res.status(401).json({message:'invalid credentials'})
}
 }

 const getCourtsData=(req,res)=>{
   COURTS.find().then((response)=>{
    res.status(200).json(response)
   }).catch((err)=>{
    res.status(500).json('Server error')
   })
 }

 const getCourtDatabyId=(req,res)=>{
    COURTS.findOne({_id:req.query.id}).then((response)=>{
        res.status(200).json(response)
    }).catch((err)=>{
        res.status(500).json('Server error')
       })
 }
module.exports ={doSignUp,doLogin,getCourtsData,getCourtDatabyId}