import { Router } from "express"
import { handleProfileRequest, handleSignupRequset, hendleGetAllUsers } from "../routes/usersRoutes"
import verifyUser from "../middelweras/verify"

const router:Router = Router()

router.post("/signup",handleSignupRequset)

router.get("/profile",verifyUser, handleProfileRequest)

// router.get("/",hendleGetAllUsers)

export default router