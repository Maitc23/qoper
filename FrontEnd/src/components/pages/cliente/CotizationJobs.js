import React from 'react';
import { Grid } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import LTCard from '../../misc/LTCard';
import { Container } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import SubNav from '../../misc/SubNavigation';

const CotizationJobs = () => {
  const state = 2;

  return (

    <div className="page" style={{ 'marginTop': '40px' }}>
      <Container maxWidth="lg">
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <Typography variant="h4">Mis trabajos en cotizacion</Typography>
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


export default CotizationJobs;