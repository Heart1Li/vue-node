const express = require('express')
const fs = require('fs')
let router = express.Router();
require('./linkDB');
let Users = require('../models/user');
let Article = require('../models/article');
const { db } = require('../models/article');
// let Users = require('../modles/user')

router.get('/api/article', async(req, res) => {
  let articles = await Article.find()
  res.send(articles)
  // article.forEach(function (mag) {
  //   res.send(mag)
  // })
  // res.send('index')
  
})



// router.post('/find', (req, res) => {

//   let article = new Article({
//     title: 'first article',
//     author: 'li',
//     time: new Date(),
//     classfiy: 'blog',
//     contnet: '第一篇文章',
//   })
//   article.save((err, ret)=>{
//     if(err){
//       console.log('存储失败')
//     }else {
//       console.log('保存成功')
//       console.log(ret)
//     }  
//    })
//   res.send('你好啊')
//   let data = parseInt(req.data("name"))

  // console.log(req.params)

  // let massages = db.collection('massages').find({})
  // massages.forEach(function (mag) {
  //   res.send(mag)
  // })

//   req.on("data", function (data) {
//     console.log(data.toString())
// });
// })


module.exports = router