const express = require('express')
const fs = require('fs')
let router = express.Router();
require('./linkDB');
let Users = require('../models/user');
let Article = require('../models/article');
let Commits = require('../models/commit');
// const { db } = require('../models/article');
// let Users = require('../modles/user')

router.get('/api/article', async(req, res) => {
  let articles = await Article.find()
  // console.log(articles)
  res.send(articles)
  
  // article.forEach(function (mag) {
  //   res.send(mag)
  // })
  // res.send('index')
  
})

router.get('/api/article/:id', async(req, res) => {
  // console.log(req)
  let articles = await Article.findById(req.params.id)
  console.log(articles)
  res.send(articles)
  // article.forEach(function (mag) {
  //   res.send(mag)
  // })
  // res.send('index')
  
})

router.get('/api/category/:type', async(req, res) => {
  console.log(req.params)
  // let articles = await Article.find({classfiy:`${req.params.type}`})
  let articles = await Article.find({classfiy:'blog'})
  console.log(articles)
  res.send(articles)
  // article.forEach(function (mag) {
  //   res.send(mag)
  // })
  // res.send('index')
  
})

router.get('/api/commit', async (req, res) => {
  let commits = await Commits.find()
    res.send(commits)
})

router.post('/api/commit/create',async (req, res) => {
  // console.log(req)
  req.on("data", function (data) {
    // const commits =  Commits.create(data.toString())
    const commits =  Commits.create(JSON.parse(data.toString()))
   res.send(commits)
        console.log(JSON.parse(data.toString()))
    });
  
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