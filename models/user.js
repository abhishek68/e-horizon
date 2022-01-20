const moongoose = require('mongoose')
const UserSchema = new moongoose.Schema({
    email:{
        type:String,
       
       
    },
    hashedPassword: {
        type:String,
       
        
    },
  
   username:{
        type:String,
       
        
    },
   
    
})
const user = moongoose.model("Newuser",UserSchema)
module.exports = user;