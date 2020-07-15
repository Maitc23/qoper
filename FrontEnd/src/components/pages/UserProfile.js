import React, { useContext, useState, useEffect } from 'react'
import UserContext from '../../context/UserContext'
import ErrorMessage from '../misc/ErrorMessage';

import { Link } from 'react-router-dom';
import Axios from 'axios';

export default function UserProfile() {


  const { userData } = useContext(UserContext);
  let token = localStorage.getItem('x-access-token');
  const [error, setError] = useState();

  const [jobsData, setJobData] = useState({
    jobs: []
  })

  const getJob = async () => {
    try {
      const works = await Axios.get('http://localhost:4000/api/job',
        { headers: { 'x-access-token': token } }
      );

      setJobData({
        jobs: works.data
      })
    } catch (err) {
      err.response.data.message && setError(err.response.data.message);
    }

  }

  useEffect(() => {
   
    getJob()
    // eslint-disable-next-line
  },  [])




  const jobsList = () => {
    const jobs = jobsData.jobs
    const listJobs = jobs.map(job => (
      <div key={job._id}>
        <p > {job.titulo} {job.ubicacion} {job.tipoMantenimiento} {job.telefono}</p>
        
        <button className="btn btn-danger" onClick={() => deleteJob(job._id)}>
          Delete
          </button>
      </div>
    ))
    return (
<<<<<<< HEAD
        <div>
        {
          userData.user && userData.user.userType === 1 ?  (
=======
      <>
        {listJobs}
      </>
    )
  }

  const deleteJob = async (id) => {
    try {
      await Axios.delete('http://localhost:4000/api/job/' + id,
        { headers: { 'x-access-token': token } }
      )
    getJob()
    
    } catch (err) {
      err.response.data.message && setError(err.response.data.message);
    }
  }


  return (

    <div className="page">

      {
        userData.user && userData.user.userType === 1 ? (
>>>>>>> master
          <h1>Welcome {userData.user.nombre} Proveedor</h1>

        ) : userData.user && userData.user.userType === 2 ? (
          <>

            <h1>Welcome {userData.user.nombre} Cliente</h1>

            {error ? (
              <ErrorMessage message={error} />
            ) : (
                <>
                  {jobsList()}
                </>
              )}

          </>

        ) : (
              <>
                <h2>You are not logged in</h2>
                <Link to="/login">Log in</Link>
              </>
            )}
    </div>
  )
}
