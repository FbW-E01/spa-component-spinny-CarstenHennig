import React, { useState, useEffect } from 'react'

function Data() {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/comments?_delay=2000")
        .then(res => res.json())
        .then(result => setData(result))
    })

    return (
        <div>
            { data.map(response => 
                ( 
                <>  
                <p> {response.id} </p>
                <p> { response.name } </p> 
                </>
            )
            ) 
            }     
        </div>
    )
}

export default Data
