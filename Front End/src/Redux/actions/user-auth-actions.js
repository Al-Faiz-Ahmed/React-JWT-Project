import Axios from "axios"
import { USER_SIGNIN_REQUEST,USER_SIGNIN_SUCCESS,USER_SIGNIN_FAILED } from "../Constants/signin-constants"
export const user_signin = (email,password) => async (dispatch) => {
        dispatch({
            type:USER_SIGNIN_REQUEST,
        })
        try{
            let {data} = await Axios.post('/api/users/signin',{email,password})
            dispatch({
                type:USER_SIGNIN_SUCCESS,
                payload:data
            })
            localStorage.setItem('userInfo', JSON.stringify(data))
        }catch(error){
            dispatch({
                type: USER_SIGNIN_FAILED,
                payload: error.response && error.response.data.message ? error.response.data.message : error.message,
              });
        }
}
    
