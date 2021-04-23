import React, { Component } from "react";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBDropdown,
MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon } from "mdbreact";
import { BrowserRouter as Router } from 'react-router-dom';
import logo from './../../assets/ibuy_logo.PNG';
import './index.css';
import {useHistory} from 'react-router-dom';
import {auth} from '../../Firebase/Firebase';
class NavbarPage extends Component {
state = {
  isOpen: false
};
 
toggleCollapse = () => {
  this.setState({ isOpen: !this.state.isOpen });
}

  signOutFunc = () =>
{ 
  auth.signOut().then(() => {
    console.log("Log Out Sucsess")
    localStorage.clear()
    // history.push("/ReciptMain")
    window.location.reload();
    
  }).catch((error) => {
    console.log("Error")
  });
  localStorage.clear();
  
}
  

render() {
  return (
    <>
    
   
      <MDBNavbar  className="mainbavbar" dark expand="md">
        <MDBNavbarBrand  to="./">
       
          <MDBNavLink to="./" activeClassName="active">
          <img src={logo} className="logo"/>
          </MDBNavLink>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
          <MDBNavbarNav left>
           

 {localStorage.getItem("key") ? <>
          <MDBDropdown>
         
             
      <MDBDropdownToggle nav caret>
        
        

        <MDBNavItem activeClassName='active' >
        <MDBNavLink className="Recipt" to="./ReciptMain">Recipts</MDBNavLink>
            </MDBNavItem></MDBDropdownToggle> 
    <MDBDropdownMenu>
      <MDBDropdownItem >

      <MDBNavLink to="./ReciptMain">New Recipts</MDBNavLink>
        
      </MDBDropdownItem>

      <MDBDropdownItem>
    <MDBNavLink to="./Approve">Approve Recipt</MDBNavLink>
    </MDBDropdownItem>

      <MDBDropdownItem>
      <MDBNavLink to="./Rejected">Rejected Recipt</MDBNavLink>
      </MDBDropdownItem>

    <MDBDropdownItem>
    <MDBNavLink to="./SubmittedForRev">  Submitted for Revision
    Receipts</MDBNavLink>
    </MDBDropdownItem>

    <MDBDropdownItem>
    <MDBNavLink to="./RevisedRecipt">Revised Receipts</MDBNavLink>
    
    </MDBDropdownItem>

    </MDBDropdownMenu>

    </MDBDropdown>
     </>:(" ")}

            {/* <MDBNavItem activeClassName="active">
              <MDBNavLink to="./planform">Rejected Receipts</MDBNavLink>
            </MDBNavItem> <MDBNavItem activeClassName="active">
              <MDBNavLink to="./planform">Submitted for Revision</MDBNavLink>
            </MDBNavItem> <MDBNavItem activeClassName="active">
              <MDBNavLink to="./planform">Revised Receipts</MDBNavLink>
            </MDBNavItem>
            
             */}
      
         
          </MDBNavbarNav>
          <MDBNavbarNav left >
          <MDBNavItem activeClassName="actives">
              <MDBNavLink className="MAINHEAD" to="./">IBUY ADMIN APP</MDBNavLink>
            </MDBNavItem>
            </MDBNavbarNav>
      
          <MDBNavbarNav right>
           
          
          <MDBNavItem activeClassName="active"
          
          >
              <MDBNavLink to="./signup">SignUp</MDBNavLink>
            </MDBNavItem>

             {localStorage.getItem("key") ? 
             <>
            <MDBNavItem activeClassName="active">
               
             <MDBNavLink to="/" onClick={this.signOutFunc}>log out</MDBNavLink>
               </MDBNavItem>
             </> :
              (<MDBNavItem activeClassName="active">
              <MDBNavLink to="./">Login</MDBNavLink>
         
         </MDBNavItem>)}
           

{/*    <DropdownMenu>
                  {localStorage.getItem("Key")  ? (<DropdownItem
                    onClick={ signOutFunc}
                  >
                  sign out
                  </DropdownItem>):(
                  <DropdownItem
                    onClick={() => {
                      history.push("/login");
                    }} 
                  >
                  sign in
                  </DropdownItem>
 */}
           
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
   </>
    );
  }
}

export default NavbarPage;