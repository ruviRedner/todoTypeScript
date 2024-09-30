import { Request, Response } from "express";
import SignupDto from "../types/DTO/signupDTO";
import UserService from "../services/userService";

export const handleSignupRequset = async(
    req:Request<any,any,SignupDto>,
    res:Response
):Promise<void> => {
      try {
      const result = await UserService.signup(req.body)
        res.status(result.status!).json(result)
      } catch (err) {
        console.log(err)  
      } 
}