const express = require('express')
const fs = require('fs')
let router = express.Router();
require('./linkDB');
let Users = require('../models/user');
// let Users = require('../modles/user')

router.get('/',(req,res)=>{
  fs.readFile('./data.json',(err,data)=>{
    if(err){
      return res.status(500).send('Server error')
    }
    // console.log(typeof data.toString())
    res.send(data.toString())
  })
  let admin = new Users({
    id:'admin',
    password:'123456',
    age:19,
    gender:0,
  })
  // admin.save((err, ret)=>{
  //   if(err){
  //     console.log('存储失败')
  //   }else {
  //     console.log('保存成功')
  //     console.log(ret)
  //   }  // })
})
router.post('/find',(req,res)=>{
  // res.send('你好啊')
  // let data = parseInt(req.data("name"))
  // console.log(data)
})
router.post('/register',(req,res)=>{
  req.on("data",function(data){
  // let name=querystring.parse(decodeURIComponent(data)).name;
  // let password=querystring.parse(decodeURIComponent(data)).password;
  console.log(data)
 });
})




module.exports = router