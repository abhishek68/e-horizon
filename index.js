const express  = require('express')
const app = express();
const ejs = require('ejs')
const mongoose =  require('mongoose')
const adminRoute = require('./routes/admin'); 
const authUser = require('./routes/authUser')
const connectDB = require('./connection')
const bodyParser = require('body-parser')
const bcrypt = require('bcrypt');
const adminD=require('./models/admin');
const USER=require('./models/user')
const registeration  = require('./models/register');
const user = require('./models/user');
app.use(bodyParser.urlencoded({ extended: false }))

//USER.pre("save", function(next) {});
app.use(express.static(__dirname + '/public'));

app.set('view engine','ejs');

var register={};

app.get('/',(req,res)=>{

    res.render('login.ejs')
})
app.post('/login',async (req,res)=>{
    const email = req.body.email
    const password = req.body.password
    const data =await adminD.find({})
    if(password=="admin123")
    {
        res.render('admin.ejs');
    }
    //find user exist or not
    else{
    try{
  await USER.findOne({ email })
        .then(user => {
            
             
            if (!user) return res.status(400).json({ msg: "User not exist" })

           
            bcrypt.compare(password, user.password, ( data1) => {
               if (data1) {
                   res.render('main_page.ejs',{data})
                     register = user                 
                      
                } else {
                    return res.status(401).json({ msg: "Invalid credencial" })
                }

            })

        })
    }
    catch(err)
    {
        console.log(err)
    }
}
})

app.post("/register/:Ename",async(req,res)=>{
    try{
           
           const username = register.username;
            console.log(username)
           
               await registeration.find({username }).then(user=>{
             
                     for(let items of user)
                     {
                         if(items.Ename==req.params)
                         {
                            res.status(200).json({ message: 'ok' });
                         }
                         else
                         {
                            res.status(200).json({ message: 'hello' });
                             const Ename=req.params;
                             const email=register.email;
                             const username=register.username;
                             create(Ename,email,username)
                         }
                     }
           }  )
        }
        catch(err)
         {
            console.log(err)
         }      
        async  function create(Ename,email,username)
        {
              registeration.create(Ename,email,username)
        }
      

        })
app.use(adminRoute)
app.use(authUser)


app.listen(3000,()=>connectDB()
    .then((data)=>console.log("server is running"))
    .catch((err)=> console.log("error"))
)