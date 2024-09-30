import jwt,{ Jwt } from "jsonwebtoken";
import ResponseData from "../types/DTO/responseData";
import SignupDto from "../types/DTO/signupDTO";
import { users } from "../data/data";
import TokenPayloedDto from "../types/DTO/tokenPayloedDto";
import SigninResponseDto from "../types/DTO/signinResponseDto";

export default class AuthService{
    public static async signin(userFromBody:SignupDto):Promise<ResponseData<SigninResponseDto | unknown>>{
        try {
            const {username,password} = userFromBody
             //return erros if no user/password matching
            if (!username || !password) {
                return{
                    err:true,
                    message:"missing mandetory",
                    status:400
                }  
            }
            //find the user
            const user = users.find(u=> u.username === username)
            if (!user) {
                return{
                    err:true,
                    message:"not found",
                    status:404
                }   
            }
            if(!await user.comparePassword(password)){
                return{
                    err:true,
                    message:"wrong password",
                    status:401
                }
            }
            //create token
            const payloed:TokenPayloedDto ={
                usernane:username,id:user.id
            }
            const token = jwt.sign(payloed,process.env.JWT_SECRET as string,{
                expiresIn:"5m"
            })
            //return token to the route
            return{
                err:false,
                status:200,
                data:{
                    token
                }
            }
        } catch (error) {
            //handle errors
            return{
                err:true,
                message:"wrong password",
                status:500,
                data:error
            }
        }
    }
}