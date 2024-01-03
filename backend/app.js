import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use(cors({
    origin:"http://localhost:5501",
    credentials:true
}))
app.use(cookieParser())

// import routes
import userRoutes from './routes/user.routes.js'

//routes declaration 
app.use('/', userRoutes)
export default app;