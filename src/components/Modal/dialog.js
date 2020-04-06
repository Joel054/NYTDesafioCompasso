import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function SimpleModal(props) {
  const [open, setOpen] = React.useState(false);

  const buttonStyle ={
    flex: "auto",
    display: "flex",
    padding: 8,
    alignItems: "center",
    justifyContent: "flex-end",

  }
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" color="secondary" onClick={handleClickOpen}>
        Ver Notícia
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{props.title}</DialogTitle>
        <DialogContent>
            <img src={props.image} width="550px" alignIten="center"></img>
          <DialogContentText id="alert-dialog-description">
          {props.resume}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button  color="primary">
            Acessar notícia
          </Button>
          <Button onClick={handleClose} color="primary" autoFocus>
            Fechar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}