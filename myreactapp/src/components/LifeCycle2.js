import React, { Component } from 'react'

export default class LifeCycle2 extends Component {

    constructor(props){
        super(props)
 
         this.state={
             uname:"Shyam"
     }
     console.log("Constructor oflifecycle2 invoked")
     }

     onClickHandler=()=>{
         this.setState({
             uname:"Smith"
         })
     }
     static getDerivedFormProps(props,state){
         console.log("getDerivedFormProps lc2  invoked ")
         return null
     }
     componentDidMount(){
         console.log("Componentdidmount of lifecycle2 invoked")
     }
     shouldComponentUpdate()
     {
         console.log("shouldComponentUpdates lc2  invoked ")
         return null
     }
     getSnapshotBeforeUpdate()
     {
         console.log("getSnapshotBeforeUpdate lc2  invoked ")
         return null
     }
     componentDidUpdate()
     {
         console.log("getSnapshotBeforeUpdate lc2  invoked  ")
     }


     render() {
        console.log("render invokes")
        return (
            <div>
                <h1>Render of lifecycle2</h1>
                <button onClick={this.onClickHandler}>Click</button>
                
            </div>
           
        )
    }
}
