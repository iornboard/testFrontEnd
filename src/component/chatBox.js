import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import Avatar from '@material-ui/core/Avatar';

const messages = [
  {
    id: 1,
    email: "kuck1234@gmail.com",
    name : "남현수",
    description: "내 친구",
    chat:["ㅋㅋㅋ"],
  },
  {
    id: 2,
    email: "kuck9999@gmail.com",
    name : "격수",
    description: "내 동생",
    chat:["잘 지내?"],
  },
  {
    id: 3,
    email: "kuck1111@gmail.com",
    name : "Gman",
    description: "시범용",
    chat:["ㅋㅋㅋㅋ"],
  },
];

const useStyles = makeStyles((theme) => ({
  text: {
    padding: theme.spacing(2, 2, 0),
  },
  paper: {
    paddingBottom: 50,
  },
  list: {
    marginBottom: theme.spacing(2),
  },
  subheader: {
    backgroundColor: theme.palette.background.paper,
  },
  grow: {
    flexGrow: 1,
  },
  fabButton: {
    position: 'absolute',
    zIndex: 1,
    top: -30,
    left: 0,
    right: 0,
    margin: '0 auto',
  },

}));

export default function BottomAppBar() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Paper square className={classes.paper}>
        <Typography className={classes.text} variant="h5" gutterBottom>
          My chat list
        </Typography>
        <List className={classes.list}>
          {messages.map(({ id, email, name , chat}) => (
            <React.Fragment key={id}>
              {id === 1 && <ListSubheader className={classes.subheader}>Today</ListSubheader>}
              {id === 3 && <ListSubheader className={classes.subheader}>Yesterday</ListSubheader>}
              <ListItem button>
                <ListItemAvatar>
                  <Avatar alt={name} src="/broken-image.jpg" colorDefault="red"/>
                </ListItemAvatar>
                <ListItemText primary={name} secondary={email} />
                <Typography>  {chat[0]}  </Typography>
              </ListItem>
            </React.Fragment>
          ))}
        </List>
      </Paper>
    </React.Fragment>
  );
}
