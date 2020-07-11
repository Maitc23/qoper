
import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import PinterestIcon from '@material-ui/icons/Pinterest';
import RedditIcon from '@material-ui/icons/Reddit';
import YouTubeIcon from '@material-ui/icons/YouTube';
import InstagramIcon from '@material-ui/icons/Instagram';
import { Link } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';

function Copyright() {
  const classes = useStyles();
  return (
    <Typography variant="body2" align='center' className={classes.copyrightText1}>
      {'© '}
      {new Date().getFullYear()}
      {' Copyright: '}
      <Link to="/" className={classes.copyrightText2}>
        Qoper S.A.
      </Link>
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  footer: {
    padding: theme.spacing(4, 2),
    marginTop: 'auto',
    backgroundColor: '#EE6B00',
  },
  copyrightBackground: {
    backgroundColor: '#BF5600',
    padding: '1.5em',
  },
  copyrightText1: {
    color: 'rgba(255,255,255, 0.6)'
  },
  copyrightText2: {
    color: '#FFFFFF'
  }
}));

export default function Footer() {
  const classes = useStyles();

  return (

    <div>
      <CssBaseline />
      <footer className={classes.footer}>
        <Container align="center">
          <IconButton aria-label="Facebook Icon" href="/" target="_blank">
            <FacebookIcon fontSize="large" style={{ color: '#FFFFFF' }} />
          </IconButton>
          <IconButton aria-label="Facebook Icon" href="" target="_blank">
            <TwitterIcon fontSize="large" style={{ color: '#FFFFFF' }} />
          </IconButton>
          <IconButton aria-label="Facebook Icon" href="" target="_blank">
            <LinkedInIcon fontSize="large" style={{ color: '#FFFFFF' }} />
          </IconButton>
          <IconButton aria-label="Facebook Icon" href="" target="_blank">
            <RedditIcon fontSize="large" style={{ color: '#FFFFFF' }} />
          </IconButton>
          <IconButton aria-label="Facebook Icon" href="" target="_blank">
            <PinterestIcon fontSize="large" style={{ color: '#FFFFFF' }} />
          </IconButton>
          <IconButton aria-label="Facebook Icon" href="" target="_blank">
            <YouTubeIcon fontSize="large" style={{ color: '#FFFFFF' }} />
          </IconButton>
          <IconButton aria-label="Facebook Icon" href="https://www.instagram.com/qopersa/" target="_blank">
            <InstagramIcon fontSize="large" style={{ color: '#FFFFFF' }} />
          </IconButton>
        </Container>
      </footer>
      <Box>
        <div className={classes.copyrightBackground}>
          <Copyright />
        </div>
      </Box>
    </div>

  );
}