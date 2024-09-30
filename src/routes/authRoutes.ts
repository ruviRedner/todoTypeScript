import { Request,Response } from "express";
import SignupDto from "../types/DTO/signupDTO";
import AuthService from "../services/authService";

export const handleSigninRequset = async(
    req:Request<any,any,SignupDto>,
    res:Response
):Promise<void> => {
      try {
       const result = await AuthService.signin(req.body)
        res.status(result.status!).json(result)
      } catch (err) {
        console.log(err)  
      } 
}