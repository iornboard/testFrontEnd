import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListSubheader from '@material-ui/core/ListSubheader';
import Chatting from './chatting'

const messages = [
  {
    id: 1,
    email: "kuck1234@gmail.com",
    name : "남현수",
    description: "내 친구",
    chat:["ㅋㅋㅋ","잘 지내냐","그렇구나"],
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
          {messages.map((item) => (
            <React.Fragment key={item.id}>
              {item.id === 1 && <ListSubheader className={classes.subheader}>Today</ListSubheader>}
              {item.id === 3 && <ListSubheader className={classes.subheader}>Yesterday</ListSubheader>}
              <Chatting item = {item}/>
              
            </React.Fragment>
          ))}
        </List>
      </Paper>
    </React.Fragment>
  );
}
