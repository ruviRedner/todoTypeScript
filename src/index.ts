import express,{Express} from "express"
import "dotenv/config"
import cookieParser from "cookie-parser"
import authController from "./controller/authController"
import userController from "./controller/userController"
import todoController from "./controller/todoController"

const app:Express = express()

app.use(express.json()) // to get req.body
app.use(cookieParser()) // to get the req.cookie(s)
app.use("/auth",authController)
app.use("/users",userController)
app.use("/todos",todoController)

app.listen(process.env.PORT ,()=>{
    console.log(`server is up and running,fell free to visit at http/localost:${process.env.PORT}`)
})
