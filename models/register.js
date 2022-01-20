const moongoose = require('mongoose')
const UserSchema = new moongoose.Schema({
Ename:{
        type:String,
       
       
    },
    email: {
        type:String,
       
        
    },
  
   username:{
        type:String,
       
        
    },
   
    
})
const user = moongoose.model("registeration",UserSchema)
module.exports = user;