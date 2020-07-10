import indigo from '@material-ui/core/colors/indigo'
import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Autocomplete from '@material-ui/lab/Autocomplete';
import InputAdornment from '@material-ui/core/InputAdornment';
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button'
import CloudUploadIcon from '@material-ui/icons/CloudUpload';

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
    <form noValidate autoComplete="off">
      <div>
        <TextField
          className={classes.diseño}
          id="titulo"
          label="Nombre de tu Solicitud"
          type="text"
          variant="outlined"
          style={{ margin: 8 }}
          required
        />
        <TextField
          className={classes.diseño}
          id="fecha"
          label="Fecha"
          type="date"
          variant="outlined"
          defaultValue="2020-01-01"
          InputLabelProps={{
            shrink: true,
          }}
          style={{ margin: 8 }}
          required
        />
        <Autocomplete
          className={classes.diseño}
          id="tipoMante"
          options={opciones}
          getOptionLabel={(option) => option.title}
          renderInput={(params) => <TextField {...params}
            label="Tipo de Mantenimiento" variant="outlined" />}
          style={{ margin: 8 }}
          InputLabelProps={{
            shrink: true,
          }}
          required
        />
        <TextField
          id="lugar"
          label="Lugar a realizar el trabajo"
          type="text"
          fullWidth
          style={{ margin: 8 }}
          variant="outlined"
          margin="normal"
          placeholder="Ciudad/Corregimiento/Urbanizacion - Nombre de Edificio/Nombre de la Calle - Numero de piso/ Numero de casa - Numero de Apto."
          required
        />
        <TextField
          id="descripcion"
          label="Descripcion"
          type="text"
          fullWidth
          size="medium"
          style={{ margin: 8 }}
          variant="outlined"
          margin="normal"
          multiline
          rows={4}
          required
        />
        <TextField
          className={classes.diseño}
          id="encargado"
          label="Persona a Supervisar"
          type="text"
          variant="outlined"
          style={{ margin: 8 }}
          required
        />
        <TextField
          className={classes.diseño}
          id="Telefono"
          label="Telefono"
          placeholder="0000-0000"
          type="number"
          variant="outlined"
          style={{ margin: 8 }}
          InputProps={{
            startAdornment: <InputAdornment position="start">507 - </InputAdornment>,
          }}
          required
        />
        <TextField
          className={classes.diseño}
          id="correo"
          label="Correo Electronico"
          placeholder="example@email.com"
          type="email"
          variant="outlined"
          style={{ margin: 8 }}
          required
        />
        <TextField
          id="requisitos"
          label="Requisitos Extras"
          type="text"
          fullWidth
          size="medium"
          style={{ margin: 8 }}
          variant="outlined"
          margin="normal"
          multiline
          rows={4}
        />
        <FormControl component="fieldset">
          <FormGroup aria-label="position" row>
            <FormControlLabel
              className={classes.diseño}
              id="reqCotizacion"
              label="Requiere Cotizacion Personal"
              control={<Checkbox color="primary" />}
              labelPlacement="end"
              style={{ margin: 8 }}
            />
          </FormGroup>
        </FormControl>
        <Button
          variant="contained"
          color="primary"
          className={classes.diseño}
          startIcon={<CloudUploadIcon />}
          style={{ margin: 8 }}
          size="large"
          labelPlacement="end"
        >
          Enviar
      </Button>
      </div>
    </form>
  );
}