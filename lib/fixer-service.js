require('dotenv').config();
const axios = require('axios');

const symbols = 'EUR,USD,GBP,AUD,BTC,KES,JPY,CNY';

const api = axios.create({
  baseURL: 'http://data.fixer.io/api',
  params: {
    access_key: process.env.API_KEY,
  },
  timeout: process.env.TIMEOUT || 5000,
});

const get = async (url) => {
  const response = await api.get(url);
  const { data } = response;
  if (data.success) {
    return data;
  }
  throw new Error(data.error.type);
};

module.exports = {
  getRates: () => get(`/latest&symbols=${symbols}&base=EUR`),
  getSymbols: () => get('/symbols'),
};
