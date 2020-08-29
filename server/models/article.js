let mongoose = require('mongoose')
let Schema = mongoose.Schema;

let Article = new Schema({
  "title":String,
  "author":String,
  "time":Date,
  "classfiy":String,
  "contnet":String,
})

module.exports = mongoose.model('Article',Article);