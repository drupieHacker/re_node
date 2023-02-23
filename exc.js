const express = require('express')
const app=express()
app.get('/',(req,res)=>{
    res.send(`<!doctype html><html><head></head><body><h1>      
    sitio web con EXPRESS</h1></body></html>`)
})
const server = app.listen(3000,()=>{
    console.log('servidor web iniciado')
})