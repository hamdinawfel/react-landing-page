import React from 'react';
import img from '../images/map2.jpg';
import logo from '../images/logo.png';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CallIcon from '@material-ui/icons/Call';
import RoomIcon from '@material-ui/icons/Room';
import MailIcon from '@material-ui/icons/Mail';
import FacebookIcon from '@material-ui/icons/Facebook';
import Fab from '@material-ui/core/Fab';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';

function Copyright() {
    return (
      <React.Fragment>
          <img src={logo} className="mx-auto d-block"style={{width:"25px",margin:"auto"}}alt="nawfel-hamdi.com" />
          <Typography variant="body2" color="light"align="center" >
        {'Copyright © created by '}
        <Link color="inherit" href="https:nawfel-hamdi.com"target="blank">
        nawfel-hamdi.com
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
      </React.Fragment>
    );
  }

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    marginTop:'50px'
  },
  title: {
    fontSize:'20px',
    fontWeight:'bold',
    marginTop:'35px',
    textAlign:'center'
  },
  text:{
      marginTop:'65px',
      margin:'1rem',
      textAlign:'center'
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },img:{
      width:'100%',
      height:'300px',
      marginTop:'65px'
  }
}));
export default function DenseAppBar() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
        <AppBar position="static">
            <Toolbar variant="dense">
                <Grid container >
                    <Grid item xs={12} sm={4}>
                        <Typography  className={classes.title} component="p">
                            Qui sommes-nous?
                        </Typography>
                        <Typography  className={classes.text} component="p">
                            ANIS Construction est une entreprise familiale, 
                            forte d’une expérience de trente ans dans la construction. 
                        </Typography>
                        <Typography  className={classes.text} component="p">
                                 Générale
                                Faubourd du Lac, 43
                                2000 Neuchâtel CH
                        </Typography>
                        <Typography  className={classes.text} component="p">
                        Entreprise Générale
                        Faubourd du Lac, 43
                        2000 Neuchâtel CH
                        </Typography>
                       
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Typography  className={classes.title} component="p">
                            Visitez nous
                        </Typography>
                        <img src={img} className={classes.img}alt="Notre adresse"/>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Typography  className={classes.title} component="p">
                            Trouvez nous
                        </Typography>
                        <List >
                            <ListItem  className={classes.title}>
                                <ListItemText primary="+210 12 458 456" />
                                <Fab color="light" >
                                    <CallIcon color="primary"/>
                                </Fab>    
                            </ListItem>
                            <ListItem  className={classes.title}>
                                <ListItemText primary="Lyon, rus 12 nilson mondilla" />
                                <Fab color="light" >
                                    <RoomIcon color="primary"/>
                                </Fab>
                            </ListItem>
                            <ListItem  className={classes.title}>
                                <ListItemText primary="anis-construction@gmail.com" />
                                <Fab color="light" >
                                    <MailIcon color="primary"/>
                                </Fab>
                            </ListItem>
                            <ListItem  className={classes.title}>
                                <ListItemText primary="page facebook" />
                                <Fab color="light" >
                                    <FacebookIcon color="primary"/>
                                </Fab>
                            </ListItem>
                           
                        </List>
                    </Grid>
                    <Grid item xs={12} sm={12}>
                       <Copyright />
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    </div>
  );
}