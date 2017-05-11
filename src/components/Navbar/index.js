import React from 'react';
import { NavLink } from 'react-router-dom'

class Navbar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedScene: 'Home'
    }
    this.updateScene = this.updateScene.bind(this)
  }

  updateScene = scene => {
    this.setState({ selectedScene: scene })
  }

  render() {
    return (
      <div>
        <SelectScene 
          selectedScene={ this.state.selectedScene } 
          onSelect={ this.updateScene } 
        />
      </div>
    )
  }
}

function SelectScene(props) {
  const scenes = ['Home', 'Gallery', 'Contact', 'About'];
  const activeClassName = "selected"

  return (
    <ul className="navbar"> 
      { scenes.map( scene =>
          <li 
            onClick={ props.onSelect.bind(null, scene) } 
            className={ scene === props.selectedScene ? activeClassName : null } 
            key={ scene }>
            <NavLink
              to={`/${scene.toLowerCase()}`}
              activeClassName={activeClassName}
            >
              { scene }
            </NavLink>
          </li>
        )}
      </ul>
  )
}

export default Navbar;
