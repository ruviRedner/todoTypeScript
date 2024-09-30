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
export const handleProfileRequest =(
  req:Request,
  res:Response,
)=>{
  const result = {
    err:false,
    //@ts-ignore
    data:UserService.getUser(req.user.id),
    status:200
  }
  res.json(result)
}
// export const  hendleGetAllUsers = (req:Request,res:Response):void =>{
//   try {
//     const result = {
//       err:false,
//       data:UserService.getAllUsers(),
//       status:200
//     }
//     res.json(result)
//   } catch (error) {
//     res.json({
//         err:true,
//         status:500
//     })

    
//   }

// }