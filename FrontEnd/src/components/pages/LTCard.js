import React from 'react';
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



const useStyles = makeStyles({
    root: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        border: 0,
        borderRadius: 3,
        boxShadow: '0 0px 0px 0px rgba(255, 105, 135, .3)',
        color: 'white',
        paddingTop: '1.8%',
        paddingLeft: '1.8%',
    },
});

const LTCard = (props) => {

    const classes = useStyles();
    const { title, subtitle, description, imgSrc } = props;

    return (

        <Grid container direction="column">
            <Card className={classes.root}>
                <Grid container direction="row">
                    <Grid item xs={2}>
                        <CardMedia
                            style={{ 'width': 'auto', height: "175px" }}
                            image={imgSrc}
                        />
                    </Grid>

                    <Grid item xs={10}>
                        <CardHeader
                            avatar={
                                <Avatar>
                                    <BuildIcon />
                                </Avatar>}
                            action={
                                <IconButton aria-label="settings">

                                </IconButton>
                            }
                            title={title}
                            subheader={subtitle}
                        />

                        <CardContent>
                            <Typography variant="body2" component="p">
                                {description}
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
        </Grid>
    );

}

export default LTCard;