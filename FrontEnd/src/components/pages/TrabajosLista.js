import React from 'react';
import { Grid } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import LTCard from '../misc/LTCard';
import { Container } from '@material-ui/core';






const TrabajosLista = () => {

  return (
    <Container maxWidth="lg">
      <Grid container direction="row" spacing={1} style={{ marginTop: 20 }}>
        <Grid item xs={12} sm={2}>
          <Paper>xs</Paper>
        </Grid>
        <Grid item xs={12} sm={10}>
          <LTCard />
        </Grid>
      </Grid>
    </Container>
  );
}


export default TrabajosLista;