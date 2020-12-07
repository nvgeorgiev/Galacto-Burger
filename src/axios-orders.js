import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://galacto-burger-default-rtdb.firebaseio.com/',
});

export default instance;
