const mongoose = require('mongoose');
const schema=new mongoose.Schema({
    email:{
        type:String,
        required:true
    },name:{
        type:String,
        required:true
    },address:{
        type:String
    },contact:{
        type:Number,
        required:true
    },password:{
        type:String,
        required:true
    }
});
module.exports=mongoose.model('customer',schema);
