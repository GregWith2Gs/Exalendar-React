import React from 'react';
import { Nav, NavItem} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import '../css/Navigation.css';


const tabs = [{
  route: "/home",
  icon: faHome,
  label: "Home",
  target: "_self"
},{
  route: "https://github.com/NatSR4/Exalendar/wiki/What-is-Exalendar%3F",
  icon: faGithub,
  label: "Github",
  target: "_blank"
},{
  route: "/login",
  icon: faUserCircle,
  label: "Login",
  target: "_self"
}]


const Navigation = (props) => {
	return (
    /* Top Bar*/
    <div>
      <nav className="navbar fixed-top" 	role="navigation">
        <div className="container-fluid">
          <a className="navbar-exalendar m-auto" href="/home" >Exalendar</a>
        </div>
      </nav>
      {/* Bottom Tab Navigator*/}
      <nav className="navbar fixed-bottom navbar-light bottom-tab-nav" role="navigation">
        <Nav className="w-100">
          <div className=" d-flex flex-row justify-content-around w-100">
            {
              tabs.map((tab, index) =>(
                <NavItem key={`tab-${index}`}>
                  <NavLink to={tab.route} target={tab.target} className="bottom-nav-link" activeClassName="active">
                    <div className="row d-flex flex-column justify-content-center align-items-center">
                      <FontAwesomeIcon size="lg" icon={tab.icon}/>
                      <div className="bottom-tab-label">{tab.label}</div>
                    </div>
                  </NavLink>
                </NavItem>
              ))
            }
          </div>
        </Nav>
      </nav>
    </div>
  )
};

export default Navigation;


