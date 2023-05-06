import { myAxios } from "./Helper"

export const signup = (user)=>{
    return myAxios.post("/api/users/",user).then((response) => response.data);
}

export const loginUser = (userDetails)=>{
    return myAxios.post("/api/v1/auth/login",userDetails).then((response) => response.data);
}