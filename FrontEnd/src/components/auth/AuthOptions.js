import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import UserContext from '../../context/UserContext';
import { Link, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  leftSpacing: {
    marginLeft: theme.spacing(2),
  }
}));

export default function AuthOptions() {

  const classes = useStyles();

  const { userData, setUserData } = useContext(UserContext);

  const history = useHistory();

  const register = () => history.push('/register');
  const login = () => history.push('/login');
  const perfil = () => history.push('/profile');
  const newJob = () => history.push('/newJob')
  const logout = () => {
    setUserData({
      token: undefined,
      user: undefined
    });
    localStorage.setItem("x-access-token", "");
    window.location.href = '/';
  }


  const perfilOption = <Link component="button" variant="body" aria-label="PedirServicio" color="inherit" className={classes.leftSpacing} onClick={perfil}> Perfil </Link>
  const newJobOption = <Link component="button" variant="body" aria-label="PedirServicio" color="inherit" className={classes.leftSpacing} onClick={newJob}> Pedir trabajo</Link>
  const logoutOption = <Link component="button" variant="body" aria-label="PedirServicio" color="inherit" className={classes.leftSpacing} onClick={logout}> Log out </Link>


  function userLoggedMenu() {
    if (userData.user.userType === 2) {
      return (
        <Typography>

          {newJobOption}
          {perfilOption}
          {logoutOption}

        </Typography>
      )
    } else {
      return (
        <Typography>

          {perfilOption}
          {logoutOption}
        
        </Typography>
      )
    }
  }

  function userLoggedOutMenu() {
    return (
      <>
      <Typography>
          <Link component="button" variant="body" aria-label="PedirServicio" color="inherit" className={classes.leftSpacing} onClick={login}>
            Iniciar Sesión
          </Link>
          <Link component="button" variant="body" aria-label="PedirServicio" color="inherit" className={classes.leftSpacing} onClick={register}>
            Registro
          </Link>
          <Link component="button" variant="body" aria-label="PedirServicio" color="inherit" className={classes.leftSpacing}>
            Contacto
          </Link>
      </Typography>
    </>
    )
  }

  return (
    <div>
      {
        userData.user ? (
          userLoggedMenu()
        ) : (
          userLoggedOutMenu()
        )
      }
    </div>
  )
}
