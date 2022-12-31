import * as api from "../api"
// from api folder we are getting authdata
// and getting data from the api
// and dispatching it
export const signup = (authData,navigate) => async(dispatch) => {
    try{
        const {data} =  await api.signUp(authData)
        console.log("hello")
        dispatch({type:'AUTH',data})
        navigate('/')
    
    }
    catch(error){
        console.log(error)

    }
}
export const login = (authData,navigate) => async(dispatch) => {
    try{
        const {data} =  await api.logIn(authData)
        dispatch({type:'AUTH',data})
        navigate('/')
    }
    catch(error){
        console.log(error)

    }
}
