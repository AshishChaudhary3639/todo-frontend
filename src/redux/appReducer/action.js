
import axios from 'axios'
import * as types from './actionType'
const getTodos=()=>(dispatch)=>{
    dispatch({type:types.USER_TODO_REQUEST})
    return axios.get(`http://localhost:8080/read`,{
        headers:{
            Authorization:`Bearer ${localStorage.getItem('todoToken')}`
        }
    }).then((res)=>{
        dispatch({type:types.USER_TODO_SUCCESS,payload:res.data})
    }).catch((e)=>{
        dispatch({type:types.USER_TODO_FAILURE,payload:e})
    })
}

const addTodo=(payload)=>(dispatch)=>{
    dispatch({type:types.USER_TODO_REQUEST})
    return axios.post(`http://localhost:8080/create`,payload,{
        headers:{
            Authorization:`Bearer ${localStorage.getItem('todoToken')}`
        }
    }).then((res)=>{
        dispatch({type:types.USER_TODO_SUCCESS,payload:res.data})
    }).catch((e)=>{
        dispatch({type:types.USER_TODO_FAILURE,payload:e})
    })
}

const deleteSingTodo=(id)=>(dispatch)=>{
    dispatch({type:types.USER_TODO_REQUEST})
    return axios.delete(`http://localhost:8080/read/${id}`,{
        headers:{
            Authorization:`Bearer ${localStorage.getItem('todoToken')}`
        }
    }).then((res)=>{
        dispatch({type:types.USER_TODO_SUCCESS,payload:res.data})
    }).catch((e)=>{
        dispatch({type:types.USER_TODO_FAILURE,payload:e})
    })
}

const updateTodo=({payload,id})=>(dispatch)=>{
    dispatch({type:types.USER_TODO_REQUEST})
    return axios.delete(`http://localhost:8080/read/${id}`,payload,{
        headers:{
            Authorization:`Bearer ${localStorage.getItem('todoToken')}`
        }
    }).then((res)=>{
        dispatch({type:types.USER_TODO_SUCCESS,payload:res.data})
    }).catch((e)=>{
        dispatch({type:types.USER_TODO_FAILURE,payload:e})
    })
}

export {getTodos,addTodo,deleteSingTodo,updateTodo}