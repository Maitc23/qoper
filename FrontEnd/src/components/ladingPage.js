import React, {useEffect, useContext} from 'react';
import {useHistory} from 'react-router-dom'
import UserContext from '../context/UserContenxt'



export default function LandingPage() {
    const {userData} = useContext(UserContext);
    const history = useHistory();

    useEffect(() => {
        if(!userData.user) history.push('/login')
    });
        return (
            <p>PAGINA PRINCIPAL</p>
        );
}