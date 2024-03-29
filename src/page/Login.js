import React from 'react'
import { Container, Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Login = ({ setAuth, auth }) => {

    const navigate = useNavigate()

    const loginUser = (event) => {
        event.preventDefault()
        if (auth === false) {
            setAuth(true)
            console.log("login!!!!!!!!")
            navigate('/')
        } else if (auth === true) {
            setAuth(false)
            console.log("logout!!!!!!!!")
            navigate('/login')
        }
    }

    return (
        <Container className='BoxContainer'>
            {auth === false ? (<Form className='loginForm' onSubmit={(event) => loginUser(event)}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
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