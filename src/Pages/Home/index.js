import React, { Component } from 'react';
import NavBar from '../../components/NavBar';

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <NavBar router={this.props} />
        this is home
      </div>
    );
  }
}

export default Home;
