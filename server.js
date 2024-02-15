var express = require('express')
var http = require('http')
// var router = require('./routes')
// var body_parser=require('body-parser')

const app = express()
    app.use("/",(req,res)=>{
     res.json("express server")
})


// app.use(body_parser.urlencoded({extended:true}));
// app.use(body_parser.json())
// app.use("/",router)

var server = http.createServer(app);
  server.listen(6000,()=>{
    console.log("server is running in http://localhost:6000");
})
