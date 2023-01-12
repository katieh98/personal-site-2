import React from 'react'
import Image from 'react-bootstrap/Image'

class Header extends React.Component {
  render() {
    return (
        <header className = "text-center">
          <Image src="https://personal-site-bucket-ktharold.s3.us-east-2.amazonaws.com/me.jpg" className="header-img" roundedCircle />
          <h1> Kate Harold </h1>
          <br/>
        </header>);
  }
}

export default Header