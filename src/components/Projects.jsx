import React from 'react';
import Title from './Title';
import avant from '../images/avant.jpeg';
import apres from '../images/apres.jpeg';
import avant1 from '../images/avant1.jpg';
import apres1 from '../images/apres1.jpg';
import apres3 from '../images/anvant4.jpeg';
import avant3 from '../images/avant3.jpg';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import Flip from 'react-reveal/Flip';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';


const useStyles = makeStyles(theme => ({
    cardGrid: {
      paddingTop: theme.spacing(8),
      paddingBottom: theme.spacing(8),
    },
    card: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      maxWidth:450,
    },
    cardMedia: {
      paddingTop: '56.25%', 
    },
    cardContent: {
      flexGrow: 1,
    },
    media: {
      height: 140,
    },
  }));
  
export default function Album() {
  const classes = useStyles();

  return (
    <Container  className={classes.cardGrid} maxWidth="md">
        <Title name="Nos valeurs" title="Ajoutés"/>
        <Grid container spacing={2}>
            {/*Project1*/}
            <Grid item  xs={12} sm={4} md={4}>
                <Flip left>
                    <Card className={classes.card}>
                        <div id="construction" class="carousel slide" data-ride="carousel">
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <img src={avant1} class="d-block w-300" alt="..."style={{height:'200px'}}/>
                                    <div style={{backgroundColor:'rgba(0,0,0,0.7)',borderRadius: '1rem 0 1rem 0',width:'90px',position:'absolute',top:'0'}}>
                                        <Typography style={{color:'#ffc107',fontWeight:'bold',fontSize:'24px',paddingLeft:'15px'}}>Avant</Typography>
                                    </div>    
                                    </div>
                                    <div class="carousel-item">
                                        <img src={apres1} class="d-block w-300" alt="..."style={{height:'200px'}}/>
                                        <div style={{backgroundColor:'rgba(0,0,0,0.7)',borderRadius: '1rem 0 1rem 0',width:'90px',position:'absolute',top:'0'}}>
                                            <Typography style={{color:'#76ff03',fontWeight:'bold',fontSize:'24px',paddingLeft:'15px'}}>Aprés</Typography>
                                        </div>
                                    </div>
                                </div>
                                <a class="carousel-control-prev" href="#construction" role="button" data-slide="prev">
                                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span class="sr-only">Previous</span>
                                </a>
                                <a class="carousel-control-next" href="#construction" role="button" data-slide="next">
                                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span class="sr-only">Next</span>
                                </a>
                        </div>        
                        <CardContent className={classes.cardContent}>
                            <ListItem>
                                <ListItemIcon>
                                    <LocalOfferIcon/>
                                </ListItemIcon>
                                <ListItemText secondary="Construction" />
                            </ListItem>
                        </CardContent>    
                    </Card>
                </Flip>
            </Grid>
            {/*Project2*/}
            <Grid item  xs={12} sm={4} md={4}>
                    <Flip left>
                        <Card className={classes.card}>
                            <div id="renovation" class="carousel slide" data-ride="carousel">
                                <div class="carousel-inner">
                                    <div class="carousel-item active">
                                        <img src={avant} class="d-block w-300" alt="cuisine avant"style={{height:'200px',width:'100%'}}/>
                                        <div style={{backgroundColor:'rgba(0,0,0,0.7)',borderRadius: '1rem 0 1rem 0',width:'90px',position:'absolute',top:'0'}}>
                                            <Typography style={{color:'#ffc107',fontWeight:'bold',fontSize:'24px',paddingLeft:'15px'}}>Avant</Typography>
                                        </div>
                                    </div>
                                    <div class="carousel-item">
                                        <img src={apres} class="d-block w-300" alt="cuisine aprés"style={{height:'200px',width:'100%'}}/>
                                        <div style={{backgroundColor:'rgba(0,0,0,0.7)',borderRadius: '1rem 0 1rem 0',width:'90px',position:'absolute',top:'0'}}>
                                            <Typography style={{color:'#76ff03',fontWeight:'bold',fontSize:'24px',paddingLeft:'15px'}}>Aprés</Typography>
                                        </div>
                                    </div>
                                </div>
                                <a class="carousel-control-prev" href="#renovation" role="button" data-slide="prev">
                                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span class="sr-only">Previous</span>
                                </a>
                                <a class="carousel-control-next" href="#renovation" role="button" data-slide="next">
                                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span class="sr-only">Next</span>
                                </a>
                            </div>        
                            <CardContent className={classes.cardContent}>
                                <ListItem>
                                    <ListItemIcon>
                                        <LocalOfferIcon/>
                                    </ListItemIcon>
                                    <ListItemText secondary="Rénovation" />
                                </ListItem>
                        </CardContent>
                    </Card>
                </Flip>
            </Grid>
            {/*Project3*/}
            <Grid item  xs={12} sm={4} md={4}>
                <Flip left>
                    <Card className={classes.card}>
                        <div id="decoration" class="carousel slide" data-ride="carousel">
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <img src={apres3} class="d-block w-300" alt="..."style={{height:'200px',width:'100%'}}/>
                                    <div style={{backgroundColor:'rgba(0,0,0,0.7)',borderRadius: '1rem 0 1rem 0',width:'90px',position:'absolute',top:'0'}}>
                                        <Typography style={{color:'#ffc107',fontWeight:'bold',fontSize:'24px',paddingLeft:'15px'}}>Avant</Typography>
                                    </div>
                                </div>
                                <div class="carousel-item">
                                    <img src={avant3} class="d-block w-300" alt="..."style={{height:'200px',width:'100%'}}/>
                                    <div style={{backgroundColor:'rgba(0,0,0,0.7)',borderRadius: '1rem 0 1rem 0',width:'90px',position:'absolute',top:'0'}}>
                                        <Typography style={{color:'#76ff03',fontWeight:'bold',fontSize:'24px',paddingLeft:'15px'}}>Aprés</Typography>
                                    </div>
                                </div>
                            </div>
                                <a class="carousel-control-prev" href="#decoration" role="button" data-slide="prev">
                                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span class="sr-only">Previous</span>
                                </a>
                                <a class="carousel-control-next" href="#decoration" role="button" data-slide="next">
                                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span class="sr-only">Next</span>
                                </a>
                        </div>        
                        <CardContent className={classes.cardContent}>
                            <ListItem>
                                <ListItemIcon>
                                    <LocalOfferIcon/>
                                </ListItemIcon>
                                <ListItemText secondary="Décorations"/>
                            </ListItem>
                        </CardContent>
                    </Card>
                </Flip>
            </Grid>
        </Grid>
    </Container>
  );
}