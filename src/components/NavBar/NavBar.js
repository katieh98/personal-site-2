import React from 'react'
import Navbar from 'react-bootstrap/Navbar';

class NavBar extends React.Component {
  render() {
    return(
        <div className="center-navbar">
          <Navbar>
            <Navbar.Brand href="/">Home</Navbar.Brand>
            <Navbar.Brand href="/About">About</Navbar.Brand>
            <Navbar.Brand href={"https://personal-site-bucket-ktharold.s3.us-east-2.amazonaws.com/Kate_Harold_Resume_2021.pdf"} target="_blank">Resume</Navbar.Brand>
          </Navbar>
        </div>
    );
  }
}

export default NavBar