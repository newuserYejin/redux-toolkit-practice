import React from 'react'
import ProductDetail from '../page/ProductDetail'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'


const PrivateRoute = () => {
    const authState = useSelector(state => state.auth.auth)
    return authState === true ? <ProductDetail /> : <Navigate to="/login" />
}

export default PrivateRoute