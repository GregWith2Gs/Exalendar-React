import React from "react";
import {Button, Form} from 'react-bootstrap';
import logo from "../media/1.png";

function Login() {
    function submit() {
        
    }

    return (
        <Form>
            <img src={logo} alt="logo"/>
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
            <Button onClick={submit} variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    )
} export default Login;