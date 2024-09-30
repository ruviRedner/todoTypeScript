import { v4 } from "uuid"

export default class Todo{
    public id:string
    public completed:boolean = false
    constructor(
        public userId:string,
        public title:string
    ){
        this.id = v4()
    }
    toggleStatus():void{
        this.completed = !this.completed
    }
}