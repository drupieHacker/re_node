const express=require('express')
const app=express()
app.use(express.static(__dirname +'/public'))

const server =app.listen(3977,()=>{
    console.log('Servidor web iniciado')
})