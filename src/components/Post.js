import React from 'react'

export default function Post(props) {
    return (
        <div>
            <h2> Posts:</h2>
            <p>{props.title}</p>
            <p>{props.info}</p>
        </div>
    )
}
