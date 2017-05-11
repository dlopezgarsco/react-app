import React, { Component } from 'react';
import { fetchImages } from '../../data/gallery'

export default class Gallery extends Component {
  constructor(props) {
    super();
    this.state = {
      images: null
    }
  }

  componentDidMount() {
    this.updateImages()
  }

  updateImages = () => {
    fetchImages()
      .then(data => {
        this.setState(() =>
          ({
            images: data
              .map(i => i)
              .filter(i => i.id < 10)
          })
        )
      })
  }

  render() {
    return (
      <div>
        {
          !this.state.images
          ? <p>no cargo viteh</p>
          : <ImageList images={this.state.images} />
        }
      </div>
    );
  }
}

function ImageList(props) {
  return (
    <div className="gallery">
    {props.images
      .map(image => 
      <div key={image.id} className="cell">
        <img 
          key={image.id}
          src={image.url}
          alt={image.title}
        />
      </div>
    )}
    </div>
  )
}
