const mongoose=require('mongoose');


const User=new mongoose.Schema({

Name:{
    type:String,
    required:true
},
Email:{
    type:String,
    required:true,
    unique:true
},
Password:{
    type:String,
    required:true
},
userName:{
    type:String,
    required:true,
    unique:true
},







});

module.exports=mongoose.model('User',User);