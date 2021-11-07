import React, { Component } from 'react'

interface FigureProps {
  mean: number 
}

class BasicComponent extends Component {
  constructor(props: FigureProps) {
      super(props)
      // ...
  }

  render() {
    return (
      <>
      <hr/>
        <div>
          I'm a react component.
        </div>
      <hr/>
      </>
    )
  }
}

export default BasicComponent;