//create a schema
const mongoose = require('mongoose')

const Schema=mongoose.Schema
const taskSchema=new Schema({
    title:{
         type:String,
         required:true
        },
    description:{ 
        type:String,
        required:[true,`can't be blank`]
    },
    dueDate:{
        type:Date
    },
    completed:{
        type:Boolean
    },
    createdDate:{
        type:Date,
        default:Date.now
    }
})

const Task=mongoose.model('Task',taskSchema)

module.exports = Task