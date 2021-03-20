import React from 'react'
function DetailInvestor(){
    const yep = localStorage.getItem('DetailInvestor')
    const data = JSON.parse(yep)
    console.log(data)
    return(
        <div>
            <h1>{data.name}</h1>
            <p>{data.bio}</p>
            <p>{data.email}</p>
        </div>
    )
}
export default DetailInvestor