const express = require('express')
const fs = require('fs')
const cors = require('cors')
const app =express()
const Router = require('./routes/router')

app.use(cors())
app.use(Router)

// app.get('/',(req,res)=>{
//   fs.readFile('./data.json',(err,data)=>{
//     if(err){
//       return res.status(500).send('Server error')
//     }
//     console.log(typeof data.toString())
//     res.send(data.toString())
//   })
  
// })
app.listen(3000, () => {
  console.log('linstening 3000...')
})