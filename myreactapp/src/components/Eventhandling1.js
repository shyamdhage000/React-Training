import React, { Component } from 'react'

export default class Eventhandling1 extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             uname: 'saurabh'
        }
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
                <button onClick={this.clickhandle.bind(this)}>change</button>
            </div>
        )
    }
}
