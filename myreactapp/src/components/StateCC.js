import React, { Component } from 'react'

export default class StateCC extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             username:"admin",
             password:"admin123"
        }
    }
    
    render() {
        return (
            <div>
                Username: {this.state.username}
                Password: {this.state.password}
            </div>
        )
    }
}
