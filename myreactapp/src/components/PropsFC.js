import React from 'react'

export default function PropsFC(props) {
    
    return (
        <div>
            Hello {props.uname}, u stay in {props.city}
        </div>
    )
}


PropsFC.defaultProps = {
    uname: "guest",
    city: "delhi"
}