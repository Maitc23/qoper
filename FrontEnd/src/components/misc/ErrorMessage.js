import React from 'react';
import Alert from '@material-ui/lab/Alert';

export default function ErrorMessage(props) {
  return (
    <div className="error-notice" style={{ margin: 5 }}>
      <Alert variant="filled" severity="error">
        <span>{props.message}</span>
      </Alert>
    </div>
  )
}
