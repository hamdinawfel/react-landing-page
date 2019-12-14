import React from 'react';
import logo from '../images/Logo (2).png';
import {Link} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Modal from './Modal';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: '360',
    backgroundColor: theme.palette.background.paper,
    margin:'40px'
  }
}));

export default function SimpleTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const handleChange = (newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar>
          <Grid container spacing={24}>
            <Grid item xs={2}>
              <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" className="float-right">
                <img src={logo} alt="Anis Construction" style={{width:"50px"}}/>
              </IconButton>
            </Grid>
            <Grid item xs={9}>
              <Typography type="title" color="inherit" className="mt-4 float-left"style={{fontWeight:'bolder',fontSize:'1.1rem'}}>
                Anis Construction
              </Typography>
            </Grid>
            <Grid item xs={1}>
              <Modal />
            </Grid>
          </Grid>
        </Toolbar>
        <Tabs value={value} onChange={handleChange} centered indicatorColor="primary">
          <Link to='/'style={{ color: 'inherit', textDecoration: 'inherit'}}> 
            <Tab label="Acceuil" {...a11yProps(0)}/>
          </Link>
          <Link to='/services'style={{ color: 'inherit', textDecoration: 'inherit'}}> 
            <Tab label="Services" {...a11yProps(1)} />
          </Link>
          <Link to='/projets'style={{ color: 'inherit', textDecoration: 'inherit'}}> 
            <Tab label="Projets" {...a11yProps(2)} />
          </Link>
          <Link to='/contact'style={{ color: 'inherit', textDecoration: 'inherit'}}> 
            <Tab label="Contact" {...a11yProps(3)}/>
          </Link>
        </Tabs>
      </AppBar>
    </div>
  );
}