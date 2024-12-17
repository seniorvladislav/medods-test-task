require('dotenv').config();
const express = require('express');
const authRoutes = require('./routes/auth.routes');
const redisClient = require('./helpers/redis');

const app = express();

app.set('trust proxy', true);

app.use(express.json());
app.use('/auth', authRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, async () => {
  if (process.env.NODE_ENV !== 'testing') {
    await redisClient.connect();
  }
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;
