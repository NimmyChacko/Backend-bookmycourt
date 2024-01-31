const mongoose = require ('mongoose');

const courtSchema = mongoose.Schema({
    courtName:{
        type:String,
        required:true
    },
    location:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    mobileNumber:{
        type:Number,
        required:true
    },
    description:{
        type:String,
        required:true
    },
   courtPic:{
        type:String,
       
    },
   timestamp:{
        type:Date,
        default:new Date()
    }
})

const courts = mongoose.model('courts',courtSchema)
module.exports= courts