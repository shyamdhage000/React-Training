import React from 'react'

export default function EventhandlingFC() {
    function clickhandle(){
        alert("saurabh");
    }
    return (
        <div>
            <button onClick={clickhandle}>click</button>
        </div>
    )
}
