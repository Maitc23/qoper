import React from 'react'

export default function SuccessfulNotice(props) {
    return (
        <div className="good-notice">
            <span>{props.message}</span>
            <button onClick={props.clearSuccessfulNotice}>X</button>
        </div>
    )
}
