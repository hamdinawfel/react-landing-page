import React from 'react';
import Title from './Title';
import img1 from '../images/service1.jpg';
import img2 from '../images/service2.jpg';
import img3 from '../images/service3.jpg';
import Flip from 'react-reveal/Flip';
import CardActionArea from '@material-ui/core/CardActionArea';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';


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
    paddingTop: '56.25%', // 16:9
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
      <Title name="nos" title="services"/>
      <Grid container spacing={2}>
          {/*service1*/}
          <Grid item  xs={12} sm={4} md={4}>
          <Flip left>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={img1}
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                  Construction
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                  Faire construire un immeuble n’est pas à la portée de tout le monde.ANIS Consruction
                   c’est Notre Métier de Construire avec Nos équipes pluri-disciplinaires et expérimentées
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Flip>
          </Grid>
         
          {/*service2*/}
          <Grid item  xs={12} sm={4} md={4}centered>
          <Flip left>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={img2}
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                  Rénovation
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                  Votre bâtiment a besoin d’une rénovation en profondeur ou juste d’un petit lifting?
                  Nous vous proposons une gamme de services qui 
                   s’adapte à votre budget. 
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Flip>
          </Grid>
          {/*service1*/}
          <Grid item  xs={12} sm={4} md={4}>
          <Flip left>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={img3}
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                   Décorations
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                  Pour vos sols: Pose de carrelage, parquet ou autre béton lissé à la mode.
                   Pour vos murs: La peinture de finition et décorative est la cerise sur la gâteau pour tout chantier.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Flip>
          </Grid>
      </Grid>
  </Container>
  );
}
