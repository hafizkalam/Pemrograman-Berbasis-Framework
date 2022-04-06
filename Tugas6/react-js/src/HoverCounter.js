import React, { Component } from 'react'
import UpdatedComponent from './withCounter'

 class HoverCounter extends Component {
    
  render() {
      const {count, incrementCount} = this.props
    return (
      <div>
          <h2 onMouseOver={incrementCount}> HoverCounter {count}</h2>  
          </div>
    )
  }
}

export default UpdatedComponent(HoverCounter)