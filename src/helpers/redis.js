const redis = require('redis');

require('dotenv').config();

const redisClient = redis.createClient({
  url: 'redis://redis:6379',
});

module.exports = redisClient;
