import React, { Component } from 'react'

export default class EventhandlingCC extends Component {
    
    constructor(props) {
        super(props)
    
        this.state = {
             uname: 'saurabh'
        }
    }

    clickhandle(){
       alert("clicked")
    }
    render() {
       
        
        return (
            <div>
                Uname : {this.state.uname}
                <button onClick={this.clickhandle}>click me</button>
            </div>
        )
    }
}
