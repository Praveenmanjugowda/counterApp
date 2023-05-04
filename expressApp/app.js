const express = require('express')
const port = 4875
const mongoose = require('mongoose')
const categoryCtlr = require('./app/controllers/categoryController')
const app = express()
app.use(express.json())

const cors = require('cors')

const eventsCtlr = require('./app/controllers/taskController')
const CategoryCtlr = require('./app/controllers/categoryController')
const CountersCntrl = require('./app/controllers/counterController')


//to connect with db
mongoose.connect('mongodb://localhost:27017/counterfullstack')
.then(()=>{
    console.log('connected with db')
})
.catch(()=>{
    console.log('error in connection')
})

//middleware
// app.use(function(req,res,next){
//     console.log(`S{req.method} - ${req.url}`)
//     next()
// })

//use of CORS
app.use(cors())

app.get('/',eventsCtlr.start)
app.get('/api/task',eventsCtlr.list)
app.post('/api/task',eventsCtlr.create)

app.get('/c',CategoryCtlr.enter)
app.get('/categories',CategoryCtlr.list)

app.get('/api/counter',CountersCntrl.list)
app.post('/api/counter',CountersCntrl.create)
app.delete('/api/counter/:id',CountersCntrl.destroy)

app.listen(port,()=>{
    console.log(`app is running in the port ${port}`)
})