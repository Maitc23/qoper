import React, { useContext } from 'react';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import deepOrange from '@material-ui/core/colors/orange';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import SvgIcon from '@material-ui/core/SvgIcon';
import { Link } from 'react-router-dom'

import '../index.css';
import UserContext from '../context/UserContext';

function WarrantyIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M21 11C21 16.55 17.16 21.74 12 23C6.84 21.74 3 16.55 3 11V5L12 1L21 5V11M12 21C15.75 20 19 15.54 19 11.22V6.3L12 3.18L5 6.3V11.22C5 15.54 8.25 20 12 21M15.05 16L11.97 14.15L8.9 16L9.71 12.5L7 10.16L10.58 9.85L11.97 6.55L13.37 9.84L16.95 10.15L14.23 12.5L15.05 16" />
    </SvgIcon>
  );
}

function SaveIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M13 1C14.66 1 16 2.34 16 4S14.66 7 13 7 10 5.66 10 4 11.34 1 13 1M20 14C20 11.64 18.17 9.6 15.5 8.62C15 9.45 14.06 10 13 10C11.76 10 10.69 9.24 10.24 8.17C10 8.2 9.78 8.23 9.57 8.29L7 7V9.32C5.5 10.22 4.45 11.5 4.12 13H2V17H5.08C5.58 17.65 6.23 18.22 7 18.68V22H9V19.56C9.93 19.84 10.94 20 12 20S14.07 19.84 15 19.56V22H17V18.68C18.15 18 19.03 17.06 19.54 16H22V14H20M7 13C6.45 13 6 12.55 6 12S6.45 11 7 11 8 11.45 8 12 7.55 13 7 13Z" />
    </SvgIcon>
  );
}

function WorkerIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M9.87,12.15L9,6.46C10.95,5.84 13.05,5.84 15,6.46L14.13,12.15C14.06,12.64 13.63,13 13.13,13H10.86C10.37,13 9.94,12.64 9.87,12.15M22,16V16C22,15.21 21.53,14.5 20.8,14.17C20.32,11.86 18.96,9.83 17,8.5L15.24,13.34C15.1,13.74 14.72,14 14.3,14H9.7C9.28,14 8.9,13.74 8.76,13.34L7,8.5C5.04,9.83 3.68,11.86 3.2,14.16C2.47,14.5 2,15.2 2,16L8.45,17.84C8.81,17.94 9.18,18 9.55,18H14.43C14.8,18 15.17,17.94 15.53,17.84L22,16Z" />
    </SvgIcon>
  );
}

function ToolsIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M13.78 15.3L19.78 21.3L21.89 19.14L15.89 13.14L13.78 15.3M17.5 10.1C17.11 10.1 16.69 10.05 16.36 9.91L4.97 21.25L2.86 19.14L10.27 11.74L8.5 9.96L7.78 10.66L6.33 9.25V12.11L5.63 12.81L2.11 9.25L2.81 8.55H5.62L4.22 7.14L7.78 3.58C8.95 2.41 10.83 2.41 12 3.58L9.89 5.74L11.3 7.14L10.59 7.85L12.38 9.63L14.2 7.75C14.06 7.42 14 7 14 6.63C14 4.66 15.56 3.11 17.5 3.11C18.09 3.11 18.61 3.25 19.08 3.53L16.41 6.2L17.91 7.7L20.58 5.03C20.86 5.5 21 6 21 6.63C21 8.55 19.45 10.1 17.5 10.1Z" />
    </SvgIcon>
  );
}


const useStyles = makeStyles((theme) => ({
  deepOrangeAvatar: {
    backgroundColor: deepOrange[700],
    width: theme.spacing(18),
    height: theme.spacing(18),
  },
  avatarIcon: {
    width: theme.spacing(12),
    height: theme.spacing(12),
    color: '#FFF',
  },
  actionButton: {
    color: theme.palette.getContrastText(deepOrange[800]),
    backgroundColor: deepOrange[800],
    '&:hover': {
      backgroundColor: deepOrange[700],
    },
    borderRadius: 3,
  },
  margin: {
    marginBottom: 200
  }
}));


