
import * as types from './actionType'
import axios from 'axios'
const signup=(payload)=>(dispatch)=>{
    dispatch({type:types.USER_SIGNUP_REQUEST})
    return axios.post(`http://localhost:8080/signup`,payload).then((res)=>{
        dispatch({type:types.USER_SIGNUP_SUCCESS,payload:res.data})
    }).catch((e)=>{
        dispatch({type:types.USER_SIGNUP_FAILURE,payload:e})

    })
}

const login=(payload)=>(dispatch)=>{
    dispatch({type:types.USER_LOGIN_REQUEST})
    return axios.post(`http://localhost:8080/login`,payload).then((res)=>{
        if(res.data.token){
            localStorage.setItem('todoToken',res.data.token)
        }
        dispatch({type:types.USER_LOGIN_SUCCESS,payload:res.data})
    }).catch((e)=>{
        dispatch({type:types.USER_LOGIN_FAILURE,payload:e})

    })
}

export {signup,login}