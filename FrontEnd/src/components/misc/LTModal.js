import React, { useContext, useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import ErrorMessage from '../misc/ErrorMessage';
import Axios from 'axios';
import UserContext from '../../context/UserContext'
import SuccessfulNotice from '../misc/SuccessfulNotice';

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function SimpleModal(workId) {

  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const { userData } = useContext(UserContext)
  let token = localStorage.getItem('x-access-token');
  const [successful, setSuccessful] = useState();

  const [error, setError] = useState();
  const [jobData, setJobData] = useState({
    job: [],
    ubicacion: []
  });

  const job = jobData.job
  const ubicacion = jobData.ubicacion
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  const getJob = async () => {
    try {
      const job = await Axios.get('http://localhost:4000/api/job/' + workId.id,
        { headers: { 'x-access-token': token } }
      );

      setJobData({
        job: job.data,
        ubicacion: job.data.ubicacion
      });

    } catch (err) {
      err.response.data.message && setError(err.response.data.message);
    }
  }

  const acceptJob = async (id) => {
    try {
        let token = localStorage.getItem('x-access-token');
        const job = { 
            id: id
        }
        const res = await Axios.put('http://localhost:4000/api/acceptJob', 
            job, 
            { headers: { 'x-access-token': token }}
            
        );
        setSuccessful(res.data.message);
        window.location.replace('/jobList');
        
    } catch (err) {
        err.response.data.message && setError(err.response.data.message);
    }
}


  useEffect(() => {

    getJob()
    // eslint-disable-next-line
  }, [])


  const body = (
    
    <div style={modalStyle} className={classes.paper}>
      {successful && (
        <SuccessfulNotice message={successful} clearSuccessfulNotice={() => setSuccessful(undefined)} />
      )}
      <h2 id="simple-modal-title">{job.titulo}</h2>
      <p>
        fecha:
    {job.fecha}
      </p>
      <p>
        {job.tipoMantenimiento}
      </p>
      <p>
        {job.telefono}
      </p>
      <p>
        {job.nombreSupervisor}
      </p>
      <p>
        ubicacion:
        {ubicacion.ciudad}
      </p>
      <p id="simple-modal-description">
        descripcion:
      {job.descripcion}
      </p>
      {
        userData.user && userData.user.userType === 1 ? ( 
          <button onClick={() => acceptJob(job._id)}>
            Aceptar
          </button>

        ) : ( 
            <>
            </>
        )
      }
    </div>
  )

  
  return (
    <div>
      {error ? (
        <ErrorMessage message={error} />
      ) : (
          <>
            <button type="button" onClick={handleOpen}>
              Open Modal
            </button>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="simple-modal-title"
              aria-describedby="simple-modal-description"
            >
              {body}
            </Modal>
          </>
        )
      }
    </div>
  );
}