const mongoose=require('mongoose');

const User=new mongoose.Schema({
    name:String,
    age:Number,
    city:String,
    email:String
})

module.exports=mongoose.model("G22User",User); 