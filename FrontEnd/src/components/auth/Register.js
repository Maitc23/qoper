import React , {useState, useContext} from 'react'
import {useHistory} from "react-router-dom"
import UserContext from '../../context/UserContext'
import Axios from 'axios'
import ErrorNotice from '../misc/ErrorNotice';

export default function Register() {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [passwordCheck, setPasswordCheck] = useState();
    const [nombre, setName ] = useState();
    const [apellido, setApellido] = useState();
    const [error, setError] = useState();

    const {setUserData} = useContext(UserContext);
    const history = useHistory();

    const submit = async  (e) => {
        e.preventDefault();
        try{
        const newUser = {
            email,
            password,
            passwordCheck,
            nombre,
            apellido
        };
        await Axios.post(
            'http://localhost:4000/api/register',
            newUser
        );

        const loginRes = await Axios.post(
            'http://localhost:4000/api/login',{
            email, 
            password
        });
        setUserData({
            token: loginRes.data.token,
            user: loginRes.data.user
        });
        
        localStorage.setItem('auth-token', loginRes.data.token);
        history.push("/profile");
    }catch(err) {
        err.response.data.message && setError(err.response.data.message);   
    }
}

    return (
        <div>
            <h2>Register</h2>
            {error && (
                <ErrorNotice message={error} clearError={() => setError(undefined)} />
                )}
            <form onSubmit={submit}>

                <label htmlFor="register-email">Email</label>
                <input 
                id="register-email"
                type="email"
                onChange= {(e) => setEmail(e.target.value)}
                />
                
                <label htmlFor="register-password">Password</label>
                <input 
                id="register-password" 
                type="password"
                onChange= {(e) => setPassword(e.target.value)}
                />
                <input 
                id="register-password"
                type="password"
                onChange= {(e) => setPasswordCheck(e.target.value)}
                placeholder="Verify password"/>
                
                <label htmlFor="register-name">Name</label>
                <input 
                id="register-name" 
                type="text"
                onChange= {(e) => setName(e.target.value)}
                />
                
                <label htmlFor="register-apellido">Apellido</label>
                <input 
                id="register-apellido" 
                onChange= {(e) => setApellido(e.target.value)}
                type="text"/>

                <input type="submit" value="Register"/>

            </form>
        </div>
    )
}