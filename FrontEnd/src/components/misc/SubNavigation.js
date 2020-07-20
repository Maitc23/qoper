import React from 'react'
import { Link } from 'react-router-dom';

import Typography from '@material-ui/core/Typography';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import ScheduleIcon from '@material-ui/icons/Schedule'; import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import PersonIcon from '@material-ui/icons/Person';
import Grid from '@material-ui/core/Grid'

import deepOrange from '@material-ui/core/colors/orange';

const useStyles = makeStyles((theme) => ({
  root: {
    width: 'auto',
    height: 250,
  },
  iconHover: {
    '&:hover': {
      backgroundColor: deepOrange[200],
      "& $iconClass": {
        color: deepOrange[800],
      }
    }
  },
  iconClass: {}
}));

export default function SubNavigation() {
  const classes = useStyles();

  return (
    <Paper>
      <MenuList>
        <MenuItem className={classes.iconHover}>
          <ListItemIcon className={classes.iconClass}>
            <PersonIcon fontSize="small" />
          </ListItemIcon>
          <Typography variant="inherit" >Mis Datos</Typography>
        </MenuItem>
        <MenuItem className={classes.iconHover}>
          <ListItemIcon className={classes.iconClass}>
            <ScheduleIcon fontSize="small" />
          </ListItemIcon>
          <Typography variant="inherit">Trabajos Pendientes</Typography>
        </MenuItem>
        <MenuItem className={classes.iconHover}>
          <ListItemIcon className={classes.iconClass}>
            <AssignmentTurnedInIcon fontSize="small" />
          </ListItemIcon>
          <Typography variant="inherit" noWrap>Trabajos Realizados </Typography>
        </MenuItem>
      </MenuList>
    </Paper>
  );
}