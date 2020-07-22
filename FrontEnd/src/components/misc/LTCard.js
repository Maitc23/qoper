import React, { useContext, useState, useEffect } from 'react';
import UserContext from '../../context/UserContext'
import ErrorMessage from './ErrorMessage';
import Axios from 'axios';

import { Link } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Avatar, CardMedia, SvgIcon } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import deepOrange from '@material-ui/core/colors/orange';
import LTModal from '../misc/LTModal';


import BuildIcon from '@material-ui/icons/Build'; //Industrial
import AcUnitIcon from '@material-ui/icons/AcUnit'; //Refrigeración 
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects'; //Electricidad
import KitchenIcon from '@material-ui/icons/Kitchen'; //Línea blanca
import PersonIcon from '@material-ui/icons/Person'; //Otros

//Plomería
function WaterIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M12,3L2,12h3v8h14v-8h3L12,3z M12,16c-1.1,0-2-0.9-2-2c0-1.1,2-4,2-4s2,2.9,2,4C14,15.1,13.1,16,12,16z  " />
    </SvgIcon>
  );
}


const useStyles = makeStyles((theme) => ({
  root: {
    background:'#E9EAEC',
    border: 0,
    borderRadius: 5,
    paddingTop: '1.2%',
    paddingLeft: '1.8%',
    paddingBottom: '1.2%',
    paddingRight: '1.8%'

  },
  content: {
    padding: '0 10px 0px 15px'
  },
  titulo:{
    color:'primary'
  },
 

  deepOrangeAvatar: {
    backgroundColor: deepOrange[700],
    width: theme.spacing(18),
    height: theme.spacing(18),
  },
  avatarIcon: {
    width: theme.spacing(12),
    height: theme.spacing(12),
    color: '#FFF',
  }
}));

const LTCard = (state) => {

  const classes = useStyles();
  const { userData } = useContext(UserContext);
  const token = localStorage.getItem('x-access-token');
  const [error, setError] = useState();
  const [jobsData, setJobData] = useState({
    jobs: []
  });

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

  const getPausedJobs = async () => {
    try {
      const works = await Axios.get('http://localhost:4000/api/pausedJob',
        { headers: { 'x-access-token': token } }
      );
      setJobData({
        jobs: works.data
      })
    } catch (err) {
      err.response.data.message && setError(err.response.data.message);
    }
  }

  const getCompletedJob = async () => {
    try {
      const works = await Axios.get('http://localhost:4000/api/completedJob',
        { headers: { 'x-access-token': token } }
      );
      setJobData({
        jobs: works.data
      })
    } catch (err) {
      err.response.data.message && setError(err.response.data.message);
    }
  }

  const getCancelledJob = async () => {
    try {
      const works = await Axios.get('http://localhost:4000/api/cancelledJob',
        { headers: { 'x-access-token': token } }
      );
      setJobData({
        jobs: works.data
      })
    } catch (err) {
      err.response.data.message && setError(err.response.data.message);
    }
  }

  const getCotizationJobs = async () => {
    try {
      const works = await Axios.get('http://localhost:4000/api/cotizationJobs',
        { headers: { 'x-access-token': token } }
      );
      setJobData({
        jobs: works.data
      })
    } catch (err) {
      err.response.data.message && setError(err.response.data.message);
    }
  }

  const acceptedCotizations = async () => {
    try {
      const works = await Axios.get('http://localhost:4000/api/acceptedCotizations',
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

    if (state.state === 1) {
      getJob()
    } else if (state.state === 2) {
      getCotizationJobs()
    } else if (state.state === 3) {
      acceptedCotizations()
    } else if (state.state === 4) {
      getPausedJobs()
    } else if (state.state === 5) {
      getCancelledJob()
    } else if (state.state === 6) {
      getCompletedJob()
    }
    // eslint-disable-next-line
  }, [])

  const jobsList = () => {
    const jobs = jobsData.jobs;

    const listJobs = jobs.map(job => (
      <Grid container direction="column" key={job._id} item>
        <Card variant="elevation" elevation={5} className={classes.root}>
          <Grid container direction="row" >
            <Grid item xs={2} >
              <CardMedia
                style={{ 'width': 'auto', height: '155px' }}
                image={"https://www.redeszone.net/app/uploads-redeszone.net/2019/10/cambios-navegar-internet.jpg"}
              />
            </Grid>

            <Grid item xs={10} style={{ width: 150, whiteSpace: 'nowrap'}}>
              <CardHeader
                className={classes.content}
                avatar={
                  <Avatar>
                    <BuildIcon />
                  </Avatar>
                }
                title={
                  <Typography variant="h6" component="h5" style={{marginRight: 10}} className={classes.titulo}>
                    <Box textOverflow="clip" overflow="hidden">
                      {job.titulo}
                    </Box>
                  </Typography>
                }
                subheader={
                  <Typography variant="subtitle2" component="subtitle2" color="textSecondary">
                    {job.tipoMantenimiento}
                  </Typography>
                }
              />
              <CardContent className={classes.content}>
                <Typography variant="body2" component="p">
                  <Box textOverflow="clip" overflow="hidden">
                    {job.descripcion}
                  </Box>
                </Typography>
                {/* <Typography variant="body2" component="p">
                  {job.estado}
                </Typography> */}
              </CardContent>
              <br></br><br></br>
              <CardActions >
                <LTModal id={job._id} proveedor={job.proveedor} state={state.state} />
              </CardActions>
              

            </Grid>
          </Grid>
        </Card>
        
      </Grid>
    ))

    return (
      <>
        {listJobs}
      </>
    )
  }


  /*     
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
   */




  return (
    <div className="page">
      {
        userData.user ? (

          <>
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
          )
      }
    </div>
  );



}


export default LTCard;