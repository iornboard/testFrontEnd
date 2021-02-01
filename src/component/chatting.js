import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Progress from './progress'

export default function AlertDialog(props) {
    const [open, setOpen] = React.useState(false);
    const [chatList, setChatList] = React.useState([]);
    const [chat, setChat] = React.useState("");

  const handleTextChange = (event) => {
    setChat(event.currentTarget.value);
  }

  const handleClickOpen = () => {
    setOpen(true);
    setChatList(props.item.chat);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
    <ListItem button onClick={handleClickOpen}>
        <ListItemAvatar>
                  <Avatar alt={props.item.name} src="/broken-image.jpg" colorDefault="red"/>
                </ListItemAvatar>
                <ListItemText primary={props.item.name} secondary={props.item.email} />
                <Typography>  {props.item.chat[0]}  </Typography>
    </ListItem>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"채팅내용"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
          {chatList ? chatList.map( item => ( <ListItem> {item} </ListItem>)) : <Progress/>} 
          </DialogContentText>
              <TextField id="Outlined" label="이름" variant="outlined" onChange = {handleTextChange}/>  
                <Button  color="primary">
                확인
                </Button>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Disagree
          </Button>
          <Button onClick={handleClose} color="primary" autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}