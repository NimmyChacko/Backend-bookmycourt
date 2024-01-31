const mongoose = require('mongoose');
const connectDB = async()=>{
    try{
        const conn =await mongoose.connect('mongodb://127.0.0.1:27017/bookmycourt')
        console.log('MongoDB connected');
    }catch(error){
        console.log(error)
    }
}
module.exports = connectDB;