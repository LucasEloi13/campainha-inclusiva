import express from 'express';
var cors = require('cors')
import { routes } from './routes';

const app = express();

app.use(express.json())

app.use(cors())

app.use(routes)

app.listen(process.env.PORT || 3333, () => {
    console.log('HTTP server running!');
});

//SQLite
//Prima