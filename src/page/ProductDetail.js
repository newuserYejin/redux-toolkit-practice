import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useParams } from "react-router-dom"
import { useDispatch } from 'react-redux'
import { productDetailAction } from '../redux/actions/productDetailAction'
import { useSelector } from 'react-redux'

const ProductDetail = () => {
    let [sizeList, setSizeList] = useState([])
    let { id } = useParams()
    let product = useSelector(state => state.productDetail.product)

    const dispatch = useDispatch()

    const getProductDetail = () => {
        dispatch(productDetailAction.getProductDetail(id))
    }

    useEffect(() => {
        getProductDetail()
    }, [])

    return (
        <Container className='BoxContainer'>
            <Row>
                <Col>
                    <img src={product?.img} />
                </Col>
                <Col className='productComment'>
                    <div className='productTitle'>{product?.title}</div>
                    <div>&#8361;{product?.price}</div>
                    <div>{product?.choice === true ? "Conscious choice" : ""}</div>
                    <div>{product?.new === true ? "신제품" : ""}</div>

                    <button className='addButton'>추가</button>
                </Col>
            </Row>
        </Container>
    )
}

export default ProductDetail