import React, { useContext, useState, useEffect } from 'react'
import UserContext from '../../context/UserContext'
import ErrorMessage from '../misc/ErrorMessage';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import SubNav from '../misc/SubNavigation';

import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid'
import clsx from 'clsx';
import Container from '@material-ui/core/Container';
import { ButtonBase } from '@material-ui/core';
import { Box } from '@material-ui/core';
import indigo from '@material-ui/core/colors/indigo';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
  root: {
    width: 'auto',
    height: 250,
  },

  paperr: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },},

  rot: {
    width: 'auto',
  },
  paper: {
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
    width: 250,
    height: 250,
  },

  diseño: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '30ch',
    },
    '& label.Mui-focused': {
      color: indigo[800],
    },
    '& label.Mui-focused:after': {
      color: indigo[800],
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: indigo[800],
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '',
      },
      '&:hover fieldset': {
        borderColor: indigo[800],
      },
      '&.Mui-focused fieldset': {
        borderColor: indigo[800],
      },
    },
  }
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
        <p > {job.titulo} {job.ubicacion.ciudad} {job.ubicacion.corregimiento} {job.tipoMantenimiento} {job.telefono}</p>

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


    <div className="page" style={{ 'marginTop': '40px' }}>

      {
        userData.user && userData.user.userType === 1 ? (
          <>
 <Container maxWidth="lg">

<Grid container spacing={1}>
  <Grid item xs={12}>
    <Typography variant="h4">Mi Perfil</Typography>
  </Grid>

  <Grid item xs={6} md={3}>
    <SubNav />
  </Grid>


  <Grid item xs={6} md={9}>


    <Paper className={classes.paperr} >
      <Grid container >
       
        <Box 
          display="flex"
          margin="auto"
          alignItems="center"
          justifyContent="center"
        >
          <Grid item  >
            <ButtonBase className={classes.image}  >
              <img className={classes.img}  alt="" src="https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg" />                          </ButtonBase>
          </Grid>
        </Box>
        

        <Grid container spacing={2}>
          <Grid item xs={12}>
          <Grid container style={{backgroundColor: '#283593', color: 'white'}}>
           
              <Typography variant="h5" color="initial" fontWeight="fontWeightBold">
                Informacion Basica
            </Typography>
          
            </Grid>

            <Box mt={-2} mb={-1} style={{ 'backgroundColor': '#000' }}>
              <hr />
            </Box>
              <Typography gutterBottom variant="subtitle1" className={classes.diseño}>
                Nombre<Box display="flex" margin="auto" alignItems="center" justifyContent="center" fontStyle="italic">{userData.user.nombre}</Box> 
              </Typography>
            
            <hr/>


            
            
              <Typography gutterBottom variant="subtitle1">
                Apellido<Box display="flex" margin="auto" alignItems="center" justifyContent="center" fontStyle="italic">{userData.user.apellido}</Box>
              </Typography>
 
            <hr/>
            
              <Typography gutterBottom variant="subtitle1">
                Correo Electronico<Box display="flex" margin="auto" alignItems="center" justifyContent="center" fontStyle="italic">{userData.user.email}</Box>
              </Typography>
           
           
          
            <hr/>
            <Box display="flex" margin="auto" alignItems="center" justifyContent="center">
              <Button variant="contained" color="primary" href="/">
                Guardar
            </Button>
            </Box>
            <hr/>

          </Grid>
          </Grid>
        </Grid>
    </Paper>

  </Grid>
  </Grid>
</Container>
          </>

        )
         : userData.user && userData.user.userType === 2 ? (
          <>

          

            <Container maxWidth="lg">

              <Grid container spacing={1}>
                <Grid item xs={12}>
                  <Typography variant="h4">Mi Perfil</Typography>
                </Grid>

                <Grid item xs={6} md={3}>
                  <SubNav />
                </Grid>

<<<<<<< HEAD
                <Grid item xs={6} md={9}>
                  <Paper >
=======

                <Grid item xs={6} md={9}>


                  <Paper className={classes.paperr} >
>>>>>>> b55d452f4317ab16a7899943f9570f2e37c1c593
                    <Grid container >

                      <Box
                        display="flex"
                        margin="auto"
                        alignItems="center"
                        justifyContent="center"
                      >
                        <Grid item  >
                          <ButtonBase className={classes.image}  >
                            <img className={classes.img} alt="" src="https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg" />                          </ButtonBase>
                        </Grid>
                      </Box>


                      <Grid container spacing={2}>
                        <Grid item xs={12}>
                          <Grid container style={{ backgroundColor: '#283593', color: 'white' }}>

                            <Typography variant="h5" color="initial" fontWeight="fontWeightBold">
                              Informacion Basica
                          </Typography>

                          </Grid>

                          <Box mt={-2} mb={-1} style={{ 'backgroundColor': '#000' }}>
                            <hr />
                          </Box>
                          <Typography gutterBottom variant="subtitle1" className={classes.diseño}>
                            Nombre<Box display="flex" margin="auto" alignItems="center" justifyContent="center" fontStyle="italic">{userData.user.nombre}</Box>
                          </Typography>

                          <hr />




                          <Typography gutterBottom variant="subtitle1">
                            Apellido<Box display="flex" margin="auto" alignItems="center" justifyContent="center" fontStyle="italic">{userData.user.apellido}</Box>
                          </Typography>

                          <hr />

                          <Typography gutterBottom variant="subtitle1">
                            Correo Electronico<Box display="flex" margin="auto" alignItems="center" justifyContent="center" fontStyle="italic">{userData.user.email}</Box>
                          </Typography>

<<<<<<< HEAD
                          {/*<Grid container style={{backgroundColor: '#EE6B00', color: 'white'}}>
                         
                            <Typography variant="h5" color="initial" fontWeight="fontWeightBold">
                              Informacion Personal
                          </Typography>
                       
                          </Grid>

                          <Box mt={-2} mb={-1} style={{ 'backgroundColor': '#000' }}>
                            <hr />
                          </Box>
                         
                            <Typography gutterBottom variant="subtitle1">
                              Telefono predeterminado<Box display="flex" margin="auto" alignItems="center" justifyContent="center" fontStyle="italic"></Box>
              </Typography>*/}

                          <hr />
=======
                          
                          
                            <Typography gutterBottom variant="subtitle1">
                              Apellido<Box display="flex" margin="auto" alignItems="center" justifyContent="center" fontStyle="italic">{userData.user.apellido}</Box>
                            </Typography>
               
                          <hr/>
                          
                            <Typography gutterBottom variant="subtitle1">
                              Correo Electronico<Box display="flex" margin="auto" alignItems="center" justifyContent="center" fontStyle="italic">{userData.user.email}</Box>
                            </Typography>
                         
                         
                        
                          <hr/>
>>>>>>> b55d452f4317ab16a7899943f9570f2e37c1c593
                          <Box display="flex" margin="auto" alignItems="center" justifyContent="center">
                            <Button variant="contained" color="primary" href="/">
                              Guardar
                          </Button>
                          </Box>
                          <hr />

                        </Grid>
                      </Grid>
                    </Grid>
                  </Paper>

                </Grid>
              </Grid>
            </Container>
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
