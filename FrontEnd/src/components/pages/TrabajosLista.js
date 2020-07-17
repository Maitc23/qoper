import React from 'react';
import { Grid} from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import LTCard from '../misc/LTCard';
import {Container} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
      background: 'green',
      height: 48
  },
});

  
  const TrabajosLista = () => {
    const classes = useStyles();
    return (
      <Container maxWidth="lg">
        <Grid container className={classes.root} maxWidth="lg">
          hola
        </Grid>
        <Grid container direction="row" spacing={1}>
          <Grid item xs={12} sm={2}>
            <Paper>xs</Paper>
          </Grid>
          <Grid item xs={12} sm={10}>
            <LTCard/>
          </Grid>
        </Grid>
      </Container>
    );
  }


export default TrabajosLista;