require('dotenv').config();
const express = require('express');
const { getRates } = require('./lib/fixer-service');

const app = express();
const port = process.env.PORT || 3000;

// Set public folder as root
app.use(express.static('public'));

// Provide access to node_modules folder
app.use('/scripts', express.static(`${__dirname}/node_modules/`));

// Fetch Currency Rates
app.get('/api/rates', async (req, res) => {
  const data = await getRates();
  res.setHeader('Content-Type', 'application/json');
  res.send(data);
});

// Redirect all traffic to index.html
app.use((req, res) => res.sendFile(`${__dirname}/public/index.html`));

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log('listening on %d', port);
});
