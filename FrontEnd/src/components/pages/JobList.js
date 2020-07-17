//Esta es la pagina que muestra los trabajos para los proveedores, para que la acepten o la ignoren.
//El funcionamiento boton para aceptar viene proximamente jajajaja.

import React, { useContext, useState, useEffect } from 'react'
import UserContext from '../../context/UserContext'


import Axios from 'axios';

export default function JobList() {

  
const { userData} = useContext(UserContext);
let token = localStorage.getItem('x-access-token');


const [jobData, setJobData] = useState({
    job: []
})

useEffect(()=> {
    
    getJob()
    
}, [])

const getJob = async () => {
    
        const works = await Axios.get('http://localhost:4000/api/jobs',
        {headers: {'x-access-token': token}}
        );

        setJobData({
            job: works.data
        })
    
}

//Estructura del trabajo que se muestra en pantalla
const jobListing = () => {
    const job = jobData.job
    const listingJobs = job.map(jobs => (
        <div key={jobs._id}>
                
                <p>
                 <h6>Titulo: {jobs.titulo}</h6>
                 <h6>Detalles: {jobs.descripcion}</h6>
                 <h6>Ubicacion: {jobs.ubicacion}</h6> 
                 <h6>Tipo: {jobs.tipoMantenimiento}</h6> 
                 <h6>Telefono: {jobs.telefono}</h6> 
                 <h6>Fecha: {jobs.fecha}</h6> 
                 <h6>Solicitante: {jobs.solicitante}</h6>
                </p>
                
            
        <button>
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
             
                <>
                {jobListing()}
                </>

            }


    </div>

)

}
