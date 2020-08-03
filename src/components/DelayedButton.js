// Code DelayedButton Component Here
import React, { Component } from 'react'

export default class DelayedButton extends Component {

  // setTimeout = () => {
  //   this.props.delay
  // }

  eventHandler = (event) => {
    event.persist()
    // will pass the click event to the onDelayedClick prop within a setTimeout()
    // this.props.onDelayedClick(event)
    setTimeout( () => this.props.onDelayedClick(event), this.props.delay)
  }
  render(){
    return (
     <button
      onClick={this.eventHandler}
     ></button>
    )
  }
}