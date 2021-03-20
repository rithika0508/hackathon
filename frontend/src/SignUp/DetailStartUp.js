import React from 'react'
function DetailStartUp(){
    const yep = localStorage.getItem('DetailStartUp')
    const data = JSON.parse(yep)
    console.log(data)
    return(
        <div>
            <h1>{data.name}</h1>
            <h1>{data.domain}</h1>
            <p>{data.idea}</p>
            <p>{data.email}</p>
        </div>
    )
}
export default DetailStartUp
