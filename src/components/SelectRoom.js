import React, { useState, useEffect } from 'react';
import TopAppBar from './AppBar';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import { createRoom, getRooms, joinARoom } from '../services/apiService';
import { Typography } from '@material-ui/core';

export default function SelectRoom({ history }) {
  const [newRoom, setNewRoom] = useState('');
  const [rooms, setRooms] = useState([]);
  const [selectedRoom, setSelectedRoom] = useState('');

  useEffect(() => {
    getRooms()
      .then(res => {
        setRooms(res.data.map(room => room.name));
      });
  }, []);

  const handleCreate = () => {
    createRoom(newRoom, localStorage.getItem('username'))
      .then(res => {
        console.log(res.data)
        if (res.data.success) {
          history.push(`/rooms/${newRoom}`);
        }
      });
  };

  const handleJoin = () => {
    joinARoom(selectedRoom, localStorage.getItem('username'))
      .then(res => {
        if (res.data.success) {
          history.push(`/rooms/${selectedRoom}`);
        }
        console.log(res.data);
      });
  };

  return (
    <>
      <TopAppBar />
      <Typography variant='h3'>
        Join an existing room:
      </Typography>
      <form>
        <FormControl variant="outlined"
        // className={classes.formControl}
        >
          <InputLabel htmlFor="outlined-room-native-simple">Rooms</InputLabel>
          <Select
            native
            // value={state.age}
            onChange={e => setSelectedRoom(e.target.value)}
            label="Age"
            inputProps={{
              name: 'age',
              id: 'outlined-age-native-simple',
            }}
          >
            <option aria-label="None" value="" />
            {/* <option value={10}>Ten</option>
            <option value={20}>Twenty</option>
            <option value={30}>Thirty</option> */}
            {rooms.map(room => <option key={room} value={room}>{room}</option>)}
          </Select>
        </FormControl>
        <Button
          type="submit"
          // fullWidth
          variant="contained"
          color="primary"
          // className={classes.submit}
          onClick={e => {
            e.preventDefault();
            handleJoin();
          }}
        >
          Join
        </Button>
      </form>
      <Typography variant='h3'>
        ...or create a new one:
      </Typography>
      <form>
        <TextField
          required
          id="outlined-required"
          label="Room name"
          // defaultValue="Hello World"
          variant="outlined"
          onChange={e => setNewRoom(e.target.value)}
        />
        <Button
          type="submit"
          // fullWidth
          variant="contained"
          color="primary"
          // className={classes.submit}
          onClick={e => {
            e.preventDefault();
            handleCreate();
          }}
        >
          Create
        </Button>
      </form>
    </>
  )
}