// Code CoordinatesButton Component Here
import React, { Component } from 'react'

export default class CoordinateButton extends Component {

  arrayHandler = (event) => {
    this.props.onReceiveCoordinates([event.clientX, event.clientY])
  }

  render() {
    return(
      <button
        onClick={this.arrayHandler}
      ></button>
    )
  }
}