import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://burger-maker-d96e1.firebaseio.com/'
});

export default instance;