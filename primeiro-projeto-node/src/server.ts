// eslint-disable-next-line prettier/prettier
import express from 'express';
import routes from './routes';

const app = express();

app.get('/', (request, response) => response.json({ message: 'Hello Vitor' }));

app.listen(3333, () => {
  console.log('Server started!!');
});
