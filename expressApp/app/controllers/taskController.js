const Task = require('../models/task')

//export object which access to all callBack functions
const eventsCtlr = {}

//to object we attach property within object because we are exporting multiple values here
eventsCtlr.list = (req,res)=>{
    Task.Find()
    .then((task)=>{
        res.json(task)
    })
    .catch((err)=>{
        res.json(err)
    })
}

// app.get('/',(req,res)=>{
//     res.send('welcome to the page')
// })

eventsCtlr.start = (req,res)=>{
    res.send('welcome to the page')
}

eventsCtlr.create = (req,res)=>{
    const body =req.body
    //instanciate the task object
    const task=new Task(body)
    //if we don't pass body as arg to Task we have to asiign each value manually (ex:task.title:body.title)
    task.save()
    .then((task)=>{
        res.json(task)
    })
    .catch((err)=>{
        res.json(err)
    })
}

module.exports = eventsCtlr

// app.get('/api/tasks/:id',(req,res)=>{
//     const id=req.params.id
//    Task.findById(id)
//    .then((task)=>{
//        res.json(task)
//    })
//    .catch((err)=>{
//        res.json(err)
//    })
// })
// app.put('/api/tasks/:id',(req,res)=>{
//     const id=req.params.id
//     const body=req.body
//     Task.findByIdAndUpdate(id,body,{new:true , runValidators : true})
//     .then((task)=>{
//         res.json(task)
//     })
//     .catch((err)=>{
//         res.json(err)
//     })
// })

// app.delete('/api/tasks/:id',(req,res)=>{
//     const id=req.params.id
//     Task.findByIdAndDelete(id)
//     .then((task)=>{
//         res.json(task)
//     })
//     .catch((err)=>{
//         res.json(err)
//     })
// })