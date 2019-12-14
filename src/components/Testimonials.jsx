import React from 'react';
import photo from '../images/photo.jpg';
import photoClient2 from '../images/client2.jpg';
import rating from '../images/rating2.jpg';
import Title from './Title';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Fade from 'react-reveal/Fade';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: 450,
    margin:'auto',
    
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
    margin:'15px 0px 0px 40%',
  },
}));

export default function Testimonial() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Container  className={classes.cardGrid} maxWidth="md">
      <Title name="Avis de " title="nos clients"/>
      <Grid container spacing={4}>
        <Grid item  xs={12} sm={6} md={6}>
          <Fade left>
            <Card className={classes.card}>
              <ExpansionPanel expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                >
                  <ListItem alignItems="flex-start"align="center">
                    <ListItemAvatar>
                      <Avatar alt="Remy Sharp" src={photo} />
                    </ListItemAvatar>
                    <Typography className={classes.secondaryHeading}>HAMDI Nawfel</Typography>
                  </ListItem>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <Typography>
                  Nous sommes très satisfait des travaux réalisés par la société ANIS Consrution.
                  Très professionnel et à l’écoute, et de très bon conseil.
                  </Typography>
                </ExpansionPanelDetails>
              </ExpansionPanel>
      
              <ExpansionPanel expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                <ExpansionPanelSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2bh-content"
                  id="panel2bh-header"
                >
                    <ListItem alignItems="flex-start"align="center">
                      <ListItemAvatar>
                        <Avatar alt="Remy Sharp" src={photoClient2} />
                      </ListItemAvatar>
                      <Typography className={classes.secondaryHeading}>HAMROUNI Nader</Typography>
                    </ListItem>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <Typography>
                  Nous sommes très satisfait des travaux réalisés par la société ANIS Consrution.
                  Très professionnel et à l’écoute, et de très bon conseil.
                  </Typography>
                </ExpansionPanelDetails>
              </ExpansionPanel>

              <ExpansionPanel expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                <ExpansionPanelSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel3bh-content"
                  id="panel3bh-header"
                >
                    <ListItem alignItems="flex-start"align="center">
                      <ListItemAvatar>
                        <Avatar alt="Remy Sharp" src={photo} />
                      </ListItemAvatar>
                      <Typography className={classes.secondaryHeading}>HAMDI Nawfel</Typography>
                    </ListItem>
                
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <Typography>
                    Nous sommes très satisfait des travaux réalisés par la société ANIS Consrution.
                    Très professionnel et à l’écoute, et de très bon conseil.
                  </Typography>
                </ExpansionPanelDetails>
              </ExpansionPanel>
              <ExpansionPanel expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                <ExpansionPanelSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel4bh-content"
                  id="panel4bh-header"
                >
                    <ListItem alignItems="flex-start"align="center">
                      <ListItemAvatar>
                        <Avatar alt="Remy Sharp" src={photoClient2} />
                      </ListItemAvatar>
                      <Typography className={classes.secondaryHeading}>HAMROUNI Nader</Typography>
                    </ListItem>
                  
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <Typography>
                    Nous sommes très satisfait des travaux réalisés par la société ANIS Consrution.
                    Très professionnel et à l’écoute, et de très bon conseil.
                  </Typography>
                </ExpansionPanelDetails>
              </ExpansionPanel>
         </Card>
       </Fade>
       </Grid>

       <Grid item  xs={12} sm={6} md={6}>
        <Fade right>
          <img src={rating} alt="Avis de nos clients" className="rounded-circle"style={{width:'20rem',height:'20rem'}}/>
        </Fade>
       </Grid>
  </Grid>
</Container>
  );
}