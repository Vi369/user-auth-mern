import dotenv from 'dotenv'
import app from './app.js'
import connectToDb from './db/db.js'

//config dotenv file
dotenv.config({
    path: './.env'
})

const PORT = process.env.PORT || 8000
// connect to Db
connectToDb()
.then(()=>{
    app.on("error", (err)=>{
        console.log("Error", err);
        throw err
    })
    app.listen(PORT, ()=>{
        console.log(`server is listening at http://localhost:${PORT}`)
    })
})
.catch((error)=>{
    console.log("MongoDB connection failed")
})