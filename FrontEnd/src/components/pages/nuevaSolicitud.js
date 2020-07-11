import indigo from '@material-ui/core/colors/indigo'
import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Autocomplete from '@material-ui/lab/Autocomplete';
import InputAdornment from '@material-ui/core/InputAdornment';
import Checkbox from '@material-ui/core/Checkbox';
import Typography from '@material-ui/core/Typography';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';


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


const opciones = [
  { title: 'Opcion 1' },
  { title: 'Opcion 2' },
];

export default function FormPropsTextFields() {
  const classes = useStyles();


  return (
    <Container component="main" maxWidth="md">
      <Box mb={3}>
        <Grid container>
          <Grid item xs={12}>
            <Typography variant="h4">
              Solicitud de trabajo
          </Typography>
          </Grid>
        </Grid>
      </Box>
      <form noValidate autoComplete="off">
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="body1" color="initial">
              Datos del mantenimiento
            </Typography>
            <Box mt={-2} mb={-1} style={{ 'background-color': '#000' }}>
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
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <Autocomplete
              className={classes.diseño}
              id="tipoMante"
              options={opciones}
              getOptionLabel={(option) => option.title}
              renderInput={(params) => <TextField {...params}
                label="Tipo de Mantenimiento" variant="outlined"
                style={{ width: "100%", 'margin': '0' }} />
              }
              InputLabelProps={{
                shrink: true,
              }}
              required
            />
          </Grid>

          <Grid item xs={12} sm={10}>
            <TextField
              id="descripcion"
              label="Descripcion"
              type="text"
              fullWidth
              variant="outlined"
              multiline
              rows={4}
              required
            />
          </Grid>

          <Grid item xs={2}>
            <Button
              variant="contained"
              color="primary"
              className={classes.diseño}
              style={{'margin-top': '20px'}}
              startIcon={
              <CloudUploadIcon style={{ fontSize: 35 }} />}
              labelPlacement="end"
            >
              Subir foto
            </Button>
          </Grid>

          <Grid item xs={12}>
            <Box mt={2}>
              <Typography variant="body1" color="initial">
                Dirección
            </Typography>
            </Box>
            <Box mt={-2} mb={-1} style={{ 'background-color': '#000' }}>
              <hr />
            </Box>
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              id="provincia"
              label="Provincia"
              type="text"
              fullWidth
              variant="outlined"
              placeholder="Provincia"
              required
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              id="ciudad"
              label="Ciudad"
              type="text"
              fullWidth
              variant="outlined"
              placeholder="Ciudad"
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
            />
          </Grid>

          <Grid item xs={12}>
            <Box mt={2}>
              <Typography variant="body1" color="initial">
                Datos del representante
            </Typography>
            </Box>
            <Box mt={-2} mb={-1} style={{ 'background-color': '#000' }}>
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
              required
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
            />
          </Grid>

          <Grid item xs={6}>
            <FormControl component="fieldset">
              <FormGroup aria-label="position" row>
                <FormControlLabel
                  className={classes.diseño}
                  id="reqCotizacion"
                  label="Requiere cotización por parte de Qoper"
                  control={<Checkbox color="primary" />}
                  labelPlacement="end"
                />
              </FormGroup>
            </FormControl>
          </Grid>

        </Grid>
      </form>
    </Container >
  );
}