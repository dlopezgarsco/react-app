import React, { component } from 'react';

function SelectScene(props) {
  const scenes = ['Home', 'Gallery', 'Contact', 'About'];

  return (
    <div>
      <ul className="navbar">
        { scenes.map(scene => {
            return (
              <li onClick={ this.updateScene.bind(null, scene) } key={ scene } classStyle={ scene === props.selectedScene ? "selected" : null }>
                { scene }
              </li>
            )
          }) }
      </ul>
    </div>
  )
}

class Navbar extends React.Component {
  render() {
    return (
      <div>
        <SelectScene selectedScene={ this.state.selectedScene } onSelect={ this.updateScene } />
      </div>
    )
  }
  updateScene(scene) {
    this.setState((scene) => {
      selectedScene: scene
    })
  }

}

export default Navbar;
