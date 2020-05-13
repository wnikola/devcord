import React, { useState, useEffect } from 'react';
import TopAppBar from './AppBar';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import { createRoom, getRooms } from '../services/apiService';

export default function SelectRoom() {
  const [newRoom, setNewRoom] = useState('');
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    getRooms()
      .then(res => {
        setRooms(res.data.map(room => room.name));
        console.log(res.data.map(room => room.name));
      });
  }, []);

  const handleCreate = () => {
    createRoom(newRoom, localStorage.getItem('username'));
  };



  return (
    <>
      <TopAppBar />
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
      <form>
        <FormControl variant="outlined"
        // className={classes.formControl}
        >
          <InputLabel htmlFor="outlined-room-native-simple">Rooms</InputLabel>
          <Select
            native
            // value={state.age}
            // onChange={handleChange}
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
      </form>
    </>
  )
}