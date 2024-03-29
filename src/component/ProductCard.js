import React from 'react'
import { useNavigate } from 'react-router-dom'

const ProductCard = ({ item }) => {
    const navigate = useNavigate()

    const showDetail = () => {
        navigate(`/product/${item.id}`)
    }

    return (
        <div className='productCard' onClick={showDetail}>
            <img src={item?.img} />
            <div className='productCardChoice'>{item?.choice === true ? "Conscious choice" : ""}</div>
            <div>{item?.title}</div>
            <div>&#8361;{item?.price}</div>
            <div className='productCardNew'>{item?.new === true ? "신제품" : ""}</div>
        </div>
    )
}

export default ProductCard