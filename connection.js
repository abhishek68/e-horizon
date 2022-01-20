const moongoose = require("mongoose")

const connectToDB = async()=>moongoose.connect("mongodb+srv://ak:ak@cluster0.jmjiz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",{
    useNewUrlParser:true,
   
    useUnifiedTopology:true,
});

module.exports  = connectToDB 