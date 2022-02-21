import React, { Component } from 'react'
import { HOC } from './HOC'

class ClickCounter extends Component {
    // constructor(props){
    //     super(props)

    //     this.state={
    //       counter:0
    //     }
    // }
    //     incrementCounter = () => {
    //         this.setState(prevState=> {
    //             return {counter: prevState.counter+1}
    //         })
    // }
    render(){

        const{counter, incrementCounter}=this.props
        return (
            <div>
                <button  onClick={incrementCounter}>This button is clicked {counter} times</button>
            </div>
        )
    }
}

export default HOC(ClickCounter)