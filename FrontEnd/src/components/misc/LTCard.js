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
import { Avatar, IconButton, CardMedia } from '@material-ui/core';
import BuildIcon from '@material-ui/icons/Build';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Modal from '@material-ui/core/Modal';
import LTModal from '../misc/LTModal';

const useStyles = makeStyles({
    root: {
        background: '#EBF0F3',
        border: 0,
        borderRadius: 3,
        boxShadow: '0 0px 0px 0px rgba(255, 105, 135, .3)',
        color: 'black',
        paddingTop: '1.8%',
        paddingLeft: '1.8%',
    },
    content: {
        background: 'red',
    },
});

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
                <Card className={classes.root}>
                    <Grid container direction="row">
                        <Grid item xs={2}>
                            <CardMedia
                                style={{ width: 'auto', height: '155px' }}
                                image={"https://www.redeszone.net/app/uploads-redeszone.net/2019/10/cambios-navegar-internet.jpg"}
                            />
                        </Grid>

                        <Grid item xs={10}>
                            <CardHeader
                                style={{ background: 'blue' }}
                                avatar={
                                    <Avatar>
                                        <BuildIcon />
                                    </Avatar>
                                }
                                title={job.titulo}
                                subheader={job.tipoMantenimiento}

                            />
                            <CardContent className={classes.content}>
                                <Typography variant="body2" component="p">
                                    {job.descripcion}
                                </Typography>
                                <Typography variant="body2" component="p">
                                    {job.estado}
                                </Typography>
                            </CardContent>

                            <CardActions>
                               <LTModal/>
                            </CardActions>

                        </Grid>
                    </Grid>
                </Card>
                <hr />
            </Grid>
        ))

        return (
            <>
                {listJobs}
                <br />
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