import React, { Component } from 'react'

class IncrementDecrement extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             count : 0
        }
    }
    
    incrementCount = () => {
        this.setState(prevState => {
            return {count : prevState.count + 1}
        })
    }
    
    // reset = () => {
    //     this.setState({count:0})
    // }
 
    reset = () => {
        this.setState( nes => {
            return {count : 0}
        })
    }

    decrementCount = () => {
        this.setState(newState => {
            return {count : newState.count -1}
        })
    }



    render() {
        const {count} = this.state
        return (
            <>
                <button onClick={this.incrementCount}>Increase</button>
                <h2> {count} </h2>  
                <button onClick={this.decrementCount}>decrease</button>
                <br></br><br></br>
                <button onClick={this.reset}>Reset</button>
            </>
        )
    }
}

export default IncrementDecrement