export default function LandingPage() {
  const { userData } = useContext(UserContext);
  const classes = useStyles();

  return (
    <div className={classes.margin}>
      <header class="masthead">
        <Container maxWidth="lg">
          <div class="intro-text">
            <div class="intro-lead-in">¡Bienvenidos a Qoper!</div>
            <div class="intro-heading text-uppercase">Predecimos, Prevenimos y Corregimos</div>
            {
              userData.user && userData.user.userType === 1 ? (
                <Link to="/profile" style={{ textDecoration: 'none' }}>
                  <Button variant="contained" color="primary" size="large" className={classes.actionButton} disableElevation>
                    <Box p={1} fontWeight="fontWeightBold">
                      <Typography component="div" variant="h6" color="initial">
                        <Box fontWeight={500}>
                          REALIZAR TRABAJOS
                  </Box>
                      </Typography>
                    </Box>
                  </Button>
                </Link>
              ) : userData.user && userData.user.userType === 2 ? (

                <Link to="/newJob" style={{ textDecoration: 'none' }}>
                  <Button variant="contained" color="primary" size="large" className={classes.actionButton} disableElevation>
                    <Box p={1} fontWeight="fontWeightBold">
                      <Typography component="div" variant="h6" color="initial">
                        <Box fontWeight={500}>
                          CONTRATAR SERVICIOS
                  </Box>
                      </Typography>
                    </Box>
                  </Button>
                </Link>
              ) : (

                    <Link to="/login" style={{ textDecoration: 'none' }}>
                      <Button variant="contained" color="primary" size="large" className={classes.actionButton} disableElevation>
                        <Box p={1} fontWeight="fontWeightBold">
                          <Typography component="div" variant="h6" color="initial">
                            <Box fontWeight={500}>
                              CONTRATAR SERVICIOS
                  </Box>
                          </Typography>
                        </Box>
                      </Button>
                    </Link>
                  )
            }
          </div>
        </Container>
      </header>

      <Container component="main" maxWidth="xl">
        <Grid container
          direction="row"
          justify="center"
          alignItems="center"
        >
          <Grid item xs={12}>
            <Box m={5} my={9} textAlign="center">
              <Box>
                <Typography variant="h4" className="title">
                  BENEFICIOS
                </Typography>
              </Box>
              <Box fontStyle="oblique" mt={1}>
                <Typography variant="body" style={{ 'color': '#6c757d' }} className="section-subheading">
                  ¿Porqué pagar más por menos cuando puedes pagar por lo que te mereces?
                </Typography>
              </Box>
            </Box>
          </Grid>

          {/* Icono ahorrar - Piggy Bank  */}
          <Grid
            container
            xs={12}
            sm={2}
            direction="column"
            justify="center"
            alignItems="center"
          >
            <Box mt={2}>
              <Grid item>
                <Avatar className={classes.deepOrangeAvatar}>
                  <SaveIcon className={classes.avatarIcon} />
                </Avatar>
              </Grid>
            </Box>
            <Typography variant="h5" className="promotionTitle">
              <Box fontWeight={700} mt={0.5} mb={2}>
                ¡Ahorra!
              </Box>
            </Typography>
            <Typography variant="body" style={{ 'color': '#6c757d' }}>
              <Box m={1} textAlign="center" letterSpacing={2}>
                A diferencia de otros servicios, Qoper solo cobra el costo del trabajo. Con ello no tendrás que preocuparte por costos adicionales por parte del trabajador.
              </Box>
            </Typography>
          </Grid>

          {/* Icono ahorrar - Piggy Bank  */}
          <Grid
            container
            xs={12}
            sm={2}
            direction="column"
            justify="center"
            alignItems="center"
          >
            <Box mt={2}>
              <Grid item>
                <Avatar className={classes.deepOrangeAvatar}>
                  <ToolsIcon className={classes.avatarIcon} />
                </Avatar>
              </Grid>
            </Box>
            <Typography variant="h5" className="promotionTitle">
              <Box fontWeight={700} mt={0.5} mb={2}>
                Servicio de calidad
              </Box>
            </Typography>
            <Typography variant="body" style={{ 'color': '#6c757d' }}>
              <Box m={1} textAlign="center" letterSpacing={2}>
                Conseguirás un trabajo bien hecho y de calidad sin tener que pagar extra, y siempre cuidamos de tu seguridad y la de nuestros trabajadores.
              </Box>
            </Typography>
          </Grid>

          {/* Icono ahorrar - Piggy Bank  */}
          <Grid
            container
            xs={12}
            sm={2}
            direction="column"
            justify="center"
            alignItems="center"
          >
            <Box mt={2}>
              <Grid item>
                <Avatar className={classes.deepOrangeAvatar}>
                  <WorkerIcon className={classes.avatarIcon} />
                </Avatar>
              </Grid>
            </Box>
            <Typography variant="h5" className="promotionTitle">
              <Box fontWeight={700} mt={0.5} mb={2}>
                Profesionales
              </Box>
            </Typography>
            <Typography variant="body" style={{ 'color': '#6c757d' }}>
              <Box m={1} textAlign="center" letterSpacing={2}>
                Seleccionamos nuestros trabajadores por medio de numerosas pruebas y capacitaciones para que a tu hogar llegue gente capacitada en la que puedas confiar.
              </Box>
            </Typography>
          </Grid>

          {/* Icono ahorrar - Piggy Bank  */}
          <Grid
            container
            xs={12}
            sm={2}
            direction="column"
            justify="center"
            alignItems="center"
          >
            <Box mt={2}>
              <Grid item>
                <Avatar className={classes.deepOrangeAvatar}>
                  <WarrantyIcon className={classes.avatarIcon} />
                </Avatar>
              </Grid>
            </Box>
            <Typography variant="h5" className="promotionTitle">
              <Box fontWeight={700} mt={0.5} mb={2}>
                Garantía
              </Box>
            </Typography>
            <Typography variant="body" style={{ 'color': '#6c757d' }}>
              <Box m={1} textAlign="center" letterSpacing={2}>
                Si por alguna extraña razón el servicio contratrado no saliese como esperaba puede solicitar que el trabajo se haga como corresponde por el mismo trabajador u otro.
              </Box>
            </Typography>
          </Grid>
        </Grid>
      </Container>

    </div>

  );
}