import React from 'react'

class Socials extends React.Component {
  render() {
    return (
        <div className="text-center">
          <a href="mailto:kate.harold@pm.me" rel="noreferrer">
            <img src="https://personal-site-bucket-ktharold.s3.us-east-2.amazonaws.com/email.png" width="30" height="30" hspace="5" vspace="5" alt="email" />
          </a>

          <a href="https://github.com/katieh98" target="_blank" rel="noreferrer">
            <img src="https://personal-site-bucket-ktharold.s3.us-east-2.amazonaws.com/git.png" width="30" height="30" hspace="5" alt="git" />
          </a>

          <a href="https://www.linkedin.com/in/kate-harold/" target="_blank" rel="noreferrer">
            <img src="https://personal-site-bucket-ktharold.s3.us-east-2.amazonaws.com/linkedin.png" width="30" height="30" hspace="5" vspace="5" alt="link" />
          </a>
        </div>
    );
  }
}

export default Socials