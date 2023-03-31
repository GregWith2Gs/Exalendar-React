import React from 'react';
import Footer from './Footer';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField'

class Login extends React.Component {
	constructor(props) {
		super(props);
		this.state = {user: '', pass: ''};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event){
		this.setState({[event.target.name] : event.target.value});
	}

	handleSubmit(event) {

		alert('A name was submitted: ' + this.state.user + " "+this.state.pass);
		// event.preventDefault();
		// Post request
		var response = fetch('https://localhost:3000', {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ "user": this.state.user, "pass": this.state.pass})
		});
		
		// Handel Response
		console.log(JSON.stringify(response.json()));

	}

	render() {
		return (
		<body>
			<a style={noLinkDecoration} href="/">
			<h1 style={centerText}>Exalendar</h1>
			</a>
			<form>
				<div style={centerText}>
				<label>
					<TextField id="outlined-basic" name="user" label="Username" variant="outlined" value={this.state.user}
						onChange={this.handleChange}/>
					
				</label>
				</div>
				
				<div style={centerText}>
				<label>
					<TextField id="outlined-basic" name="pass" label="Password" variant="outlined" value={this.state.pass}
						onChange={this.handleChange}/>
				</label>
				</div>
				
				<div style={centerText}>
				<label>
					<Button variant="contained" onClick={() => { this.handleSubmit(); }}>
					  Submit
					</Button>
				</label>
				</div>
				
			</form>
			<div>
				<Footer />
			</div>
			
			<div style={centerText}>
				<a style={noLinkDecoration} href="./signup">Sign Up</a>
			</div>
			
		</body>
		);
	}
}


const centerText = {
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	paddingBottom: '15px'
};

const noLinkDecoration = {
	textDecoration: 'none'
}

export default Login;
