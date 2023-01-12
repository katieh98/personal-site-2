import React from 'react'
import Gallery from "react-photo-gallery";
import { photos } from "../../resources/Photos/Photos"

import { WindupChildren, Pause, Pace } from "windups";

class About extends React.Component {
  render() {
    return (<div className="container"><br/><br/>
      <h3><StringyWindup/></h3>
      <p>
        I am currently a Backend Software Engineer at Atlassian. I have previously worked at BAE Systems Inc. and Freddie Mac.
        I received a B.S. in Computer Science from <a href="https://vt.edu/">Virginia Tech</a>. When I'm not
        working I enjoy traveling, playing sports, and hanging out with friends! If you're interested in my food adventures,
        feel free to check out my <a href="https://www.instagram.com/foodbykth/" target="_blank"> food Instagram</a>.
        <br /><br />
        My inbox is always open! Feel free to contact me through <a href="https://www.linkedin.com/in/kate-harold/" target="_blank">LinkedIn </a>if you'd like to chat!
      </p>
      <h4>Here are some photos from my life!</h4>
      <Gallery photos={photos}/>
    </div>);
  }
}

const StringyWindup = () => {
  return (
      <WindupChildren >
        <Pace ms = {50}>
          {"Hello Visitor!"}
          < Pause ms={100} />
        </Pace>
      </WindupChildren>);
};

export default About