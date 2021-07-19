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
                <h3> <i class="fa fa-id-badge" aria-hidden="true"></i> {response.postId} </h3>
                <h4> <i class="fa fa-id-card" aria-hidden="true"></i> {response.id} </h4>
                <p className="data-name"> <i class="fa fa-user" aria-hidden="true"></i> {response.name} </p> 
                <p className="data-email"> <i class="fa fa-envelope-o" aria-hidden="true"></i> {response.email} </p>
                <p className="data-body"> <i class="fa fa-comment-o" aria-hidden="true"></i> {response.body} </p>
                <hr />
                </>
            )
            ) 
            }     
        </div>
    )
}

export default Data
