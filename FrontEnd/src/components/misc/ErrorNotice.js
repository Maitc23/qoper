import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Alert from '@material-ui/lab/Alert';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function ErrorNotice(props) {
  const classes = useStyles();
  return (
    <div className="error-notice">
      <Alert variant="filled" severity="error">
        <span>{props.message}</span>
        <button onClick={props.clearError}>X</button>
      </Alert>
    </div>
  )
}
