const express = require('express')
const fs = require('fs')
let router = express.Router();
require('./linkDB');
let Users = require('../models/user');
let Massages = require('../models/massage');
const { db } = require('../models/user');
// let Users = require('../modles/user')

router.get('/', (req, res) => {
  // fs.readFile('./data.json',(err,data)=>{
  //   if(err){
  //     return res.status(500).send('Server error')
  //   }

  //   res.send(data.toString())
  // })
  // let admin = new Users({
  //   id:'admin',
  //   password:'123456',
  //   age:19,
  //   gender:0,
  // })
  let users = db.collection('users').find({})
  users.forEach(function (user) {
    // console.log(user.data);
    res.send(user)
  })
  // admin.save((err, ret)=>{
  //   if(err){
  //     console.log('存储失败')
  //   }else {
  //     console.log('保存成功')
  //     console.log(ret)
  //   }  // })
})
router.post('/find', (req, res) => {

  let massage1 = new Massages({
    title: 'first massage',
    author: 'li',
    time: new Date(),
    classfiy: 'blog',
    contnet: 'this is a test',
  })
  // massage1.save((err, ret)=>{
  //   if(err){
  //     console.log('存储失败')
  //   }else {
  //     console.log('保存成功')
  //     console.log(ret)
  //   }  
  //  })
  // res.send('你好啊')
  // let data = parseInt(req.data("name"))

  // console.log(req.params)

  let massages = db.collection('massages').find({})
  massages.forEach(function (mag) {
    // console.log(mag);
    res.send(mag)
    // res.send(user)
  })

  req.on("data", function (data) {
    console.log(data.toString())
});
})

router.post('/register', (req, res) => {
  req.on("data", function (data) {
    // let name=querystring.parse(decodeURIComponent(data)).name;
    // let password=querystring.parse(decodeURIComponent(data)).password;

  });
})




module.exports = router