const COURTS = require('../models/courtSchema');

const createCourt = (req,res)=>{
  COURTS({
    courtName:req.query.courtName,
    location:req.query.location,
    address:req.query.address,
    description:req.query.description,
    mobileNumber:req.query.mobileNumber,
    courtPic:req.file.filename
  }).save().then((response)=>{
    res.status(200).json('Court created successfully')
  }).catch(err=>{
    res.status(401).json('Court creation failed')
  })  
}

module.exports={createCourt}