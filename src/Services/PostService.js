import { privateAxios } from "./Helper"

const createPost = (postData) =>{
    privateAxios.post('/user/${postData.userId}/category/${postData.catId}/post/').then((resp)=>resp.data);
}