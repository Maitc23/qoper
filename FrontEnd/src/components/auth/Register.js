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
    const [userType, setUserType] = useState(0);
    const [apellido, setApellido] = useState();
    const [error, setError] = useState();
    
    const {setUserData} = useContext(UserContext);
    const history = useHistory();

    const selectedUserType = [
        {id: 1, value: null, name: 'Seleeciona tu tipo de usuario'},
        {id: 2, value: 1, name:'Proveedor'},
        {id: 3, value: 2, name: 'Cliente'}
    ];


    const submit = async  (e) => {
        e.preventDefault();
        try{
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
            'http://localhost:4000/api/login',{
            email, 
            password
        });
        setUserData({
            token: loginRes.data.token,
            user: loginRes.data.user
        });
        
        localStorage.setItem('x-access-token', loginRes.data.token);
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
                name="email"
                onChange= {(e) => setEmail(e.target.value)}
                />
                
                <label htmlFor="register-password">Password</label>
                <input 
                id="register-password"
                name="password"
                type="password"
                onChange= {(e) => setPassword(e.target.value)}
                />
                <input 
                id="register-password"
                name="passwordCheck"
                type="password"
                onChange= {(e) => setPasswordCheck(e.target.value)}
                placeholder="Verify password"/>
                
                <label htmlFor="register-name">Name</label>
                <input 
                id="register-name"
                name="name"
                type="text"
                onChange= {(e) => setName(e.target.value)}
                />
                
                <label htmlFor="register-apellido">Apellido</label>
                <input 
                id="register-apellido"
                name="apellido"
                onChange= {(e) => setApellido(e.target.value)}
                type="text"/>
                
                <label htmlFor="register-userType">Tipo de usuario</label>
                <select
                id="register-userType"
                name="userTypeSelected"
                value={userType}
                onChange = {(e) => setUserType(Number(e.target.value))} 
                >
                    {selectedUserType.map(userType => (
                        <option key={userType.id} value={userType.value}>
                            {userType.name}
                        </option>
                    ))}    
                </select>

                <input type="submit" value="Register"/>

            </form>
        </div>
    )
}