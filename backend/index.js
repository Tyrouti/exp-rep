const express = require('express');
const cors = require('cors');
const app = express();

require('dotenv').config();

const corsOptions = {
  origin: 'http://localhost:5173', 
  optionsSuccessStatus: 200 
};

app.use(cors(corsOptions));
app.use(express.json());

const authRoutes = require('./routes/auth');

app.use('/api/auth', authRoutes);

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
