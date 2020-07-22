import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const products = [
  { name: 'Product 1', desc: 'BruhhhhBruhhhh', price: '$9.99' },
  { name: 'Product 2', desc: 'Bruhhhh Bruhhhh', price: '$3.45' },
  { name: 'Product 3', desc: 'Bruhhhh Bruhhhh', price: '$6.51' },
  { name: 'Product 4', desc: 'BruhhhhBruhhhh', price: '$14.11' },
];


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
  const classes = useStyles();

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Order summary
      </Typography>
      <List disablePadding>
        {products.map((product) => (
          <ListItem className={classes.listItem} key={product.name}>
            <ListItemText primary={product.name} secondary={product.desc} />
            <Typography variant="body2">{product.price}</Typography>
          </ListItem>
        ))}
        <ListItem className={classes.listItem}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" className={classes.total}>
            $66.60
          </Typography>
        </ListItem>
      </List>
 
    </React.Fragment>
  );
}