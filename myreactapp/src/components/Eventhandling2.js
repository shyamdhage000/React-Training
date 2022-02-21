import React, { Component } from 'react'

export default class Eventhandling2 extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             uname: 'saurabh'
        }
        this.clickhandle = this.clickhandle.bind(this)
    }

    clickhandle(){
        this.setState({
            uname:"gade"
        })
    }
    render() {
        return (
            <div>
                  Uname : {this.state.uname}
                <button onClick={this.clickhandle}>change</button>
            </div>
        )
    }
}
