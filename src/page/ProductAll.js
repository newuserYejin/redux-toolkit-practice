import React, { useState } from 'react'
import { useEffect } from 'react'
import ProductCard from '../component/ProductCard'
import { Col, Container, Row } from 'react-bootstrap'
import { useSearchParams } from 'react-router-dom'
// import { productAction } from '../redux/actions/productAction'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../redux/reducers/productSlice'

const ProductAll = () => {
    const productList = useSelector(state => state.product.productList)
    const [query, setQuery] = useSearchParams()

    const dispatch = useDispatch()

    const getProducts = () => {
        let searchQuery = query.get('q') || "" // url에서 q의 값 가져오기
        dispatch(fetchProducts(searchQuery))
    }

    useEffect(() => {
        getProducts()
    }, [query])

    return (
        <div>
            {console.log(productList)}
            <Container>
                <Row>
                    {productList.map((menu) => (
                        <Col lg={3} md={6} sm={12}>
                            <ProductCard item={menu} />
                        </Col>
                    ))}
                </Row>
            </Container>
        </div >
    )
}

export default ProductAll