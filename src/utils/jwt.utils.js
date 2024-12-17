const jwt = require('jsonwebtoken');
const redisClient = require('../helpers/redis');
const uuid = require('uuid');

const { ACCESS_TOKEN_SECRET, ACCESS_TOKEN_EXPIRE } = process.env;

const generateAccessToken = (userId, ip) => {
  return jwt.sign({ userId, ip }, ACCESS_TOKEN_SECRET, {
    algorithm: 'HS512',
    expiresIn: ACCESS_TOKEN_EXPIRE,
    jwtid: uuid.v4(),
  });
};

const generateRefreshToken = () => uuid.v4();

const blackListToken = async (token) => {
  const decoded = jwt.decode(token, process.env.ACCESS_TOKEN_SECRET);

  if (decoded && decoded.jti) {
    await redisClient.setEx(decoded.jti, 3600, 'blacklisted');
  }
};

module.exports = { generateAccessToken, generateRefreshToken, blackListToken };
