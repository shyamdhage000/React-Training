import React, { Component } from 'react'

export default class FormDemo extends Component {
    constructor(props){
        super(props)

        this.state={
            username:'',
            address:'',
            sort:''
        }
    }

    usernameChange = event =>{
        this.setState({
            username:event.target.value
           
        })
        console.log(this.state.username)
    }
    addressChange = event =>{
        this.setState({
            address:event.target.value
        })
        console.log(this.state.address)
    }
    handleSort= event =>{
        this.setState({
            sort: event.target.value
        })
       // console.log(this.state.sort)
    }

    showData(){
        alert(this.state.username,this.state.address,this.state.sort)
    }

    render() {
        return (
            <div>
                <form>
                    <div>
                        Name:<input type="text" name="username" value={this.state.username} onChange={this.usernameChange} />
                    </div>

                    <div>
                        Address: <textarea name="address" value={this.state.address} onChange={this.addressChange}></textarea>
                    </div>
                    <div>
                        Technologies:
                        <select name="sort" onChange={this.handleSort} value={this.state.sort}>
                            <option value="reactjs" >React js</option>
                            <option value="angular">Angular</option>
                            <option value="node">Node</option>
                            <option value="python">Python</option>
                        </select>
                    </div>
                    <button type="button" onClick={this.showData()}>Submit</button>
                </form>
            </div>
        )
    }
}
