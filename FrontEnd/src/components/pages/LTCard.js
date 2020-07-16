import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Avatar, IconButton, CardMedia } from '@material-ui/core';
import BuildIcon from '@material-ui/icons/Build';


const LTCard = (props) => {
    const { title, subtitle, description, imgSrc } = props;

    return (
        <Card>
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
            <CardMedia
                style={{ height: "50px" }}
                image={imgSrc}
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
        </Card>
    );

}

export default LTCard;