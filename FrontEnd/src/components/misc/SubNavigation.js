import React, { useContext } from 'react'
import { Link, useHistory } from 'react-router-dom';
import UserContext from '../../context/UserContext'

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
  const { userData } = useContext(UserContext);

  const history = useHistory();

  const perfil = () => history.push('/profile');
  const TrabajosLista = () => history.push('/trabajosLista');
  const PausedJobs = () => history.push('/pausedJobs');
  const CotizationJobs = () => history.push('/cotizationJobs');
  const CompletedJob = () => history.push('/completedJobs');
  const CancelledJob = () => history.push('/cancelledJob');
  const classes = useStyles();

  return (
    <Paper>

      <MenuList>
        <MenuItem className={classes.iconHover} onClick={perfil} >
          <ListItemIcon className={classes.iconClass}>
            <PersonIcon fontSize="small" />
          </ListItemIcon>
          <Typography variant="inherit">Mis Datos</Typography>
        </MenuItem>
        {
          userData.user && userData.user.userType === 1 ? (
            <>
              <MenuItem className={classes.iconHover} onClick={TrabajosLista}>
                <ListItemIcon className={classes.iconClass}>
                  <ScheduleIcon fontSize="small" />
                </ListItemIcon>
                <Typography variant="inherit">Trabajos Pendientes</Typography>
              </MenuItem>
              <MenuItem className={classes.iconHover} onClick={CotizationJobs}>
                <ListItemIcon className={classes.iconClass}>
                  <ScheduleIcon fontSize="small" />
                </ListItemIcon>
                <Typography variant="inherit">Trabajos en cotizacion</Typography>
              </MenuItem>
              <MenuItem className={classes.iconHover} onClick={CompletedJob}>
                <ListItemIcon className={classes.iconClass}>
                  <ScheduleIcon fontSize="small" />
                </ListItemIcon>
                <Typography variant="inherit">Trabajos realizados</Typography>
              </MenuItem>
            </>
          ) : (
              <>
                <MenuItem className={classes.iconHover} onClick={TrabajosLista}>
                  <ListItemIcon className={classes.iconClass}>
                    <ScheduleIcon fontSize="small" />
                  </ListItemIcon>
                  <Typography variant="inherit">Trabajos pendientes</Typography>
                </MenuItem>
                <MenuItem className={classes.iconHover} onClick={PausedJobs}>
                  <ListItemIcon className={classes.iconClass}>
                    <ScheduleIcon fontSize="small" />
                  </ListItemIcon>
                  <Typography variant="inherit">Trabajos pausados</Typography>
                </MenuItem>
                <MenuItem className={classes.iconHover} onClick={CotizationJobs}>
                  <ListItemIcon className={classes.iconClass}>
                    <ScheduleIcon fontSize="small" />
                  </ListItemIcon>
                  <Typography variant="inherit">Trabajos con cotizacion</Typography>
                </MenuItem>
                <MenuItem className={classes.iconHover} onClick={CancelledJob}>
                  <ListItemIcon className={classes.iconClass}>
                    <ScheduleIcon fontSize="small" />
                  </ListItemIcon>
                  <Typography variant="inherit">Trabajos cancelados</Typography>
                </MenuItem>
                <MenuItem className={classes.iconHover} onClick={CompletedJob}>
                  <ListItemIcon className={classes.iconClass}>
                    <ScheduleIcon fontSize="small" />
                  </ListItemIcon>
                  <Typography variant="inherit">Trabajos creados finalizados</Typography>
                </MenuItem>
              </>
            )
        }
      </MenuList>
    </Paper>
  );
}