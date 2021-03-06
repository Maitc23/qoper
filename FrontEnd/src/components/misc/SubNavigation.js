import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom';
import UserContext from '../../context/UserContext'
import Typography from '@material-ui/core/Typography';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import ScheduleIcon from '@material-ui/icons/Schedule'; 
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import PersonIcon from '@material-ui/icons/Person';
import PauseIcon from '@material-ui/icons/Pause';
import ListAltIcon from '@material-ui/icons/ListAlt';
import CancelIcon from '@material-ui/icons/Cancel';
import BuildIcon from '@material-ui/icons/Build';

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
  const AceptedCotizations = () => history.push('/acceptedCotizations');
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
                  <BuildIcon fontSize="small" />
                </ListItemIcon>
                <Typography variant="inherit">Trabajos en cotizacion</Typography>
              </MenuItem>
              <MenuItem className={classes.iconHover} onClick={AceptedCotizations}>
              <ListItemIcon className={classes.iconClass}>
                <ScheduleIcon fontSize="small" />
              </ListItemIcon>
              <Typography variant="inherit">Cotizaciones aceptadas</Typography>
              </MenuItem>
              <MenuItem className={classes.iconHover} onClick={CompletedJob}>
                <ListItemIcon className={classes.iconClass}>
                  <AssignmentTurnedInIcon fontSize="small" />
                </ListItemIcon>
                <Typography variant="inherit">Trabajos realizados</Typography>
              </MenuItem>
            </>
          ) :
          
          (
              <>
                <MenuItem className={classes.iconHover} onClick={TrabajosLista}>
                  <ListItemIcon className={classes.iconClass}>
                    <ListAltIcon fontSize="small" />
                  </ListItemIcon>
                  <Typography variant="inherit">Trabajos pendientes</Typography>
                </MenuItem>
                <MenuItem className={classes.iconHover} onClick={PausedJobs}>
                  <ListItemIcon className={classes.iconClass}>
                    <PauseIcon fontSize="small" />
                  </ListItemIcon>
                  <Typography variant="inherit">Trabajos pausados</Typography>
                </MenuItem>
                <MenuItem className={classes.iconHover} onClick={CotizationJobs}>
                  <ListItemIcon className={classes.iconClass}>
                    <BuildIcon fontSize="small" />
                  </ListItemIcon>
                  <Typography variant="inherit">Trabajos en cotizacion</Typography>
                </MenuItem>
                <MenuItem className={classes.iconHover} onClick={CancelledJob}>
                  <ListItemIcon className={classes.iconClass}>
                    <CancelIcon fontSize="small" />
                  </ListItemIcon>
                  <Typography variant="inherit">Cotizaciones rechazadas</Typography>
                </MenuItem>
                <MenuItem className={classes.iconHover} onClick={CompletedJob}>
                  <ListItemIcon className={classes.iconClass}>
                    <AssignmentTurnedInIcon fontSize="small" />
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