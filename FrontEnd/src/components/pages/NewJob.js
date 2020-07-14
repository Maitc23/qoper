import indigo from '@material-ui/core/colors/indigo'
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import InputAdornment from '@material-ui/core/InputAdornment';
import Typography from '@material-ui/core/Typography';

import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import { Link, useHistory } from 'react-router-dom';
import React, { useState, useContext } from 'react'
import ErrorNotice from '../misc/ErrorNotice';
import SuccessfulNotice from '../misc/SuccessfulNotice';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import Axios from 'axios';
import UserContext from '../../context/UserContext'


const useStyles = makeStyles((theme) => ({
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


export default function NewJob() {
  const classes = useStyles();
  const { userData } = useContext(UserContext);
  const history = useHistory();


  const [error, setError] = useState();
  const [successful, setSuccessful] = useState();
  const [titulo, setTitle] = useState();
  const [fecha, setDate] = useState(new Date());
  const [tipoMantenimiento, setTipoMantenimiento] = useState(0);
  const [ciudad, setCiudad] = useState();
  const [provincia, setProvincia] = useState();
  const [corregimiento, setCorregimiento] = useState();
  const [calle, setCalle] = useState();
  const [residencia, setResidencia] = useState();
  const [piso, setPiso] = useState();
  const [datosExtra, setDatosExtra] = useState();
  const [descripcion, setDescripcion] = useState();
  const [telefono, setTelefono] = useState();
  const [correo, setCorreo] = useState();
  const [nombreSupervisor, setNombreSupervisor] = useState();
  const [requisitosExtra, setRequisitosExtra] = useState();


  const selectTipoMantenimiento = [
    { id: 1, value: null, name: 'Seleciona tu tipo de mantenimiento' },
    { id: 2, value: 'Electricidad', name: 'Electricidad' },
    { id: 3, value: 'Refrigeracion', name: 'Refrigeracion' },
    { id: 4, value: 'Plomeria', name: 'Plomeria' },
    { id: 5, value: 'Linea Blanca', name: 'Linea Blanca' },
    { id: 6, value: 'Industrial', name: 'Industrial' },
    { id: 7, value: 'Otro', name: 'Otro' }
  ];

  const submit = async (e) => {
    e.preventDefault();
    try {
      let token = localStorage.getItem('x-access-token');

      const newJob = {
        titulo,
        fecha,
        tipoMantenimiento,
        descripcion,
        telefono,
        ciudad,
        provincia,
        corregimiento,
        calle, 
        residencia, 
        piso, 
        datosExtra,
        correo,
        nombreSupervisor,
        requisitosExtra
        
      };

      const res = await Axios.post('http://localhost:4000/api/job',
        newJob,
        { headers: { 'x-access-token': token } }
      );

     
      history.push('/newJob');

      setSuccessful(res.data.message);

    } catch (err) {
      err.response.data.message && setError(err.response.data.message);
    }
  }

  return (
    <Container component="main" maxWidth="md">
    {userData.user ? (
      <>
      {error && (
        <ErrorNotice message={error} clearError={() => setError(undefined)} />
      )}
      {successful && (
        <SuccessfulNotice message={successful} clearSuccessfulNotice={() => setSuccessful(undefined)} />
      )}
      <Box mb={3}>
        <Grid container>
          <Grid item xs={12}>
            <Typography variant="h4">
              Solicitud de trabajo
          </Typography>
          </Grid>
        </Grid>
      </Box>

      <form noValidate autoComplete="off" onSubmit={submit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="body1" color="initial">
              Datos del mantenimiento
            </Typography>
            <Box mt={-2} mb={-1} style={{ 'backgroundColor': '#000' }}>
              <hr />
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              className={classes.diseño}
              id="titulo"
              label="Nombre de tu Solicitud"
              type="text"
              variant="outlined"
              required
              fullWidth
              onChange={(e) => setTitle(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              className={classes.diseño}
              id="tipoMante"
              select
              label="Tipo de Mantenimiento"
              required
              fullWidth
              value={tipoMantenimiento}
              onChange={(e) => setTipoMantenimiento(e.target.value)}
              label="Tipo de Mantenimiento" variant="outlined"
              variant="outlined"
              SelectProps={{
                native: true,
              }}
            >
              {selectTipoMantenimiento.map(tipoMantenimiento => (
                <option key={tipoMantenimiento.id} value={tipoMantenimiento.value}>
                  {tipoMantenimiento.name}
                </option>
              ))}
            </TextField>
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              id="descripcion"
              label="Descripcion"
              type="text"
              fullWidth
              variant="outlined"
              multiline
              rows={4}
              onChange={(e) => setDescripcion(e.target.value)}
              required
            />
          </Grid>
          <label htmlFor="trabajo-fecha">Fecha del trabajo</label>
          <DatePicker
            id="trabajo-fecha"
            name="fecha"
            selected={fecha}
            onChange={date => setDate(date)}
          />


          <Grid item xs={12}>
            <Box mt={2}>
              <Typography variant="body1" color="initial">
                Dirección
              </Typography>
            </Box>
            <Box mt={-2} mb={-1} style={{ 'backgroundColor': '#000' }}>
              <hr />
            </Box>
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              id="ciudad"
              label="Ciudad"
              type="text"
              fullWidth
              variant="outlined"
              placeholder="Ciudad"
              onChange={(e) => setCiudad(e.target.value)}
              required
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              id="provincia"
              label="Provincia"
              type="text"
              fullWidth
              variant="outlined"
              placeholder="Provincia"
              onChange={(e) => setProvincia(e.target.value)}
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="correigimiento_zona"
              label="Corregimiento / Zona"
              type="text"
              fullWidth
              variant="outlined"
              placeholder="Corregimiento / Zona"
              onChange={(e) => setCorregimiento(e.target.value)}

              required
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              id="calle"
              label="Calle"
              type="text"
              fullWidth
              variant="outlined"
              placeholder="Calle"
              onChange={(e) => setCalle(e.target.value)}
              required
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              id="edificio_casa"
              label="Edificio / Casa"
              type="text"
              fullWidth
              variant="outlined"
              placeholder="Edificio / Casa"
              onChange={(e) => setResidencia(e.target.value)}

              required
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              id="piso_dept"
              label="Piso / Dept."
              type="text"
              fullWidth
              variant="outlined"
              placeholder="Piso / Dept."
              onChange={(e) => setPiso(e.target.value)}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              id="direccion_extra"
              label="Indicaciones adicionales"
              type="text"
              fullWidth
              variant="outlined"
              placeholder="La casa tiene verjas negras y un picanto rojo aparcado dentro"
              multiline
              rows={2}
              onChange={(e) => setDatosExtra(e.target.value)}
            />
          </Grid>

          <Grid item xs={12}>
            <Box mt={2}>
              <Typography variant="body1" color="initial">
                Datos del representante
          </Typography>
            </Box>
            <Box mt={-2} mb={-1} style={{ 'backgroundColor': '#000' }}>
              <hr />
            </Box>
          </Grid>

          <Grid item xs={12} sm={4}>
            <TextField
              className={classes.diseño}
              id="encargado"
              label="Nombre del supervisor"
              type="text"
              variant="outlined"
              fullWidth
              onChange={(e) => setNombreSupervisor(e.target.value)}

              required
            />
          </Grid>

          <Grid item xs={12} sm={4}>
            <TextField
              className={classes.diseño}
              id="Teléfono"
              label="Teléfono de contacto"
              placeholder="0000-0000"
              type="number"
              variant="outlined"
              fullWidth
              onChange={(e) => setTelefono(e.target.value)}
              InputProps={{
                startAdornment: <InputAdornment position="start">507 - </InputAdornment>,
              }}
              required
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              className={classes.diseño}
              id="correo"
              label="Correo Electronico"
              placeholder="example@email.com"
              type="email"
              variant="outlined"
              fullWidth
              onChange={(e) => setCorreo(e.target.value)}

            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="requisitos"
              label="Requisitos Extras"
              type="text"
              fullWidth
              variant="outlined"
              multiline
              rows={4}
              onChange={(e) => setRequisitosExtra(e.target.value)}
            />
          </Grid>

            <Button
              variant="contained"
              color="primary"
              className={classes.diseño}
              style={{ 'marginTop': '20px' }}
              type="submit"
            >
              Solicitar trabajo
          </Button>
        </Grid>
      </form>
      </>
    ) : (
      <>
      <h2>You are not logged in</h2>
      <Link to="/login">Log in</Link>
    </>
    )}
    </Container>
  )
}
