const mongoose = require('mongoose');
const adminD = new mongoose.Schema({
    eventName:{
        type:String,
        require:true
    },
    name:{
        type:String,
        require:true
    },
    eventDescription:{
        type:String,
        require:true
    },
    date:{
        type:String,
        require:true
    }
})
const  admin = mongoose.model("admin",adminD);
module.exports =admin;