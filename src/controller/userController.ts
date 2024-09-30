import { Router } from "express"
import { handleSignupRequset } from "../routes/usersRoutes"

const router:Router = Router()

router.post("/signup",handleSignupRequset)

router.get("/profile",()=>{})

export default router