import React, { Component } from 'react';

class Navbar extends Component {
  state = {}
  render() {
    const sections = ['Home', 'Contact', 'About'];

    return (
      <div>
        <ul className="navbar">
          { sections
              .map(section => {
                return (
                  <li key={ section }>
                    <a href="/">
                      { section }
                    </a>
                  </li>
                )
              }) }
        </ul>
      </div>
      );
  }
}

export default Navbar;
