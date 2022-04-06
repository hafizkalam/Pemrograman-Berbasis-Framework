import React, { Component } from 'react'
import UpdatedComponent from './withCounter'

 class ClickCounter extends Component {
     
  render() {
      const {count, incrementCount} =this.props 
    return (
      <button onClick={incrementCount}>ClickCounter {count}</button>
    )
  }
}

export default UpdatedComponent(ClickCounter)