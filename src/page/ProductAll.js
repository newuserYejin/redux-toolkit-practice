import React, { useState } from 'react'
import { useEffect } from 'react'
import ProductCard from '../component/ProductCard'
import { Col, Container, Row, col } from 'react-bootstrap'

const ProductAll = () => {
    const [productList, setProductList] = useState([])

    const getProducts = async () => {
        let url = 'https://my-json-server.typicode.com/newuserYejin/h-m-react-router-practice/products'
        let response = await fetch(url)
        let data = await response.json()
        setProductList(data)
    }

    useEffect(() => {
        getProducts()
    }, [])
    return (
        <div>
            {console.log(productList)}
            <Container>
                <Row>
                    {productList.map((menu) => (
                        <Col xs={6} lg={3}>
                            <ProductCard item={menu} />
                        </Col>
                    ))}
                </Row>
            </Container>
        </div >
    )
}

export default ProductAll