import React, { Component } from 'react';
import NavBar from '../../components/NavBar';

class AboutUs extends Component {
  render() {
    return (
      <div className="AboutUs">
        <NavBar router={this.props} />
        this is about us
      </div>
    );
  }
}

export default AboutUs;
