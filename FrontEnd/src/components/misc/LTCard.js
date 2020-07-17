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
import { Avatar, CardMedia } from '@material-ui/core';
import BuildIcon from '@material-ui/icons/Build';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import deepOrange from '@material-ui/core/colors/orange';

const useStyles = makeStyles((theme) => ({
  root: {
    background: '#2c387e',
    border: 0,
    borderRadius: 10,
    color: 'white',
    paddingTop: '1.8%',
    paddingLeft: '1.8%',
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

const LTCard = () => {

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

  useEffect(() => {

    getJob()
    // eslint-disable-next-line
  }, [])

  const jobsList = () => {
    const jobs = jobsData.jobs;

    const listJobs = jobs.map(job => (
      <Grid container direction="column" key={job._id} zeroMinWidth>
        <Card className={classes.root} variant="elevation" elevation={5}>
          <Grid container direction="row" >
            <Grid item xs={2}>
              <CardMedia
                style={{ 'width': 'auto', height: '155px' }}
                image={"https://www.redeszone.net/app/uploads-redeszone.net/2019/10/cambios-navegar-internet.jpg"}
              />
            </Grid>

            <Grid item xs={10}>
              <CardHeader
                avatar={
                  <Avatar>
                    <BuildIcon />
                  </Avatar>
                }
                title={
                  <Typography variant="h5" component="h2">
                    {job.titulo}
                  </Typography>
                }
                subheader={
                  <Typography variant="h6" component="h4">
                    {job.tipoMantenimiento}
                  </Typography>
                }
              />
              <CardContent>
                <Typography variant="body2" component="p">
                  {job.descripcion}
                </Typography>
              </CardContent>
              <CardActions>
                <Button>
                  More Info
                </Button>
              </CardActions>
            </Grid>
          </Grid>
        </Card>
        <br></br>
      </Grid>
    ))

    return (
      <>
        {listJobs}
        <hr />
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
        userData.user && userData.user.userType === 2 ? (

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