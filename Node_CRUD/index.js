var mongoose = require('mongoose')
var express = require('express')
var route = require('./routes')
var bodyParser =require('body-parser')

const db = 'mongodb+srv://Danny:d2898@cluster0.22zqg.mongodb.net/songs?retryWrites=true&w=majority'

mongoose.connect(db).then(()=>{
    console.log('DB Connected')

    app = express();
    app.use(bodyParser.urlencoded({extended:false}))
    app.use('/api',route)
    
    app.listen(3000,()=>{
        console.log('Server Started At Port 3000')
    })
}).catch((e)=>{
    console.log(e.toString())
})
