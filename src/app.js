require('dotenv').config();
const express = require('express');
const authRoutes = require('./routes/auth.routes');

const app = express();

app.set('trust proxy', true);

app.use(express.json());
app.use('/auth', authRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, async () => console.log(`Server running on port ${PORT}`));

module.exports = app;
