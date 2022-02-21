import React, {useState} from 'react'

export default function StateFC(props) {
    
    const [username, setusername] = useState(props.uname?props.uname:'admin')
    const [password, setPassword] = useState(props.pass?props.pass:'admin123')
    return (
        <div>
            Username: {username}
             <br></br>
            Password: {password}
        </div>
    )
}



