// to retreive data from all parts of website
import axios from "axios";
const API = axios.create({baseURL:"http://localhost:5008"})
export const logIn = (authData) => API.post('/user/login',authData)
export const signUp = (authData) => API.post('/user/signup',authData)
// export this to action folder and the data user submita which is captured from post document

