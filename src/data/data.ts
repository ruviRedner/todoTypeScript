import Todo from "../types/models/todo";
import User from "../types/models/user";

export const users:User[] = [];

export const todos:Todo[] = [];

//Immidiatly  Invoked Founction Expression
( async ():Promise<void> => {
    const joony:User = new User("joony")
    await joony.hashPassword("1234")

    const laundey:Todo = new Todo("Fold fome clean laundry",joony.id)
    const homeWork:Todo = new Todo("english lesen",joony.id)

    users.push(joony)
    todos.push(laundey,homeWork)

})();




