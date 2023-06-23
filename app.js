const express = require('express');
const app = express();

const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');

const connectDatabase = require('./config/database');

dotenv.config({ path: './config/config.env' });

connectDatabase();

app.use(express.json());
app.use(cookieParser());

const PORT = process.env.PORT;
app.listen(PORT, () => {
	console.log(`Server stated on port ${process.env.PORT} in ${process.env.NODE_ENV} mode.`);
});