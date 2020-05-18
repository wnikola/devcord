import React, { useState, useEffect } from 'react';
// import io from 'socket.io-client';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { getRoomMessages, sendAMessage } from '../services/apiService';
import TopAppBar from './AppBar';

export default function Room({ match }) {
  const room = match.params.room;
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    getRoomMessages(room)
      .then(res => {
        setMessages(res.data.messages);
      });
  }, [room]);

  // const socket = io('https://dev-cord.herokuapp.com/:40019');

  const handleSubmit = () => {
    // socket.emit('message', message);
    sendAMessage(localStorage.getItem('username'), room, message)
      .then(res => {
        if (res.data.success) {
          setMessages([...messages, { from: localStorage.getItem('username'), message: res.data.message.message }]);
        }
      });
  };

  // socket.on('message', function (msg) {
  //   setMessages([...messages, msg]);
  // });

  return (
    <>
      <TopAppBar />
      <div>
        {messages.map((msg, i) => <div key={i}><p><b>{msg.from}</b>: {msg.message}</p></div>)}
      </div>
      <form>
        <TextField
          id="outlined-textarea"
          label="Enter message"
          placeholder="Enter message"
          multiline
          variant="outlined"
          onChange={e => setMessage(e.target.value)}
        />
      </form>
      <Button
        type="submit"
        // fullWidth
        variant="contained"
        color="primary"
        // className={classes.submit}
        onClick={e => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        Send
      </Button>
    </>
  );
};