import React, { useContext, useState, useEffect } from 'react'
import ErrorMessage from '../../misc/ErrorMessage';
import UserContext from '../../../context/UserContext'

import { Link } from 'react-router-dom';
import LTModal from '../../misc/LTModal';
import Axios from 'axios';
import { CardActions } from '@material-ui/core';

export default function JobList() {


    const { userData } = useContext(UserContext);
    const [error, setError] = useState();
    const [jobData, setJobData] = useState({
        jobs: []
    })

    useEffect(() => {

        getJob()
        // eslint-disable-next-line
    }, [])



    const getJob = async () => {
        try {
            const token = localStorage.getItem('x-access-token');

            const works = await Axios.get('http://localhost:4000/api/jobs',
                { headers: { "x-access-token": token } }
            );

            setJobData({
                jobs: works.data
            })

       
        } catch (err) {
            err.response.data.message && setError(err.response.data.message);
        }
    }


      //Estructura del trabajo que se muestra en pantalla
      const jobListing = () => {
        const jobs = jobData.jobs
        const listingJobs = jobs.map(job => (
            <div key={job._id}>
                <div>

                    <h6>Titulo: {job.titulo}</h6>
                    <h6>Detalles: {job.descripcion}</h6>
                    <h6>Tipo: {job.tipoMantenimiento}</h6>
                    <h6>Telefono: {job.telefono}</h6>
                    <h6>Fecha: {job.fecha}</h6>
                    <h6>Solicitante: {job.solicitante}</h6>

                </div>
                <CardActions>
                    <LTModal id={job._id} />
                </CardActions>
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
                                {
                                        jobListing()
                                }
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
