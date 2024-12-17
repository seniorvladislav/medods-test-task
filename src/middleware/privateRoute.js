const jwt = require('jsonwebtoken');

const { ACCESS_TOKEN_SECRET } = process.env;

exports.protectedRoute = async (req, res, next) => {
  const { accessToken } = req.body;

  if (!accessToken) {
    return res.status(401).json({
      message: 'Field `accessToken` is required',
    });
  }

  try {
    jwt.verify(accessToken, ACCESS_TOKEN_SECRET);
    next();
  } catch (err) {
    return res.status(401).json({
      message:
        "Access token you've provided is outdated\nPlease refresh it by making POST request to endpoint /auth/refresh",
    });
  }
};
