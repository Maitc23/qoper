import React, { useContext, useState, useEffect } from 'react'
import ErrorMessage from '../../misc/ErrorMessage';
import UserContext from '../../../context/UserContext'
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Avatar, CardMedia, SvgIcon } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import deepOrange from '@material-ui/core/colors/orange';
import Box from '@material-ui/core/Box';
import { Container } from '@material-ui/core';

import BuildIcon from '@material-ui/icons/Build'; //Industrial
import AcUnitIcon from '@material-ui/icons/AcUnit'; //Refrigeración 
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects'; //Electricidad
import KitchenIcon from '@material-ui/icons/Kitchen'; //Línea blanca
import PersonIcon from '@material-ui/icons/Person'; //Otros
import { Link } from 'react-router-dom';
import LTModal from '../../misc/LTModal';
import Axios from 'axios';
import { CardActions } from '@material-ui/core';



function WaterIcon(props) {
    return (
        <SvgIcon {...props}>
            <path d="M12,3L2,12h3v8h14v-8h3L12,3z M12,16c-1.1,0-2-0.9-2-2c0-1.1,2-4,2-4s2,2.9,2,4C14,15.1,13.1,16,12,16z  " />
        </SvgIcon>
    );
}



const useStyles = makeStyles((theme) => ({
    root: {
        background: '#E9EAEC',
        border: 0,
        borderRadius: 5,
        color: 'black',
        paddingTop: '1.2%',
        paddingLeft: '1.8%',
        paddingBottom: '1.2%',
        paddingRight: '1.8%'

    },
    content: {
        padding: '0 50px 0px 15px'
    },


    deepOrangeAvatar: {
        backgroundColor: deepOrange[700]
    },
    avatarIcon: {
        width: theme.spacing(12),
        height: theme.spacing(12),
        color: '#FFF',
    }
}));

export default function JobList() {

    const classes = useStyles();

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

                        <Grid item xs={12} md={12}>
                                <Grid container>
                                    <Grid item xs={12}>
                                        <Grid container direction="column" key={job._id} item >
                                            <Card variant="elevation" elevation={5} className={classes.root}>
                                                <Grid container direction="row" >
                                                    <Grid item xs={2} >
                                                        <CardMedia
                                                            style={{ 'width': 'auto', height: '155px' }}
                                                            image={"https://www.redeszone.net/app/uploads-redeszone.net/2019/10/cambios-navegar-internet.jpg"}
                                                        />
                                                    </Grid>

                                                    <Grid item xs={10} style={{ width: 150, whiteSpace: 'nowrap' }}>
                                                        <CardHeader
                                                            className={classes.content}
                                                            avatar={
                                                                job.tipoMantenimiento === 'Electricidad' ? (
                                                                    <>
                                                                        <Avatar className={classes.deepOrangeAvatar}>
                                                                            <EmojiObjectsIcon />
                                                                        </Avatar>
                                                                    </>
                                                                ) : job.tipoMantenimiento === 'Refrigeracion' ? (
                                                                    <>
                                                                        <Avatar className={classes.deepOrangeAvatar}>
                                                                            <AcUnitIcon />
                                                                        </Avatar>
                                                                    </>
                                                                ) : job.tipoMantenimiento === 'Plomeria' ? (
                                                                    <>
                                                                        <Avatar className={classes.deepOrangeAvatar}>
                                                                            <WaterIcon />
                                                                        </Avatar>
                                                                    </>
                                                                ) : job.tipoMantenimiento === 'Linea Blanca' ? (
                                                                    <>
                                                                        <Avatar className={classes.deepOrangeAvatar}>
                                                                            <KitchenIcon />
                                                                        </Avatar>
                                                                    </>
                                                                ) : job.tipoMantenimiento === 'Industrial' ? (
                                                                    <>
                                                                        <Avatar className={classes.deepOrangeAvatar}>
                                                                            <BuildIcon />
                                                                        </Avatar>
                                                                    </>
                                                                ) : job.tipoMantenimiento === 'Otro' ? (
                                                                    <>
                                                                        <Avatar className={classes.deepOrangeAvatar}>
                                                                            <PersonIcon />
                                                                        </Avatar>
                                                                    </>
                                                                ) : (
                                                                                            <>
                                                                                                <Avatar className={classes.deepOrangeAvatar}>
                                                                                                    <PersonIcon />
                                                                                                </Avatar>
                                                                                            </>
                                                                                        )
                                                            }
                                                            title={
                                                                <Typography variant="h6" component="h5" style={{ marginRight: 10 }}>
                                                                    <Box textOverflow="clip" overflow="hidden">
                                                                        <strong>{job.titulo}</strong>
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
                                                                <Box textOverflow="clip" overflow="hidden" pt={2}>
                                                                    <strong> Descripción: </strong> {job.descripcion}
                                                                </Box>
                                                            </Typography>
                    
                                                        </CardContent>
                                                       
                                                        <CardActions >
                                                            <Grid container direction="row" justify="flex-end" alignItems="center" xs={12}>
                                                                <Grid item xs={10}></Grid>
                                                                <Grid item xs={2}>
                                                                    <LTModal id={job._id} />
                                                                </Grid>
                                                            </Grid>
                                                        </CardActions>
                                                    </Grid>
                                                </Grid>
                                            </Card>
                                        </Grid >

                                    </Grid>
                                </Grid>
                                <br></br>
                        </Grid>
        ))
        return (
            <>
                {listingJobs}
            </>
        )

    }


    //Los trabajos siendo listados en pantalla
    return (

                <div className="page" style={{ 'marginTop': '100px' }}>
                <Container maxWidth="lg">
                  <Grid container spacing={1}>
                      <Typography variant="h3">Trabajos disponibles</Typography>
                      <br></br><br></br><br></br><br></br>
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
                </Grid>
      </Container>
    </div>
    )

}
