import React, { useState, useEffect } from 'react'
import Card from 'react-bootstrap/Card'

function Data() {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/comments?_delay=100")
        .then(res => res.json())
        .then(result => setData(result))
    }, [])

    return (
        <div>
            { data.map(response => 
                ( 
                <div>  
                    <Card style={{ width: '18rem', border: "1px solid black" }}>
                      <Card.Body>
                        <Card.Title> <i className="fa fa-id-badge" aria-hidden="true"></i> {response.postId} </Card.Title>
                        <Card.Subtitle className="mb-2 text-muted"> <i className="fa fa-id-card" aria-hidden="true"></i> {response.id} </Card.Subtitle>
                        <Card.Text>
                            <i class="fa fa-user" aria-hidden="true"></i> {response.name}
                        </Card.Text>
                        <Card.Text>
                            <i class="fa fa-envelope-o" aria-hidden="true"></i> {response.email}
                        </Card.Text>
                        <Card.Text>
                            <i class="fa fa-comment-o" aria-hidden="true"></i> {response.body}
                        </Card.Text>
                    </Card.Body>
                    </Card>
                {/* <h3> <i className="fa fa-id-badge" aria-hidden="true"></i> {response.postId} </h3>
                <h4> <i className="fa fa-id-card" aria-hidden="true"></i> {response.id} </h4>
                <p className="data-name"> <i class="fa fa-user" aria-hidden="true"></i> {response.name} </p> 
                <p className="data-email"> <i class="fa fa-envelope-o" aria-hidden="true"></i> {response.email} </p>
                <p className="data-body"> <i class="fa fa-comment-o" aria-hidden="true"></i> {response.body} </p>
                <hr /> */}
                </div>
            )
            ) 
            }     
        </div>
    )
}

export default Data
