import express from 'express';
import cors from 'cors';
import canonize from './canonize';

const app = express();
app.use(cors());
app.get('/', (req, res) => {
  res.json({
    hello: 'testing for request',
  });
});

app.get('/task2c', (req, res) => {
  const host = req.query.username;
  const host_ = canonize(host);
  res.send('@' + host_);
});

app.listen(3000, () => {
  console.log('Your app listening on port 3000!');
});
