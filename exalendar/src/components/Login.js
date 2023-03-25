import React from 'react';
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
    event.preventDefault();
	// Post request
	
  }

  render() {
    return (
	<body>
	    <a class="logo-href" href="/">
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
	</body>
    );
  }
}

const centerText = {
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	paddingBottom: '5px'
};

export default Login;
