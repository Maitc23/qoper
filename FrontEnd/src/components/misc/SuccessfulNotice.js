import React from 'react';
import { Alert, AlertTitle } from '@material-ui/lab';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';

export default function SuccessfulNotice(props) {
  return (
    <div className="good-notice">
      <Alert variant="filled" severity="success">
        <span>{props.message}</span>
        <IconButton aria-label="close modal">
          <CloseIcon onClick={props.clearSuccessfulNotice} style={{ margin: '-12px', color: '#FFFFFF' }} />
        </IconButton>
      </Alert>
    </div>
  )
}
