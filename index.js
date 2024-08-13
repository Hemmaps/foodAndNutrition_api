import express from "express";
import dbConnect from "./dbConfig/conn.js"
import router from "./routes/foodRoutes.js";
import cors from "cors";
const port = 8000;
const app = express();
app.use(cors())
app.use(express.json())
app.use('/food',router)
app.get('/',(req,res)=>{
    res.send('hello')
})

app.listen(port,()=>{
    console.log(`Server is listening at http://localhost:${port}`)
})