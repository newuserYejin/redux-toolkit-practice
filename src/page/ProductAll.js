import React, { useState } from 'react'
import { useEffect } from 'react'
import ProductCard from '../component/ProductCard'
import { Col, Container, Row, col } from 'react-bootstrap'
import { useSearchParams } from 'react-router-dom'

const ProductAll = () => {
    const [productList, setProductList] = useState([])
    const [query, setQuery] = useSearchParams()

    const getProducts = async () => {
        let searchQuery = query.get('q') || "" // url에서 q의 값 가져오기

        let url = `https://my-json-server.typicode.com/newuserYejin/h-m-react-router-practice/products?q=${searchQuery}`
        let response = await fetch(url)
        let data = await response.json()
        setProductList(data)
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