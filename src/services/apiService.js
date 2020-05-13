import axios from 'axios';

const BASE_URL = 'https://dev-cord.herokuapp.com';
const API = '/api';
const USERS = '/users';
const ROOMS = '/rooms';

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
    .then(res => console.log(res.data))
    .catch(err => console.error(err));
}

const getRooms = () => {
  return axios.get(`${BASE_URL}${API}${ROOMS}`)
    .catch(err => console.error(err));
  // .then(res => console.log(res.data.map(room => room.name)));
}

const createRoom = (name, owner) => {
  return axios.post(`${BASE_URL}${API}${ROOMS}`, {
    name: name,
    owner: owner
  })
    .then(res => console.log(res.data))
    .catch(err => console.error(err));
}

export {
  signIn,
  signUp,
  getRooms,
  createRoom
}
