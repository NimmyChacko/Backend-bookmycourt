const mongoose = require ('mongoose');

const userSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    mobileNumber:{
        type:Number,
        required:true
    },
    password:{
        type:String,
        required:true
    },
   role:{
        type:Number,
        required:true,
        default:2
        //role: admin-1,user-2//
    
    },
   timestamp:{
        type:Date,
        default:new Date()
    }
})

const users = mongoose.model('users',userSchema)
module.exports= users