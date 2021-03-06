import React, { useContext} from 'react'
import UserContext from '../../context/UserContext';
import { Link } from 'react-router-dom';
import SubNav from '../misc/SubNavigation';

import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid'
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
  rot: {
    width: 'auto',
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
                        <Grid item>
                          <ButtonBase className={classes.image}  >
                            <img className={classes.img} alt="" src="https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg" />
                          </ButtonBase>
                        </Grid>
                      </Box>


                      <Grid container spacing={2}>
                        <Grid item xs={12}>
                          <Grid container style={{ backgroundColor: '#283593', color: 'white' }}>

                            <Typography variant="h5" color="initial" fontWeight="fontWeightBold" className={classes.diseño} style={{ paddingLeft: 10 }}>
                              Informacion Basica
                            </Typography>

                          </Grid>

                          <Box mt={-2} mb={-1} style={{ 'backgroundColor': '#000' }}>
                            <hr />
                          </Box>
                          <Typography gutterBottom variant="subtitle1" className={classes.diseño} style={{ paddingLeft: 20 }}>
                            <Box display="flex" margin="auto" alignItems="right" justifyContent="right">Nombre: {userData.user.nombre}</Box>
                          </Typography>

                          <hr />

                          <Typography gutterBottom variant="subtitle1" className={classes.diseño} style={{ paddingLeft: 20 }}>
                            <Box display="flex" margin="auto" alignItems="right" justifyContent="right">Apellido: {userData.user.apellido}</Box>
                          </Typography>

                          <hr />

                          <Typography gutterBottom variant="subtitle1" className={classes.diseño} style={{ paddingLeft: 20 }}>
                            <Box display="flex" margin="auto" alignItems="right" justifyContent="right">Correo Electrónico: {userData.user.email}</Box>
                          </Typography>

                          <br></br>
                          <Box display="flex" margin="auto" alignItems="center" justifyContent="center">
                            <Button variant="contained" color="primary" href="/" style={{ margin: 10 }}>
                              Guardar
                            </Button>
                          </Box>

                        </Grid>
                      </Grid>
                    </Grid>
                  </Paper>

                </Grid>
              </Grid>
            </Container>
          </>

        ) //Aqui termina el usuario proveedor 
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
                              <img className={classes.img} alt="" src="https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg" />                          </ButtonBase>
                          </Grid>
                        </Box>


                        <Grid container spacing={2}>
                          <Grid item xs={12}>
                            <Grid container style={{ backgroundColor: '#283593', color: 'white' }}>

                              <Typography variant="h5" color="initial" fontWeight="fontWeightBold" style={{ paddingLeft: 10 }}>
                                Informacion Basica
                              </Typography>

                            </Grid>

                            <Box mt={-2} mb={-1} style={{ 'backgroundColor': '#000' }}>
                              <hr />
                            </Box>
                            <Typography gutterBottom variant="subtitle1" className={classes.diseño} style={{ paddingLeft: 20 }}>
                              <Box display="flex" margin="auto" alignItems="right" justifyContent="right">Nombre: {userData.user.nombre}</Box>
                            </Typography>

                            <hr />


                            <Typography gutterBottom variant="subtitle1" className={classes.diseño} style={{ paddingLeft: 20 }}>
                              <Box display="flex" margin="auto" alignItems="right" justifyContent="right">Apellido: {userData.user.apellido}</Box>
                            </Typography>

                            <hr />

                            <Typography gutterBottom variant="subtitle1" className={classes.diseño} style={{ paddingLeft: 20 }}>
                              <Box display="flex" margin="auto" alignItems="right" justifyContent="right">Correo Electrónico: {userData.user.email}</Box>
                            </Typography>
                            <br></br>
                            <Box display="flex" margin="auto" alignItems="center" justifyContent="center">
                              <Button variant="contained" color="primary" href="/" style={{ margin: 10 }}>
                                Guardar
                              </Button>
                            </Box>

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
