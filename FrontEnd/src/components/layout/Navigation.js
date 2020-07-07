import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Box from '@material-ui/core/Box';
import { Link as Enlace } from 'react-router-dom';
import AuthOptions from '../auth/AuthOptions'
import logoImg from '../../images/LOGO-TEXTO.png';

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  appBarBackground: {
    backgroundColor: '#171932',
  },
  leftSpacing: {
    marginLeft: theme.spacing(2),
  }
}));

export default function Navigation() {
  const classes = useStyles();

  return (
    <div className={classes.grow}>
      <AppBar position="static" className={classes.appBarBackground}>
        <Toolbar>
          <Enlace to="/">
            <Box ml={5}>
              <img src={logoImg} alt="Logo" height="40px" />
            </Box>
          </Enlace>
          <div className={classes.grow} />
          <div>
            <Box>
              <AuthOptions />
            </Box>
          </div>
        </Toolbar>
      </AppBar>
    </div >
  );
}

