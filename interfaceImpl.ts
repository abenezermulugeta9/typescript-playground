import { Login } from "./interface";
import { User } from "./interface";

class UserLogin implements Login {
    login(): User {
        return { name: "Jane", age: 18, id: 123, email: "jane@email.com" };
    }

}