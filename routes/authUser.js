const express = require('express')
const router = express.Router();
const mongoose =  require('mongoose');
const passport = require('passport');
const USER = require('../models/user')
const adminD=require('../models/admin');
const bodyParser = require('body-parser')
const bcrypt = require('bcrypt');
router.get('/newUser',async(req,res)=>{
       res.render('register.ejs');
})
router.post('/newUser',async(req,res)=>{
     try{
          const salt=await bcrypt.genSalt(5)
          
          const email=req.body.email;
          const username=req.body.username;
          const password =req.body.password;
          const hashedPassword=await bcrypt.hash(password,salt)
          console.log(hashedPassword)
          console.log(username)
          const newUser = {email:email,hashedPassword:hashedPassword,username:username}

          
          console.log(newUser)
          const alreadyAUser = await USER.find({username:username});
          console.log(alreadyAUser);
           if(alreadyAUser)
           {
               await USER.create(newUser);
                const data =await adminD.find({})
                res.render('main_page.ejs',{data});
               
           }
           else{
               
                console.log
               // await USER.create(newUser);
               // const data =await adminD.find({})
               // res.render('main_page.ejs',{data});
              
           }
     }
     catch(err)
     {
          console.log(err)
     }
})
// router.get('/new',async(req,res)=>{
     
//      const data =await adminD.find({})
//      res.render('main_page.ejs',{data});
// })
router.get('/userViewMore/:_id',async(req,res)=>{
     try{
     const _id = req.params._id
     const data =await adminD.find({_id})
     console.log(data)
     res.render('viewMore.ejs',{data});
    res.send(data)
     }
     catch(err)
     {
          console.log(err)
     }
})
// router.post('/new',async(req,res)=>{
//      try{
//         res.render('main_page.ejs');
//      }
//      catch(err)
//      {
//          console.log(err)
//      }
// })



module.exports =router;