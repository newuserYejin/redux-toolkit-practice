import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useParams } from "react-router-dom"
import { useDispatch } from 'react-redux'
// import { productDetailAction } from '../redux/actions/productDetailAction'
// import { productAction } from '../redux/actions/productAction'
import { useSelector } from 'react-redux'
import { fetchProductDetail } from '../redux/reducers/productSlice'

const ProductDetail = () => {
    let [sizeList, setSizeList] = useState([])
    let { id } = useParams()
    let seletedProduct = useSelector(state => state.product.seletedProduct)
    // store.js에서 seletedProduct를 가지고 있는 productReducer를 product라고 들고 오기 때문에 state.product.seletedProduct

    const dispatch = useDispatch()

    const getProductDetail = () => {
        dispatch(fetchProductDetail(id))
    }

    useEffect(() => {
        getProductDetail()
    }, [])

    return (
        <Container className='BoxContainer'>
            <Row>
                <Col>
                    <img src={seletedProduct?.img} />
                </Col>
                <Col className='productComment'>
                    <div className='productTitle'>{seletedProduct?.title}</div>
                    <div>&#8361;{seletedProduct?.price}</div>
                    <div>{seletedProduct?.choice === true ? "Conscious choice" : ""}</div>
                    <div>{seletedProduct?.new === true ? "신제품" : ""}</div>

                    <button className='addButton'>추가</button>
                </Col>
            </Row>
        </Container>
    )
}

export default ProductDetail