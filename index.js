import express from 'express';
import { getCities } from './src/routes.js';
import { validateZipCode } from './src/validation.js';

const app = express();

app.get('/cities', validateZipCode, getCities)

app.listen(3000, () => {
    console.log('Running on port 3000')
});