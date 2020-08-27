let mongoose = require('mongoose')
let Schema = mongoose.Schema;

let Users = new Schema({
  "id":String,
  "password":String,
  "age":Number,
  "gender":Number,
})

module.exports = mongoose.model('Users',Users);