import React from 'react';
import { Grid } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import LTCard from '../../misc/LTCard';
import { Container } from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import SubNav from '../../misc/SubNavigation';

const useStyles = makeStyles((theme) => ({
  root: {
    width: 'auto',
    height: 250,
  },

  rot: {
    width: 'auto',
  },
  paper: {
    //padding: theme.spacing(2),
    //display: 'flex',
    // overflow: 'auto',
    // flexDirection: 'column',
    // marginRight: true,
    margin: 'auto',
    maxWidth: 500,
  },
  fixedHeight: {
    height: 250,
    width: 500,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
  image: {
    width: 128,
    height: 128,
  },
}));

const AcceptedCotizations = () => {
  const classes = useStyles();
  const state = 3;

  return (

    <div className="page" style={{ 'marginTop': '40px' }}>
      <Container maxWidth="lg">
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <Typography variant="h4">Cotizaciones aceptadas</Typography>
          </Grid>
          <Grid item xs={6} md={3}>
            <SubNav />
          </Grid>
          <Grid item xs={6} md={9}>
            <Paper >
              <Grid container>
                <Grid item xs={12}>
                  <LTCard state={state}/>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}


export default AcceptedCotizations;