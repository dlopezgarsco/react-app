import React from 'react';

function SelectScene(props) {
  const scenes = ['Home', 'Gallery', 'Contact', 'About'];

  return (
    <ul className="navbar"> 
      { scenes.map( scene =>
          <li 
            onClick={ props.onSelect.bind(null, scene) } 
            className={ scene === props.selectedScene ? "selected" : null } 
            key={ scene }>
              { scene }
          </li>
        )}
      </ul>
  )
}

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

export default Navbar;
