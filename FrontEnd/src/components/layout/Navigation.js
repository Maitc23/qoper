import React from 'react';
import { Link } from 'react-router-dom'
import AuthOptions from '../auth/AuthOptions'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/Appbar';
import Box from '@material-ui/core/Box';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import logoImg from '../../images/LOGO-TEXTO.png'

const useStyles = makeStyles((theme) => ({
  logo: {
    width: 135,
    height: 43.54
  },
  appBarBackground: {
    backgroundColor: '#1a237e'
  }
}));

export default function Navigation() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="sticky" className={classes.appBarBackground}>
        <Toolbar>
          <Box p={1}>
            <Link>
              <Button>
                <img src={logoImg} alt="Logo" width="130px" />
              </Button>
            </Link>
          </Box>
        </Toolbar>
        <AuthOptions />
      </AppBar>
    </div>
  );
}