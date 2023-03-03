import React from 'react';
import ReactDOM from 'react-dom/client';

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
  }

  render() {
    return (
	<body>
		<form onSubmit={this.handleSubmit}>
			<div>
			<label>
				Username
				<input name="user" type="text" value={this.state.user} onChange={this.handleChange} />
			</label>
			</div>
			
			<div>
			<label>
				Password
				<input name="pass" type="text" value={this.state.pass} onChange={this.handleChange} />
			</label>
			</div>
			
			<div>
			<label>
			    <input type="submit" value="Submit" />
				
			</label>
			</div>
			
		</form>
	</body>
    );
  }
}

export default Login;
