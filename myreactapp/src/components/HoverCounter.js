import React, { Component } from 'react'
import { HOC } from './HOC'

class HoverCounter extends Component {

   
    render(){
        const{counter, incrementCounter}=this.props
        return (
            <div>
                <h2 onMouseOver={incrementCounter}>This is hovered {counter} times</h2>
            </div>
        )
    }
}

export default HOC(HoverCounter)