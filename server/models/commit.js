let mongoose = require('mongoose')
let Schema = mongoose.Schema;

let Commits = new Schema({
  "name":String,
  "message":String,
})

module.exports = mongoose.model('Commits',Commits);