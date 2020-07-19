import React, { useContext, useState, useEffect } from 'react'
import UserContext from '../../context/UserContext'
import ErrorMessage from '../misc/ErrorMessage';

import { Link } from 'react-router-dom';
import Axios from 'axios';


import Typography from '@material-ui/core/Typography';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import ScheduleIcon from '@material-ui/icons/Schedule'; import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import PersonIcon from '@material-ui/icons/Person';
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import clsx from 'clsx';
import Container from '@material-ui/core/Container';
import { ButtonBase } from '@material-ui/core';

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


export default function UserProfile() {



  const classes = useStyles();

  const { userData } = useContext(UserContext);
  let token = localStorage.getItem('x-access-token');
  const [error, setError] = useState();

  const [jobsData, setJobData] = useState({
    jobs: []
  })

  const getJob = async () => {
    try {
      const works = await Axios.get('http://localhost:4000/api/job',
        { headers: { 'x-access-token': token } }
      );

      setJobData({
        jobs: works.data
      })
    } catch (err) {
      err.response.data.message && setError(err.response.data.message);
    }

  }

  useEffect(() => {

    getJob()
    // eslint-disable-next-line
  }, [])




  const jobsList = () => {
    const jobs = jobsData.jobs
    const listJobs = jobs.map(job => (
      <div key={job._id}>
        <p > {job.titulo} {job.ubicacion} {job.tipoMantenimiento} {job.telefono}</p>

        <button className="btn btn-danger" onClick={() => deleteJob(job._id)}>
          Delete
          </button>
      </div>
    ))
    return (
      <>
        {listJobs}
      </>
    )
  }
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  const deleteJob = async (id) => {
    try {
      await Axios.delete('http://localhost:4000/api/job/' + id,
        { headers: { 'x-access-token': token } }
      )
      getJob()

    } catch (err) {
      err.response.data.message && setError(err.response.data.message);
    }
  }

  return (

    <div className="page">

      {
        userData.user && userData.user.userType === 1 ? (
          <h1>Welcome {userData.user.nombre} Proveedor</h1>

        ) : userData.user && userData.user.userType === 2 ? (
          <>

            <h1>{userData.user.nombre} Cliente</h1>






            <Container maxWidth="lg">

              <Grid container spacing={1}>
                <Grid item xs={12}>
                  <Typography variant="h4">Mi Perfil</Typography>
                </Grid>



                <Grid item  xs={6} md={3}>

                  <Paper className={classes.root}>
                    <MenuList>
                      <MenuItem>
                        <ListItemIcon>
                          <PersonIcon fontSize="small" />
                        </ListItemIcon>
                        <Typography variant="inherit">Mis Datos</Typography>
                      </MenuItem>
                      <MenuItem>
                        <ListItemIcon>
                          <ScheduleIcon fontSize="small" />
                        </ListItemIcon>
                        <Typography variant="inherit">Trabajos Pendientes</Typography>
                      </MenuItem>
                      <MenuItem>
                        <ListItemIcon>
                          <AssignmentTurnedInIcon fontSize="small" />
                        </ListItemIcon>
                        <Typography variant="inherit" noWrap>Trabajos Realizados </Typography>
                      </MenuItem>
                    </MenuList>
                  </Paper>
                </Grid>




                <Grid item xs={6} md={9}>
                  

                      <Paper >
                        <Grid container >
                          <Grid item>
                            <ButtonBase className={classes.image}>
                              <img className={classes.img} alt="" src="https://www.google.com/url?sa=i&url=http%3A%2F%2Fwww.fisc.utp.ac.pa%2Fsites%2Ffisc.utp.ac.pa%2Ffiles%2Fdocumentos%2F2019%2Fpdf%2Fcv-rosa-dutari.pdf&psig=AOvVaw1m7hQ2pjdpIr1ZFsDQo3se&ust=1595055470124000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCPCixeja0-oCFQAAAAAdAAAAABAM" />
                            </ButtonBase>
                          </Grid>
                          <Grid item xs={12} container>
                            <Grid item xs container direction="column" spacing={1}>
                              <Grid item xs>
                                <Typography gutterBottom variant="subtitle1">
                                  Nombre:
                    </Typography>
                                <Typography gutterBottom variant="subtitle1">
                                  Apellido:
                    </Typography>
                                <Typography gutterBottom variant="subtitle1">
                                  Correo Electronico:
                    </Typography>
                    <Typography gutterBottom variant="subtitle1">
                                  Correo Electronico:
                    </Typography>
                    <Typography gutterBottom variant="subtitle1">
                                  Correo Electronico:
                    </Typography>
                    <Typography gutterBottom variant="subtitle1">
                                  Correo Electronico:
                    </Typography>
                    <Typography gutterBottom variant="subtitle1">
                                  Correo Electronico:
                    </Typography>
                    
                              </Grid>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Paper>
                    
                </Grid>
              </Grid>
            </Container>


            {error ? (
              <ErrorMessage message={error} />
            ) : (
                <>
                  {jobsList()}
                </>
              )}

          </>

        ) : (
              <>
                <h2>You are not logged in</h2>
                <Link to="/login">Log in</Link>
              </>
            )}
    </div>
  )
}
