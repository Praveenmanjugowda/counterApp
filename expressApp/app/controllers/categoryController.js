const Category = require('../models/category')

const categoryCtlr = {}

categoryCtlr.enter = (req,res)=>{
     res.send("welcome to category part")
}

categoryCtlr.list = (req,res)=>{
    Category.find()
         .then((category)=>{
            res.json(category)
         })

         .catch((error)=>{
            res.json(error)
         })
}

module.exports = categoryCtlr