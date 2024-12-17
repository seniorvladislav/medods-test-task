const bcrypt = require('bcryptjs');

const {
  generateAccessToken,
  generateRefreshToken,
} = require('../utils/jwt.utils');
const { sendWarningEmail } = require('../utils/email.utils');
const {
  findUserToken,
  saveUserToken,
  deleteOldToken,
} = require('../models/userTokens.model');

exports.generateTokens = async (req, res) => {
  const { userId } = req.body;
  const clientIp =
    req.headers['x-forwarded-for'] ||
    req.connection.remoteAddress ||
    req.ip ||
    'unknown';

  // console.log("Client IP:", clientIp);

  if (!userId) {
    return res.status(400).json({
      message: 'Field `userId` of type GUID is required',
    });
  }

  try {
    const dbUserRefreshToken = await findUserToken(userId);

    // console.log(dbUserRefreshToken?.refresh_token_hash);

    let refreshToken;

    if (!dbUserRefreshToken) {
      refreshToken = generateRefreshToken();

      const tokenHash = await bcrypt.hash(refreshToken, 10);

      await saveUserToken(userId, tokenHash, clientIp);
    } else {
      return res.status(400).json({
        message: 'Access and refresh tokens have been already issued',
      });
    }

    const accessToken = generateAccessToken(userId, clientIp);

    // const accessToken = generateAccessToken(userId, clientIp);
    // const refreshToken = generateRefreshToken();
    // const refreshTokenHash = await bcrypt.hash(refreshToken, 10);

    // await saveUserToken(userId, refreshTokenHash, clientIp);

    res.json({
      accessToken,
      refreshToken,
    });
  } catch (err) {
    console.error(err);

    return res.status(500).json({
      message: err.message,
    });
  }
};

exports.refreshTokens = async (req, res) => {
  const { userId, refreshToken } = req.body;
  const clientIp =
    req.headers['x-forwarded-for'] ||
    req.connection.remoteAddress ||
    req.ip ||
    'unknown';

  if (!userId || !refreshToken) {
    return res.status(400).json({
      message: 'Fields `userId`, `refreshToken` are required',
    });
  }

  try {
    // await blackListToken(accessToken);

    const dbUserRefreshToken = await findUserToken(userId);

    const isValid = await bcrypt.compare(
      refreshToken,
      dbUserRefreshToken?.refresh_token_hash
    );

    if (!isValid) {
      return res.status(403).json({
        message: 'Invalid refresh token',
      });
    }

    // const newRefreshToken = generateRefreshToken();

    // const tokenHash = await bcrypt.hash(newRefreshToken, 10);

    // await saveUserToken(userId, tokenHash, clientIp);

    const accessToken = generateAccessToken(userId, clientIp);

    res.json({ accessToken });
  } catch (err) {
    console.error('Error occurred while refreshing tokens:', err);
    res.status(500).json({ message: err.message });
  }
};
