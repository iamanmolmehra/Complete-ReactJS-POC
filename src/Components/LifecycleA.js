import React, { Component } from 'react'
import LifecycleB from './LifecycleB';

class LifecycleA extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             name : "Vishu"
        }
        console.log("LifecycleA Constructor");
    }
    
    static getDerivedStateFromProps(props, state) {
        console.log("LifecycleA getDerivedStateFromProps");
    }


    componentDidMount() {
        console.log("LifecycleA componentDidMount");
    }

    shouldComponentUpdate() {
        console.log("LifecycleA shouldComponentUpdate")
        return true
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("LifecycleA getSnapshotBeforeUpdate")
        return null
    }

    componentDidUpdate() {
        console.log("LifecycleA componentDidUpdate");
    }

    changeState = () => {
        this.setState({
            name : "Shaan"
        })
    }

    render() {
        console.log("LifecycleA render");
        return (
            <div>
                <div>Lifecycle A</div>
                <button onClick={this.changeState}>Change state</button>
                <LifecycleB />
            </div>
        )
    }
}

export default LifecycleA
