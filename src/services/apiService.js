import axios from 'axios';

const BASE_URL = 'https://dev-cord.herokuapp.com';
// const BASE_URL = 'http://localhost:4000';
const API = '/api';
const USERS = '/users';
const ROOMS = '/rooms';
const MESSAGES = '/messages';

const signIn = (login, password) => {
  return axios.put(`${BASE_URL}${API}${USERS}`, {
    login: login,
    password: password
  })
    // .then(res => {
    //   console.log(res.data)
    //   localStorage.setItem('token', res.data.accessTokken);
    //   localStorage.setItem('username', res.data.username);
    // })
    .catch(err => {
      console.error(err)
    });
};

const signUp = (username, email, password) => {
  return axios.post(`${BASE_URL}${API}${USERS}`, {
    username: username,
    email: email,
    password: password
  })
    .catch(err => console.error(err));
};

const getRooms = () => {
  return axios.get(`${BASE_URL}${API}${ROOMS}`)
    .catch(err => console.error(err));
  // .then(res => console.log(res.data.map(room => room.name)));
};

const createRoom = (name, owner) => {
  return axios.post(`${BASE_URL}${API}${ROOMS}`, {
    name: name,
    owner: owner
  })
    .catch(err => console.error(err));
};

const joinARoom = (room, username) => {
  return axios.put(`${BASE_URL}${API}${ROOMS}`, {
    room: room,
    username: username
  })
    .catch(err => console.error(err));
};

const getRoomMessages = (room) => {
  return axios.get(`${BASE_URL}${API}${MESSAGES}/${room}`)
    .catch(err => console.error(err));
};

const sendAMessage = (from, to, message) => {
  return axios.post(`${BASE_URL}${API}${MESSAGES}`, {
    from: from,
    to: to,
    message: message
  })
    .catch(err => console.error(err));
};

export {
  signIn,
  signUp,
  getRooms,
  createRoom,
  joinARoom,
  getRoomMessages,
  sendAMessage
}
