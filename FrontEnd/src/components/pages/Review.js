import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ErrorNotice from '../misc/ErrorNotice';


const useStyles = makeStyles((theme) => ({
  listItem: {
    padding: theme.spacing(1, 0),
  },
  total: {
    fontWeight: 700,
  },
  title: {
    marginTop: theme.spacing(2),
  },
}));

export default function Review() {
  
  const [error, setError] = useState();
  let token = localStorage.getItem('x-access-token');
  let cotization = localStorage.getItem('cotData');
  const jobData = localStorage.getItem('jobData')

  if(jobData=== null){ 
    localStorage.setItem("jobData", "");
  }
  const [cotData, setCotData] = useState({ 
    cot: JSON.parse(jobData)
  })

const getCot = async () => {
  try {
      const job = await Axios.get('http://localhost:4000/api/job/' + cotization,
        { headers: { 'x-access-token': token } }
      );
      localStorage.removeItem('jobData');
      localStorage.setItem('jobData', JSON.stringify(job.data))
      setCotData({ 
        cot: job.data 
      })
      
    } catch (err) {
      err.response.data.message && setError(err.response.data.message);
    }
}

useEffect(() => {

    getCot()
    
    // eslint-disable-next-line
  }, [])
  const classes = useStyles();

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Order summary
      </Typography>
      <List disablePadding>
   
        <ListItem className={classes.listItem} >
          <ListItemText primary={cotData.cot.titulo} />
          <Typography variant="subtitle1" className={classes.total}>
            ${cotData.cot.precio}
          </Typography>
        </ListItem>
      </List>
 
    </React.Fragment>
  );
}