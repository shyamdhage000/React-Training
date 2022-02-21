import React, { Component } from 'react'

export default class PropsCC extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            username: "Shyam"
        }
    }
    
    render() {
        // const {uname,city,children} = this.props
        // return (
        //     <div>
        //         Hello {uname} u stay in {city}
        //         <br/>
        //         {children}
        //     </div>
        // )
        if(this.state.username===this.props.username){
               return <div>Welcome props {this.state.username}</div>
            }else{
                return <div>Invalid User</div>
             }
    }
}

PropsCC.defaultProps = {
    uname: "guest",
    city:"delhi"
}
