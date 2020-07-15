import React from 'react'

export default function ErrorMessage(props) {
    return (
        <div className="error-notice">
            <span>{props.message}</span>
        </div>
    )
}
