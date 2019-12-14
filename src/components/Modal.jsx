import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import Typography from '@material-ui/core/Typography';
import { blue } from '@material-ui/core/colors';
import CallIcon from '@material-ui/icons/Call';


const useStyles = makeStyles({
  avatar: {
    backgroundColor: blue[100],
    color: blue[600],
  },
  phone:{
      fontSize: '30px',
      fontWeight:'900',
      margin:'25px',
      color:'#2196f3'
  }
});

function SimpleDialog(props) {
  const classes = useStyles();
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };
  
  return (
    <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
        <CallIcon color="primary"className="m-5 mx-auto"style={{fontSize:"50px"}}/>
      <Typography className={classes.phone}>21 456 073</Typography>
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};

export default function Modal() {
  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = value => {
    setOpen(false);
    setSelectedValue(value);
  };

  return (
    <div className="float-right mt-4">
      <Button  style={{backgrounColor:"#000"}}onClick={handleClickOpen}>
        <CallIcon style={{color:"#fff"}}/>
      </Button>
      <SimpleDialog selectedValue={selectedValue} open={open} onClose={handleClose} />
    </div>
  );
}