import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

class Footer extends React.Component{
	render(){
		return(
			<div style={centerText}>
			<List style={footer}>
				<ListItem style={footerElement}><a style={footerElement} href = "../">Home</a></ListItem>
				<ListItem style={footerElement}><a style={footerElement} href="https://github.com/NatSR4/Exalendar/wiki/What-is-Exalendar%3F" target="_blank">About</a></ListItem>
				<ListItem style={footerElement}><a style={footerElement} href= "https://rcos.io/" target= "_blank">RCOS</a></ListItem>
				<ListItem style={footerElement}><a style={footerElement} href= "https://github.com/NatSR4/Exalendar" target = "_blank" id="gitcat" title="GitHub" aria-label="GitHub"><img alt="Github" src="../media/gitcat.svg"/></a></ListItem>
			</List>
			</div>
		); 
	}
}

const footerElement = {
	borderRightWidth: '15px',
	display: 'inline',
	textDecoration: 'none'
}

const footer = {
	position: 'fixed',
	left: '0',
	bottom: '0',
	width: '100%',
	height: '30px',
	backgroundColor: 'red',
	color: 'white',
	textAlign: 'center',
	listStyleType: 'none',
	display: 'table',
	gap: '10px',
	margin: '0 auto',
	listStyle: 'none'
}

const centerText = {
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
};


export default Footer;