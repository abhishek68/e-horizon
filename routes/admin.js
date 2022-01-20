const express = require('express')
const router = express.Router();
const mongoose =  require('mongoose');
const admin = require('../models/admin');
const adminD=require('../models/admin');

// router.get('/admin',(req,res)=>{
//      res.render('admin.ejs');
// })
router.post('/eventList',async(req,res)=>{
    try{
          const admin=req.body;
         
          await adminD.create(admin)
          const data =await adminD.find({})
         
          res.render('adminView.ejs',{data})
         
    }
    catch(err)
    {
        console.log(err)
    }
})
router.get('/eventList',async(req,res)=>{
    try{
          const data =await adminD.find({})
          let ts = Date.now();

            let date_ob = new Date(ts);
            let date = date_ob.getDate();
            let month = date_ob.getMonth()+1;
            let year = date_ob.getFullYear();
             const checking=year+"-"+month+"-"+data
            // prints date & time in YYYY-MM-DD format
            console.log(checking)
          for(let item of data)
          {
             
            console.log(checking<item.date)
          }
          res.render('adminView.ejs',{data})
    }
    catch(err)
    {
        console.log(err)
    }
})
router.get('/adminEventDelete/:_id',async(req,res)=>{
       const _id = req.params._id;
       console.log(req.params)
      try{
      const del= await adminD.findByIdAndDelete({_id:_id})
      const data =await adminD.find({})
      res.render('adminView.ejs',{data})
      }
      catch(err)
      {
          console.log(err)
      }
     
})



module.exports = router