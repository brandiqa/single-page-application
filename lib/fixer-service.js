require('dotenv').config();
const axios = require('axios');

const symbols = process.env.SYMBOLS || 'EUR,USD,GBP';
const access_key = process.env.API_KEY;

const api = axios.create({
  baseURL: 'http://data.fixer.io/api',
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
  getRates: () => get(`/latest?access_key=${access_key}&symbols=${symbols}&base=EUR`),
  getSymbols: () => get(`/symbols?access_key=${access_key}`),
  getHistoricalRate: date => get(`/${date}?access_key=${access_key}&symbols=${symbols}&base=EUR`),
};
