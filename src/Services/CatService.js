import { myAxios } from "./Helper"

export const getAllCat = ()=> {
    return myAxios.get('/api/categories/').then((response)=>response.data);
}