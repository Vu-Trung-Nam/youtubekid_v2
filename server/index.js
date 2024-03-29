import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'

import mongoose from 'mongoose'
import userRoutes from "./routers/users.js"
import videoRoutes from "./routers/videos.js"
import commentRoutes from "./routers/comments.js"
import authRoutes from "./routers/auth.js"
import cookieParser from 'cookie-parser'

const app = express();
const PORT = process.env.port || 5000;

app.use(cookieParser())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true, limit:'30mb'}));
app.use(cors());


app.use('/api/auth',authRoutes)
app.use('/api/users',userRoutes)
app.use('/api/videos',videoRoutes)
app.use('/api/comments',commentRoutes)

app.use(express.json())
app.use((err,req,res, next)=>{
    const status = err.status || 500
    const message = err.message || "Something wrong!"
    return res.status(status).json({
        success:false,
        status,
        message,
    })
})
const URI = 'mongodb+srv://ADMINHYU:vK62PHYK13fCLYaT@databaseuser.5tiezak.mongodb.net/?retryWrites=true&w=majority'

mongoose.connect(URI,{
    
    useNewUrlParser:true, 
    useUnifiedTopology:true})
    .then(()=>{
        console.log("Connected to DB")
    }).catch(err=>{
        console.log('err',err)
    })


app.listen(PORT,()=>{
    console.log(`Server run on port ${PORT}`)
})