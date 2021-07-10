import React, { Component } from 'react'
import WithCounter from './WithCounter'

class HoverCounter extends Component {

    render() {
        const {count, incrementCount} = this.props
        return (
            <h2 onMouseOver={incrementCount}>
             {this.props.name} Hovered {count} times</h2>
            )
    }
}

export default WithCounter(HoverCounter, 10)




