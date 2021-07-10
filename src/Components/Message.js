import React, {Component, component} from 'react'

class Message extends Component {

    constructor() {
        super()
        this.state = {
            message : "Welcome Visitor"
        }
    }

    changeMessage() {
        this.setState({
            message : "Thank for being at my side :)"
        })
    }

    render() {
        return (
            <div>
                 <h1>{this.state.message}</h1>
                 <button onClick= {() => this.changeMessage()} >Subscribe</button>
            </div>
        )
       
        
    }
}
export default Message