import React, { useState } from 'react'
import { Container, Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { authAction } from '../redux/actions/authAction';


const Login = () => {
    const [id, setId] = useState('')
    const [password, setPassword] = useState('')
    const authState = useSelector(state => state.auth.auth)

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const loginUser = (event) => {
        event.preventDefault()
        if (authState === false) {
            dispatch(authAction.login(id, password))
            console.log("login!!!!!!!!")
            navigate('/')
        } else if (authState === true) {
            dispatch(authAction.logout(id, password))
            console.log("logout!!!!!!!!")
            navigate('/login')
        }
    }

    return (
        <Container className='BoxContainer'>
            {authState === false ? (<Form className='loginForm' onSubmit={(event) => loginUser(event)}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" onChange={(event) => setId(event.target.value)} />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" onChange={(event) => setPassword(event.target.value)} />
                </Form.Group>
                <Button variant="danger" type="submit">
                    Login
                </Button>
            </Form>) : (
                <Form className='loginForm logout' onSubmit={(event) => loginUser(event)}>
                    <div className='logoutMent'>정말 로그아웃 하시겠습니까?</div>
                    <Button variant="danger" type="submit">
                        Logout
                    </Button>
                </Form>)}
        </Container>
    )
}

export default Login