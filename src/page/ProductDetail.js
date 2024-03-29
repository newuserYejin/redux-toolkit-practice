import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useParams } from "react-router-dom"

const ProductDetail = () => {
    let [sizeList, setSizeList] = useState([])
    let { id } = useParams()
    const [product, setProduct] = useState(null)

    const getProductDetail = async () => {
        let url = `https://my-json-server.typicode.com/newuserYejin/h-m-react-router-practice/products/${id}`

        let response = await fetch(url)
        let data = await response.json()
        console.log("data:  ", data)
        setProduct(data)
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