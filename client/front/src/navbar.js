
import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from './navbarElements';
  
const Navbar = () => {
  return (
    <>
      <Nav>
        <Bars />
  
        <NavMenu>
          <NavLink to='/' activeStyle style={{color:"white",marginLeft:"3rem",fontSize:"20px"}}>
            Home
          </NavLink>
          <NavLink to='/voter' activeStyle style={{color:"white",marginLeft:"3rem",fontSize:"20px"}}>
            Voter
          </NavLink>
          <NavLink to='/officer' activeStyle style={{color:"white",marginLeft:"3rem",fontSize:"20px"}}>
           Election Officers
          </NavLink>
          <NavLink to='/study' activeStyle style={{color:"white",marginLeft:"3rem",fontSize:"20px"}}>
            Demographic Study
          </NavLink>
          <NavLink to='/candidate' activeStyle style={{color:"white",marginLeft:"3rem",fontSize:"20px"}}>
            Candidates
          </NavLink>
          
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
        
      </Nav>
    </>
  );
};
  
export default Navbar;