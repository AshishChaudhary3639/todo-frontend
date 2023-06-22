import { useSelector } from 'react-redux'
import {  Navigate, useLocation } from 'react-router-dom'
const ReqAuth = ({children}) => {
  const isAuth=useSelector(store=>store.authReducer.isAuth)
  const location=useLocation()
  if(!isAuth){
    return <Navigate to={`/login`}/>
  }
  return children
}

export default ReqAuth