import React, { useContext, useState, useEffect } from 'react'
import ErrorMessage from '../misc/ErrorMessage';
import UserContext from '../../context/UserContext'

import { Link } from 'react-router-dom';

import Axios from 'axios';

export default function JobList() {


    const { userData } = useContext(UserContext);
    let token = localStorage.getItem('x-access-token');
    const [error, setError] = useState();

    const [jobData, setJobData] = useState({
        job: []
    })

    useEffect(() => {

        getJob()
        // eslint-disable-next-line
    }, [])

    const acceptJob = async (id) => {
        try {
            await Axios.put('http://localhost:4000/api/acceptJob/' + id,
                { headers: { 'x-access-token': token } }
            )
      
        } catch (err) {
            err.response.data.message && setError(err.response.data.message);
        }

    }

    const getJob = async () => {
        try {
            const works = await Axios.get('http://localhost:4000/api/jobs',
                { headers: { 'x-access-token': token } }
            );

            setJobData({
                job: works.data
            })
        } catch (err) {
            err.response.data.message && setError(err.response.data.message);
        }
    }

    //Estructura del trabajo que se muestra en pantalla
    const jobListing = () => {
        const job = jobData.job
        const listingJobs = job.map(jobs => (
            <div key={jobs._id}>

                <p>
                    <h6>Titulo: {jobs.titulo}</h6>
                    <h6>Detalles: {jobs.descripcion}</h6>
                    <h6>Tipo: {jobs.tipoMantenimiento}</h6>
                    <h6>Telefono: {jobs.telefono}</h6>
                    <h6>Fecha: {jobs.fecha}</h6>
                    <h6>Solicitante: {jobs.solicitante}</h6>
                </p>


                <button onClick={() => acceptJob(jobs._id)}>
                    Aceptar
        </button>

                <p></p>

            </div>

        ))
        return (
            <>
                {listingJobs}
            </>
        )

    }


    //Los trabajos siendo listados en pantalla
    return (

        <div className="page">
            <h4>Trabajos Disponibles</h4>
            {

                userData.user ? (
                    userData.user.userType === 1 ? (
                        <>
                            {error ? (
                                <ErrorMessage message={error} />
                            ) : (
                                    <>
                                        {jobListing()}
                                    </>
                                )
                            }
                        </>
                    ) : (
                            <>
                                <h2>You are not authorized</h2>
                                <Link to="/profile">Profile</Link>
                            </>
                        )
                ) : (
                        <>
                            <h2>You are not logged in</h2>
                            <Link to="/login">Log in</Link>
                        </>
                    )
            }
        </div>
    )

}