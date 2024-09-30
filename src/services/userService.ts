import { users } from "../data/data";
import ResponseData from "../types/DTO/responseData";
import SignupDto from "../types/DTO/signupDTO";
import User from "../types/models/user";

export default class UserService{
    public static async signup (user:SignupDto):Promise<ResponseData<{id:string} | unknown>>{
        try {
            const {password,username} = user
            if(!username || !password){
                 return{
                    err:true,
                    message:"Missing mandatory data ,username or password",
                    status:400
                 }
            }
            const newUser = new User(username)
            await newUser.hashPassword(password)
            users.push(newUser)
            return{
                err:false,
                message:"User signed up successfully",
                status:201,
                data:{id:newUser.id}
            }   
        } catch (error) {
            return{
                err:true,
                status:500,
                data:error
           }
       }
    }
    public static  getAllUsers():User[]{
        return users
    }
    public static  getUser(id:string):User|undefined{
        return users.find(u=> u.id === id)
    }
}