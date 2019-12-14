import React from 'react';
import Title from './Title';
import contact from '../images/contact.jpg';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(0),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function Album() {
  const classes = useStyles();
  return (
    <Container  className={classes.cardGrid} maxWidth="md">
      <Title name="Contactez" title="Nous"/>
      <Grid container spacing={2}>
          {/*Section 1*/}
        <Grid item  xs={12} sm={6} md={6}>
          <img src={contact} alt="Avis de nos clients" className="rounded-circle"style={{width:'20rem',height:'20rem'}}/>
        </Grid>
          {/*Section 2*/}
        <Grid item  xs={12} sm={6} md={6}>
          <div className={classes.paper}>
            <form className={classes.form} name="contact" method="POST" data-netlify="true">
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    name="Name"
                    variant="outlined"
                    required
                    fullWidth
                    id="Name"
                    label="Nom et Prénom"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="lastName"
                    label="Téléphone"
                    name="phone"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    name="adresse"
                    label="Adresse"
                    type="text"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    name="message"
                    label="Message"
                    type="text"
                    rows="2"
                    multiline
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Envoyer
              </Button>
            </form>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
}

