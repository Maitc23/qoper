import React, { useState, useContext } from 'react'
import { useHistory } from "react-router-dom"
import UserContext from '../../context/UserContext'
import Axios from 'axios'
import ErrorNotice from '../misc/ErrorNotice';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import logoImg from '../../images/logo.png';
import indigo from '@material-ui/core/colors/indigo';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';

const IndigoCheckbox = withStyles({
  root: {
    color: indigo[800],
    '&$checked': {
      color: indigo[800],
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" to="/">
        Qoper S.A.
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
};

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  avatar: {
    width: theme.spacing(7),
    height: theme.spacing(8),
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  indigoButton: {
    backgroundColor: indigo[700],
    color: '#FFF',
    '&:hover': {
      backgroundColor: indigo[800],
      color: '#FFF'
    },
  },
  inputDesign: {
    '& label.Mui-focused': {
      color: indigo[800],
    },
    '& label.Mui-focused:after': {
      color: indigo[800],
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

export default function Register() {
  const classes = useStyles();

  const [values, setValues] = React.useState({
    password: '',
    showPassword: false,
    password2: '',
    showPassword2: false,
  });

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleClickShowPassword2 = () => {
    setValues({ ...values, showPassword2: !values.showPassword2 });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleMouseDownPassword2 = (event) => {
    event.preventDefault();
  };

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [passwordCheck, setPasswordCheck] = useState();
  const [nombre, setName] = useState();
  const [userType, setUserType] = useState(1);
  const [apellido, setApellido] = useState();
  const [error, setError] = useState();

  const { setUserData } = useContext(UserContext);
  const history = useHistory();

  const selectedUserType = [
    { id: 1, value: null, name: 'Selecciona tu tipo de usuario' },
    { id: 2, value: 1, name: 'Proveedor' },
    { id: 3, value: 2, name: 'Cliente' }
  ];

  const submit = async (e) => {
    e.preventDefault();
    try {
      const newUser = {
        email,
        password,
        passwordCheck,
        nombre,
        apellido,
        userType
      };

      await Axios.post(
        'http://localhost:4000/api/register',
        newUser
      );

      const loginRes = await Axios.post(
        'http://localhost:4000/api/login', {
        email,
        password
      });
      setUserData({
        token: loginRes.data.token,
        user: loginRes.data.user
      });

      localStorage.setItem('x-access-token', loginRes.data.token);
      history.push("/profile");
    } catch (err) {
      err.response.data.message && setError(err.response.data.message);
    }
  }

  return (
    <div>
      <Container component="main" maxWidth="sm">
        <CssBaseline />
        <div className={classes.paper}>
          <img className={classes.avatar} src={logoImg} alt="Logo Qoper" />
          <Typography component="h1" variant="h5">
            Registro
            </Typography>

          {error && (
            <ErrorNotice message={error} clearError={() => setError(undefined)} />
          )}

          <form className={classes.form} onSubmit={submit} noValidate>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  className={classes.inputDesign}
                  autoComplete="fname"
                  name="firstName"
                  variant="outlined"
                  required
                  fullWidth
                  id="register-name"
                  label="Nombre"
                  autoFocus
                  onChange={(e) => setName(e.target.value)}

                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="register-apellido"
                  label="Apellido"
                  name="lastName"
                  autoComplete="lname"
                  onChange={(e) => setApellido(e.target.value)}
                  className={classes.inputDesign}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="register-email"
                  label="Correo Electrónico"
                  name="email"
                  autoComplete="email"
                  onChange={(e) => setEmail(e.target.value)}
                  className={classes.inputDesign}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="password"
                  label="Contraseña"
                  type={values.showPassword ? "text" : "password"}
                  id="register-password"
                  autoComplete="current-password"
                  onChange={(e) => setPassword(e.target.value)}
                  className={classes.inputDesign}
                  InputProps={{ // <-- This is where the toggle button is added.
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                        >
                          {values.showPassword ? <Visibility style={{ color: indigo[700] }} /> : <VisibilityOff />}
                        </IconButton>
                      </InputAdornment>
                    )
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="password2"
                  label="Verificar contraseña"
                  type={values.showPassword2 ? "text" : "password"}
                  id="password2"
                  autoComplete="current-password"
                  onChange={(e) => setPasswordCheck(e.target.value)}
                  className={classes.inputDesign}
                  InputProps={{ // <-- This is where the toggle button is added.
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password2 visibility"
                          onClick={handleClickShowPassword2}
                          onMouseDown={handleMouseDownPassword2}
                        >
                          {values.showPassword2 ? <Visibility style={{ color: indigo[700] }} /> : <VisibilityOff />}
                        </IconButton>
                      </InputAdornment>
                    )
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id='register-userType'
                  select
                  label="Tipo de usuario"
                  required
                  fullWidth
                  value={userType}
                  onChange={(e) => setUserType(Number(e.target.value))}
                  SelectProps={{
                    native: true,
                  }}
                  name='userTypeSelected'
                  className={classes.inputDesign}
                  helperText="Selecciona el tipo de usuario"
                  variant="outlined"
                >
                  {selectedUserType.map(userType => (
                    <option key={userType.id} value={userType.value}>
                      {userType.name}
                    </option>
                  ))}
                </TextField>
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<IndigoCheckbox value="allowExtraEmails" color="primary" />}
                  label="Acepto los Términos de Uso y Condiciones y la Política de Privacidad"
                />
              </Grid>
              {/* Fin del grid container */}
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit + ' ' + classes.indigoButton}
            >
              Registrarse
              </Button>
            <Grid container justify="flex-end">
              <Grid item>
                <Link to="/login" variant="body2">
                  ¿Ya tiene una cuenta? Inicie sesión
                  </Link>
              </Grid>
            </Grid>
          </form>
        </div>
        <Box mt={5}>
          <Copyright />
        </Box>
      </Container>
    </div >
  )
}