import React from 'react';
import { Alert } from '@material-ui/lab';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';


export default function ErrorNotice(props) {

  return (
    <div className="error-notice">
      <Alert variant="filled" severity="error">
        <strong> {props.message} </strong>
        <IconButton aria-label="delete">
          <CloseIcon onClick={props.clearError} style={{ margin: '-12px', color: '#FFFFFF' }} />
        </IconButton>
      </Alert>
    </div>
  )
}
