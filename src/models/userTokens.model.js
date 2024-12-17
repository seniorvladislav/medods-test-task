const pool = require('../database');

exports.saveUserToken = async (userId, refreshTokenHash, ip) => {
  await pool.query(
    'INSERT INTO user_tokens (user_id, refresh_token_hash, ip_address) VALUES ($1, $2, $3)',
    [userId, refreshTokenHash, ip]
  );
};

exports.findUserToken = async (userId) => {
  const res = await pool.query(
    'SELECT * FROM user_tokens WHERE user_id = $1 ORDER BY created_at DESC LIMIT 1',
    [userId]
  );
  return res.rows[0];
};

exports.deleteOldToken = async (tokenId) => {
  await pool.query('DELETE FROM user_tokens WHERE id = $1', [tokenId]);
};
