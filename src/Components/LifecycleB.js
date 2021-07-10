import React, { Component } from 'react'

class LifecycleB extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             name : "Vishu"
        }
        console.log("LifecycleB Constructor");
    }
    
    static getDerivedStateFromProps(props, state) {
        console.log("LifecycleB getDerivedStateFromProps");
    }


    componentDidMount() {
        console.log("LifecycleB componentDidMount");
    }

    shouldComponentUpdate() {
        console.log("LifecycleA shouldComponentUpdate")
        return true
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("LifecycleA getSnapshotBeforeUpdate");
    }

    componentDidUpdate() {
        console.log("LifecycleA componentDidUpdate");
    }

    render() {
        console.log("LifecycleB render");
        return <div>Lifecycle B</div>
    }
}

export default LifecycleB
