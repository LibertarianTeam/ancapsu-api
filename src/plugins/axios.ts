import axios from 'axios';

export default axios.create({
  baseURL: process.env.VISAO_LIBERTARIA_API,
  timeout: 20000,
});
