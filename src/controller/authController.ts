import { Router } from "express";
import { handleSigninRequset } from "../routes/authRoutes";

const router:Router = Router()

router.post("/signin",handleSigninRequset )

router.delete("/signout",()=>{})



export default router