import React, { useState, useContext } from 'react'
import { useHistory } from "react-router-dom"
import UserContext from '../../context/UserContext'
import Axios from 'axios'
import ErrorNotice from '../misc/ErrorNotice';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
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
        Qoper
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
    marginTop: theme.spacing(1),
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


export default function Login() {

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState();

  const { setUserData } = useContext(UserContext);
  const history = useHistory();

  const submit = async (e) => {
    e.preventDefault();
    try {
      const loginUser = {
        email,
        password
      };

      const loginRes = await Axios.post(
        'http://localhost:4000/api/login',
        loginUser
      );

      setUserData({
        token: loginRes.data.token,
        user: loginRes.data.user
      });
      localStorage.setItem('x-access-token', loginRes.data.token);
      history.push('/profile');

    } catch (err) {
      err.response.data.message && setError(err.response.data.message);

    }

  }

};

const [values, setValues] = React.useState({
  password: '',
  showPassword: false,
});

const handleClickShowPassword = () => {
  setValues({ ...values, showPassword: !values.showPassword });
};

const handleMouseDownPassword = (event) => {
  event.preventDefault();
};

const classes = useStyles();

return (
  <div>
    {error && (
      <ErrorNotice message={error} clearError={() => setError(undefined)} />
    )}
    <form onSubmit={submit}>

      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <img className={classes.avatar} src={logoImg} alt="Logo Qoper" />
          <Typography component="h1" variant="h5">
            Iniciar sesión
            </Typography>
          <form className={classes.form} noValidate>
            <TextField
              className={classes.inputDesign}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="login-email"
              label="Correo Electrónico"
              name="email"
              autoComplete="email"
              color="primary"
              onChange={(e) => setEmail(e.target.value)}
              autoFocus
            />
            <TextField
              className={classes.inputDesign}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Contraseña"
              type={values.showPassword ? "text" : "password"}
              id="login-password"
              autoComplete="current-password"
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
              onChange={(e) => setPassword(e.target.value)}
            />
            <FormControlLabel
              control={<IndigoCheckbox value="remember" color="primary" />}
              label="Recuérdame"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit + ' ' + classes.indigoButton}
            >
              Iniciar sesión
          </Button>
            <Grid container>
              <Grid item xs>
                <Link to="/" variant="body2">
                  ¿Olvidó su contraseña?
                    </Link>
              </Grid>
              <Grid item>
                <Link to="/register" variant="body2">
                  ¿No tiene una cuenta? Regístrese
                    </Link>
              </Grid>
            </Grid>
          </form>
        </div>
        <Box mt={8}>
          <Copyright />
        </Box>
      </Container>

    </form>
  </div>
)
}