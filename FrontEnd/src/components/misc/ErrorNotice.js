import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Alert from '@material-ui/lab/Alert';

export default function ErrorNotice(props) {
  return (
    <div className="error-notice" style={{margin: 5}}>
      <Alert variant="filled" severity="error">
        <span>{props.message}</span>
        <button onClick={props.clearError}>X</button>
      </Alert>
    </div>
  )
}
