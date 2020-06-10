import React, { Component } from "react";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBNavItem, MDBNavLink,  MDBCollapse } from "mdbreact";
import HeaderPart from './components/HeaderPart';
//import logo from '../../../img/logo.png'
//import logowhite from '../../../img/logowhite.png'


class NavbarPage extends Component {
  constructor(props) {
      super(props);
      this.state = {
          collapse: false,
      };
      this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({
        collapse: !this.state.collapse,
      });
  }
  

render() {
  return (
    <div>
            <HeaderPart />
            <div>

      <MDBNavbar  id="parallelogram" dark expand="md" >
        <MDBNavbarBrand href="/">
        {/* <img src={logo} alt="store"   id="logo" height="35"/>
        */}
        </MDBNavbarBrand>
              <MDBNavbarToggler onClick={ this.onClick } />
              <MDBCollapse id="navbarCollapse3" isOpen = { this.state.collapse } navbar>

          <MDBNavbarNav center>
            <MDBNavItem  onClick={ this.onClick }>
              <MDBNavLink  to="/">Summary</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem  onClick={ this.onClick }>
              <MDBNavLink  to="/analytics">Analytics</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem  onClick={ this.onClick }>
              <MDBNavLink to="/vizual">Vizual</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem  onClick={ this.onClick }>
              <MDBNavLink to="/comparative">Comparative</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem  onClick={ this.onClick }>
              <MDBNavLink  to="/recommendation">Recommendation</MDBNavLink>
            </MDBNavItem>

            
          </MDBNavbarNav>
           </MDBCollapse>
      </MDBNavbar>

      </div>
      
    </div>
    );
  }
}

export default NavbarPage;

