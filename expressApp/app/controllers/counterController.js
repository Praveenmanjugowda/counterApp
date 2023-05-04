const Counter = require('../models/counter')
const counterCntlr = {}

counterCntlr.list = (req,res)=>{
    Counter.find()
         .then((counters)=>{
            res.json(counters)
         })

         .catch((error)=>{
            res.json(error)
         })
}

counterCntlr.create = (req,res)=>{
    const counter = new Counter()
    Counter.count + 1
    console.log(counter)
    counter.save()
         .then((counter)=>{
            res.json(counter)
         })
         .catch((error)=>{
            res.json(error)
         })        
}

counterCntlr.destroy = function (req,res){
    const id = req.params.id
    Counter.findByIdAndDelete(id)
        .then((counter) => {
           if(counter){
              res.json(counter)
           }else{
              res.json({})
           }
        })

        .catch((error)=>{
            res.json(error)
        })
}
module.exports = counterCntlr