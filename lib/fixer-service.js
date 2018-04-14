require('dotenv').config();
const axios = require('axios');

const api = axios.create({
  baseURL: 'http://data.fixer.io/api',
  params: {
    access_key: process.env.API_KEY,
  },
  timeout: process.env.TIMEOUT || 5000,
});

const symbols = 'EUR,USD,GBP,AUD,BTC,KES,JPY,CNY';

module.exports = {
  getRates: async () => {
    const response = await api.get(`/latest&symbols=${symbols}&base=EUR`);
    const { data } = response;
    if (data.success) {
      return data;
    }
    throw new Error(data.error.type);
  },
  getSymbols: async () => {
    const response = await api.get('/symbols');
    const { data } = response;
    if (data.success) {
      return data;
    }
    throw new Error(data.error.type);
  }
};
