// @flow

import express from 'express';

const app = express();
const WEB_PORT = 8000;

app.get('/', (req, res) => {
  res.send(true);
});

app.listen(WEB_PORT, () => {
  console.log(`Server running on port ${WEB_PORT} (development).`)
});
