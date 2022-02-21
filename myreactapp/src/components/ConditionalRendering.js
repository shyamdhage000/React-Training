import React, { Component } from 'react'

export default class ConditionalRendering extends Component {
    constructor(props){
        super(props)

        this.state={
            isUserValid:true,
            username: "Shyam"
        }
    }
    render() {
        
          //  if(this.state.isUserValid){
           //     return <div>Welcome {this.state.username}</div>
           // }else{
            //    return <div>Invalid User</div>
            //}
    //   let response
    //   if(this.state.isUserValid){
    //       response='Welcome '+ this.state.username
    //   }else{
    //       response='invalid User'
    //   }
    //   return <div>{response}</div>
    // return(
    //     this.state.isUserValid ?
    //         <div>Welcome {this.state.username}</div>:
    //         <div>Invalid user</div>
    // )
    
    //Short circuit operator
    return this.state.isUserValid && <div>Welcome {this.state.username} </div>






    }
}
