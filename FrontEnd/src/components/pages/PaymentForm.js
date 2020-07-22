import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import PaypalCheckOutButton from '../misc/PaypalCheckOutButton';

const product = {
  price: 777.77,
  name: 'Trabajo del baño',
  description: 'Trabajo realizado',

}

export default function PaymentForm() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
      Metodo de Pago
      </Typography>
      <Grid container spacing={3}>
      <PaypalCheckOutButton product= {product} />
        </Grid>
       
        <Grid item xs={12}>
         
        </Grid>
      
    </React.Fragment>
  );
}