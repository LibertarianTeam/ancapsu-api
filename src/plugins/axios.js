const axios = require('axios');

module.exports = axios.create({
  baseURL: process.env.VISAO_LIBERTARIA_API,
  timeout: 20000,
});
