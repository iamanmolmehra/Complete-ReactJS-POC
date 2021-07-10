import React, { Component } from 'react'

class UserGreeting extends Component {

    constructor(props) {
        super(props)

        this.state = {
            isLoggedIn: false
        }
    }

    render() {

        return  this.state.isLoggedIn && <duv>Welcome Anjali Prajapati</duv>

        // return (
        //     this.state.isLoggedIn ?
        //         <div>Welcome Anjali Prajapati</div> :
        //         <div>Welcome Guest </div>
        // )

        // let message
        // if (this.state.isLoggedIn) {
        //     message = <div>Welcome Anjali Prajapati</div>
        // } else {
        //     message = <div>Welcome Guest</div>
        // }

        // return <div>{message}</div>

        // if (this.state.isLoggedIn) {
        //     return (
        //         <div>Welcome Anjali Prajapati</div>
        //     )
        // } else {
        //     return (
        //         <div>
        //             Welcome Guest
        //         </div>
        //     )
        // }
        //         return (
        //             <div>
        //                 <div>Welcome Anjali Prajapati</div>
        //                 <div>Welcome Shaana</div>
        //             </div>
        //         )
    }
}

export default UserGreeting
