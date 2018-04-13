require('dotenv').config();
const axios = require('axios');

const api = axios.create({
  baseURL: 'http://data.fixer.io/api',
  params: {
    access_key: process.env.API_KEY,
  },
  timeout: process.env.TIMEOUT || 5000,
});

const symbols = 'GBP,JPY,EUR,USD,AUD,KES,CNY,BTC';

module.exports = {
  getRates: async () => {
    try {
      const response = await api.get(`/latest&symbols=${symbols}`);
      return response.data;
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error);
    }
    return {};
  },
};
