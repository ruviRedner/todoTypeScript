import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import TokenPayloedDto from "../types/DTO/tokenPayloedDto";


const verifyUser = async(
    req:Request,
    res:Response,
    next:NextFunction
):Promise<void> => {
    try {
        const token = req.headers.authorization
        const decoded:TokenPayloedDto = jwt.verify(token ||"",process.env.JWT_SECRET!) as TokenPayloedDto
        //@ts-ignore
        req.user = decoded
        next()
    } catch (error) {
        console.log(error)
        res.sendStatus(401)
    }  
}
export default verifyUser;