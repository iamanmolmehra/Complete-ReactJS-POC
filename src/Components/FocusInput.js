import React, { Component } from 'react'
import Input from './Input'

class FocusInput extends Component {
    constructor(props) {
        super(props)
        this.componentRef = React.createRef()
    }

    clickHandlers = () => {
        this.componentRef.current.focusInput()
    }
  
    render() {
        return (
            <div>
                <Input ref={this.componentRef}></Input>
                <button onClick={this.clickHandlers} >Focus Input</button>
            </div>
        )
    }
}

export default FocusInput
