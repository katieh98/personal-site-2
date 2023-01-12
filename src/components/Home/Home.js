import React from 'react'
import Badge from 'react-bootstrap/Badge'
import { WindupChildren, Pause, Pace } from "windups";

class Home extends React.Component {
  render() {
    return (<div className="container">
          <br /><br />
          <h1><Hello/></h1>
          <br />
          <h4>Languages</h4>
          <h5><Badge className="skill">Java</Badge>
            <Badge className="skill">C</Badge>
            <Badge className="skill">Python</Badge>
            <Badge className="skill">React</Badge>
            <br />
          </h5>
          <br />
        </div>
    );
  }
}

const Hello = () => {
  return (
      <WindupChildren >
        <Pace ms = {70}>
          {"Today, "}
        </Pace>
        < Pause ms={150} />
        <Pace ms = {50}>
          {"I am a Software Engineer."}
        </Pace>
      </WindupChildren>);
};

export default Home