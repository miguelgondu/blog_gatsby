import React, { Component } from 'react'


class CenteredImage extends Component {
    src: string
    alt: string
  
    constructor(props) {
      super(props)
      
      this.state = {
          "src": props.src,
          "alt": props.alt,
          "size": props.size
      }
    }
  
    render() {
      return (
        <p align="center">
            <img src={this.state.src} className={this.state.size} alt={this.state.alt}>
            </img>
        </p>
      )
    }
  }
  
export default CenteredImage;