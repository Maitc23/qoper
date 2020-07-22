import React, { useContext, useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Box from '@material-ui/core/Box';
import ErrorMessage from '../misc/ErrorMessage';
import Axios from 'axios';
import UserContext from '../../context/UserContext'
import SuccessfulNotice from '../misc/SuccessfulNotice';
import Button from '@material-ui/core/Button';
import { Grid, Typography, Input } from '@material-ui/core';
import { green, red} from '@material-ui/core/colors';



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
    background: '#E9EAEC',
    border: 0,
    borderRadius: 5,
    position: 'absolute',
    width: 400,
    padding: theme.spacing(2, 4, 3),
  },
  btnRed: { 
    background: red[700],
   color : "#FFFFFF",
    '&:hover': {
      backgroundColor: red[600],
      color: '#FFF'
    },
  },
  btnGreen: { 
    background: green[500], 
    color : "#FFFFFF",
    '&:hover': {
      backgroundColor: green[800],
      color: '#FFF'
    },
  }
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
  const fechita = new Date(job.fecha)

  const finalDate = fechita.getDate() + '-' + fechita.getMonth() + '-' + fechita.getFullYear() + ' A las: ' + fechita.getHours() + ':' + fechita.getMinutes()
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

  const endJob = async (id) => {
    try {
      const job = {
        id: id
      }
      const res = await Axios.put('http://localhost:4000/api/completedJob',
        job,
        { headers: { 'x-access-token': token } }
      );
      setSuccessful(res.data.message);
      window.location.replace('/completedJobs');
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
      const cotizationData = localStorage.getItem('cotData');

      if (cotizationData === null) {
        localStorage.setItem("cotData", job.id);
      } else {
        localStorage.removeItem("cotData")
        localStorage.setItem("cotData", job.id)
      }
      window.location.replace('/checkOut');


    } catch (err) {
      err.response.data.message && setError(err.response.data.message);
    }
  }

  const cancelJob = async (id) => {
    try {
      const job = {
        id: id
      }
      const res = await Axios.put('http://localhost:4000/api/cancelledJob',
        job,
        { headers: { 'x-access-token': token } }
      );
      setSuccessful(res.data.message);
      window.location.replace('/cancelledJob');
    } catch (err) {
      err.response.data.message && setError(err.response.data.message);
    }
  }

  const pauseJob = async (id) => {
    try {
      const job = {
        id: id
      }
      const res = await Axios.put('http://localhost:4000/api/pausedJob',
        job,
        { headers: { 'x-access-token': token } }
      );
      setSuccessful(res.data.message);
      window.location.replace('/pausedJobs');
    } catch (err) {
      err.response.data.message && setError(err.response.data.message);
    }
  } 

  const retomeJob = async (id) => {
    try {
      const job = {
        id: id
      }
      const res = await Axios.put('http://localhost:4000/api/retomeJobs',
        job,
        { headers: { 'x-access-token': token } }
      );
      setSuccessful(res.data.message);
      window.location.replace('/trabajosLista');
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
      <Grid>
        <Box textOverflow="clip" overflow="hidden" display='flex' margin='auto' alignItems='center' justifyContent='center'>
          <Typography variant="h4" component="h2" >
            {job.titulo}
          </Typography>
        </Box>
        <Typography variant="subtitle2" component="subtitle2" color="textSecondary">

          <Box textOverflow="clip" overflow="hidden" display='flex' margin='auto' alignItems='center' justifyContent='center'>
            <strong>Fecha:</strong> {finalDate}
          </Box>

          <br></br>
            <strong> Tipo: </strong> {job.tipoMantenimiento}
          <br></br>
          <strong>Telefono:</strong> {job.telefono}
        </Typography>

        <p>
          <strong> Supervisor: </strong>
          <Box component="div" whiteSpace="normal">
            {job.nombreSupervisor}
          </Box>
        </p>

        <p>
         <strong> Ubicacion: </strong> 
          <Box component="div" whiteSpace="normal">
            {ubicacion.ciudad}
          </Box>
        </p>

        <p id="simple-modal-description">
         <strong> Descripción: </strong> 
          <Box  textOverflow="clip"  overflow="hidden" component="div" whiteSpace="normal">
            {job.descripcion}
          </Box>
        </p>
      </Grid>

      {
        userData.user && userData.user.userType === 1 ? (
          <>
            {
              job.estado === 1 || job.estado === 5 ? (

                <>
                <Box textOverflow="clip" overflow="hidden" display='flex' margin='auto' alignItems='center' justifyContent='center'>
                <Input type="number" placeholder="Precio a colocar $0.00" inputProps={{ 'aria-label': 'description' }} onChange={(e) => setPrecio(e.target.value)} />
                  <Button className={classes.btnGreen} onClick={() => acceptJob(job._id, precio)}>
                    Aceptar
                  </Button>
                </Box>

                </>
              ) : job.estado === 3 ? (
                <>
                  <strong> Precio sugerido: </strong> ${job.precio}
                  <br />
                 <Box textOverflow="clip" overflow="hidden" display='flex' margin='auto' alignItems='center' justifyContent='center'>
                  <Button className= {classes.btnGreen} onClick={() => endJob(job._id)}>
                    Trabajo finalizado
                  </Button>
                  </Box>
                </>
              ) : (
                    <>
                    <strong> Precio sugerido: </strong> ${job.precio}
                    </>
                  )
            }

          </>
        ) : userData.user && userData.user.userType === 2 ? (

          <>
            {
              job.estado === 1 ?(
                <>
              <Box textOverflow="clip" overflow="hidden" display='flex' margin='auto' alignItems='center' justifyContent='center'>
              <Button className= {classes.btnRed} onClick={() => pauseJob(job._id)}>
                Pausar trabajo
              </Button>
              </Box>
              </>

              ): job.estado === 4 ? (
                <>
                <Box textOverflow="clip" overflow="hidden" display='flex' margin='auto' alignItems='center' justifyContent='center'>
                <Button  className= {classes.btnGreen} onClick={() => retomeJob(job._id)}>
                  Retomar trabajo
                </Button>
                </Box>

                </>
              ) : job.estado === 2 ? (

                <>

                Nombre del  tecnico:  {provData.prov.nombre + ' ' + provData.prov.apellido}
                Precio sugerido: {job.precio}
                  <br />
                  <Box textOverflow="clip" overflow="hidden" display='flex' margin='auto' alignItems='center' justifyContent='center'>
                  <Button className= {classes.btnGreen} onClick={() => acceptCotization(job._id, precio)}>
                    Aceptar cotizacion
                  </Button>
                  </Box>

                  <br/>
                  <Box textOverflow="clip" overflow="hidden" display='flex' margin='auto' alignItems='center' justifyContent='center'>
                    <Button className= {classes.btnRed} onClick={() => cancelJob(job._id)}>
                      Rechazar cotizacion
                    </Button>
                  </Box>
                  
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
            <Button color="primary" size="small" onClick={handleOpen}>
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