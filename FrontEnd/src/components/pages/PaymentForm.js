import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import PaypalCheckOutButton from '../misc/PaypalCheckOutButton';
import Box from '@material-ui/core/Box'



export default function PaymentForm() {
const jobData = JSON.parse(localStorage.getItem('jobData'))

const product = {
  price:  jobData.precio,
  name: jobData.titulo,
  description: 'Trabajo realizado',
}
  return (
    <React.Fragment>
      <Box display="flex" margin="auto" alignItems="center" justifyContent="center" fontStyle="italic">
      <Typography variant="subtitle1" gutterBottom>
      Metodo de Pago
      </Typography>
      </Box>
      <hr/>
      <Grid container spacing={3}>
      <PaypalCheckOutButton product= {product} />
        </Grid>
       
        <Grid item xs={12}>
         
        </Grid>
      
    </React.Fragment>
  );
}