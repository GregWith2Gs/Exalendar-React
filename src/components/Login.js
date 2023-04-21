import React from "react";
import {Button, Form} from 'react-bootstrap';
import logo from "../media/1.png";

import { Magic } from 'magic-sdk';
import { OAuthExtension } from '@magic-ext/oauth';

const MagicElement = new Magic('pk_live_1DBFB28DB3526B13', {
    extensions: [new OAuthExtension()],
})

function Login() {
    async function authenticate() {
        console.log("logging in!")
        await MagicElement.oauth.loginWithRedirect({
            provider: 'discord' /* 'google', 'facebook', 'apple', or 'github' */,
            redirectURI: `${window.location.origin}` /* must be string */
        })

        // put these in a new component?
        // const result = await magic.oauth.getRedirectResult();
        // const profile = JSON.stringify(result.oauth.userInfo, undefined, 2);

    }    

    return (
        <div>
             <button onClick={authenticate}>login</button>
             <h2>{result.userHandle}</h2>
        </div>
        
        // <Form>
        //     <img src={logo} alt="logo"/>
        //     <Form.Group className="mb-3" controlId="formBasicEmail">
        //         <Form.Label>Email address</Form.Label>
        //         <Form.Control type="email" placeholder="Enter email" />
        //         <Form.Text className="text-muted">
        //         We'll never share your email with anyone else.
        //         </Form.Text>
        //     </Form.Group>

        //     <Form.Group className="mb-3" controlId="formBasicPassword">
        //         <Form.Label>Password</Form.Label>
        //         <Form.Control type="password" placeholder="Password" />
        //     </Form.Group>
        //     <Button onClick={submit} variant="primary" type="submit">
        //         Submit
        //     </Button>
        // </Form>
    )
} export default Login;