import React, { Component } from 'react';

class Navbar extends Component {
  state = {}
  render() {
    const sections = ['Home', 'About', 'Contact'];
    return (
      <ul>
      {sections.map(function (section) {
        return ( 
          <li key={section}> {section}</li>
          )
      })}
    </ul>
    );
  }
}

export default Navbar;
