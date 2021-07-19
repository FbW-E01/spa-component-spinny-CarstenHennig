import React, { useState, useEffect } from 'react'
import "font-awesome/css/font-awesome.min.css";

function Spinner() {
    const [state, setState] = useState("");

    useEffect(() => {

    }, [state])

    return (
        <div>
            <div className="fa-3x">
                <i className="fa fa-spinner fa-spin"></i>
            </div>
            {/* <button onClick={() => {setState(!state)}}>
                Click me
            </button> */}
        </div>
    )
}

export default Spinner
