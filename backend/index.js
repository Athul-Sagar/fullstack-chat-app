import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import authRoute from './src/routes/authRoute.js'
import messageRoute from './src/routes/messageRoute.js'

import path from 'path';

import { ConnectDB } from './src/lib/db.js'
import cookieParser from 'cookie-parser'
import { app,server } from './src/lib/socket.js'

dotenv.config() 
const __dirname=path.resolve();
ConnectDB()
app.use(cors({
    origin:"http://localhost:5173",
    credentials:true,
}))
app.use(express.json())
app.use(cookieParser())

const PORT=process.env.PORT

app.use('/api/auth',authRoute)
app.use('/api/messages',messageRoute)

if(process.env.NODE_ENV==="production"){
    app.use(express.static(path.join(__dirname,"../Frontend/dist")))

    app.get("*",(req,res)=>{
        res.sendFile(path.join(__dirname,"../Frontend","dist","index.html"))
    })
}





server.listen(PORT,()=>{
    console.log(`The server running on ${PORT}`)
})