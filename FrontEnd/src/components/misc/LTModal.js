import React, { useContext, useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Box from '@material-ui/core/Box';
import ErrorMessage from '../misc/ErrorMessage';
import Axios from 'axios';
import UserContext from '../../context/UserContext'
import SuccessfulNotice from '../misc/SuccessfulNotice';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';


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

export default function SimpleModal(work) {

  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);
  const { userData } = useContext(UserContext)
  let token = localStorage.getItem('x-access-token');
  const [successful, setSuccessful] = useState();
  const [provData, setProveedor] = useState({
    prov: []
  })
  const [error, setError] = useState();
  const [precio, setPrecio] = useState();
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
      const job = await Axios.get('http://localhost:4000/api/job/' + work.id,
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

  const getProveedor = async () => {
    try {

      const prov = await Axios.get('http://localhost:4000/api/userProveedor/' + work.proveedor,
        { headers: { 'x-access-token': token } }
      );

      setProveedor({
        prov: prov.data
      });

      console.log(prov.data);
    } catch (err) {
      err.response.data.message && setError(err.response.data.message);

    }
  }

  const acceptJob = async (id, precio) => {
    try {
      const job = {
        id: id,
        precio
      }
      const res = await Axios.put('http://localhost:4000/api/acceptJob',
        job,
        { headers: { 'x-access-token': token } }

      );
      setSuccessful(res.data.message);
      window.location.replace('/cotizationJobs');

    } catch (err) {
      err.response.data.message && setError(err.response.data.message);
    }
  }

  const acceptCotization = async (id, precio) => {
    try {
      const job = {
        id: id,
        precio
      }
      const res = await Axios.put('http://localhost:4000/api/cotizationJobs',
        job,
        { headers: { 'x-access-token': token } }

      );
      setSuccessful(res.data.message);
      window.location.replace('/checkOut');


    } catch (err) {
      err.response.data.message && setError(err.response.data.message);
    }
  }

  useEffect(() => {

    if (work.state === 2) {
      getProveedor()
    }
    getJob()
    // eslint-disable-next-line
  }, [])

  const body = (
    <div style={modalStyle} className={classes.paper}>
      {successful && (
        <SuccessfulNotice message={successful} clearSuccessfulNotice={() => setSuccessful(undefined)} />
      )}
      <Box textOverflow="clip" overflow="hidden">
        <h2 id="simple-modal-title">{job.titulo}</h2>
      </Box>
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
          <Box component="div" whiteSpace="normal">
            {job.descripcion}
          </Box>
      </p>

      {
        userData.user && userData.user.userType === 1 ? (
          <>
            {
              job.estado === 1 ? (

                <>
                  <input type="number" placeholder="$ 0.00" onChange={(e) => setPrecio(e.target.value)} />
                  <button onClick={() => acceptJob(job._id, precio)}>
                    Aceptar
                </button>
                </>

              ) : (
                  <>
                    Precio del sugerido: {job.precio}


                  </>
                )
            }

          </>
        ) : userData.user && userData.user.userType === 2 ? (

          <>
            {
              job.estado === 2 ? (

                <>

                  Nombre del  tecnico:  {provData.prov.nombre + ' ' + provData.prov.apellido}
                Precio sugerido: {job.precio}
                  <br />
                  <button onClick={() => acceptCotization(job._id, precio)}>
                    Aceptar cotizacion
          </button>
                </>

              ) : (
                  <>
                  </>
                )
            }
          </>
        ) : (
              <>
                Precio sugerido: {job.precio}

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
              <Button  color="primary"  size="small" onClick={handleOpen}>
                Ver info
                </Button>
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