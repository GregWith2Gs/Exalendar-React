import React from "react";
import '../css/Login.css';

function Login() {
	function login() {
		let loginData = {
			method: 'POST',
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded'
			},
			body: new URLSearchParams("code")
		}
		fetch('http://localhost:4000/', loginData)
		.then(response => response.json())
		.then(tokenData => {
			// Here, tokenData should contain your access token
			const accessToken = tokenData.access_token;
			console.log('Access Token:', accessToken);
		})
		.catch(error => {
			console.error('Error exchanging code for token:', error);
		});
	}
	return (
		login()
	);
} export default Login;