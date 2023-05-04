const mongoose = require('mongoose')
const Schema = mongoose.Schema

const counterSchema = new Schema({
      count :{
        type: Number,
        default:0,
        required:true
      }
})

const Counter = mongoose.model("Counter",counterSchema)

module.exports=Counter