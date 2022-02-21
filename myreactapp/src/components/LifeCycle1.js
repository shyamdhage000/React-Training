import React, { Component } from 'react'
import LifeCycle2 from './LifeCycle2'


export default class LifeCycle1 extends Component {

    constructor(props){
           super(props)
    
            this.state={
                uname:"Shyam"
        }
        console.log("Constructor oflifecycle1 invoked")
        }

        onClickHandler=()=>{
            this.setState({
               flag:true
            })
        }
        static getDerivedFormProps(props,state){
            console.log("getDerivedFormProps invoked ")
            return null
        }
        componentDidMount(){
            console.log("Componentdidmount of lifecycle invoked")
        }
        shouldComponentUpdate()
        {
            console.log("shouldComponentUpdates invoked ")
            return null
        }
        getSnapshotBeforeUpdate()
        {
            console.log("getSnapshotBeforeUpdate invoked ")
            return null
        }
        componentDidUpdate()
        {
            console.log("getSnapshotBeforeUpdate invoked  ")
        }

    render() {
        
         
        console.log("render invokes")
         return (
            <div>
                 <h1>Render of lifecycle1</h1>
                 <button onClick={this.onClickHandler}>Click</button>
               
                if(this.state.flag){
                    <LifeCycle2 />
                }
                 
             </div>
         )
    }
}
