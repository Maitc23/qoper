import React, { useContext } from 'react'
import { useHistory, Link } from 'react-router-dom'
import UserContext from '../../context/UserContext'

export default function AuthOptions() {

    const { userData, setUserData } = useContext(UserContext);

    const history = useHistory();

    const register = () => history.push('/register');
    const login = () => history.push('/login');
    const logout = () => {
        setUserData({
            token: undefined,
            user: undefined
        });
        localStorage.setItem("auth-token", "");
    }

    return (
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
                {

                    userData.user ? (
                        <li className="nav-item">
                            <Link className="nav-link" onClick={logout}>Log out</Link>
                        </li>
                    ) : (
                            <>
                                <li className="nav-item">
                                    <Link className="nav-link" onClick={login}> Login</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" onClick={register}> Registro</Link>
                                </li>
                            </>
                        )};
            </ul>
        </div>
    )
}
