const { validateToken } = require('../utils/tokenFunctions');
const belongToTask = require('../utils/tokenBelongToTask');

// middleware responsável por verificar se o token está presente e é válido
module.exports = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { authorization } = req.headers;
    if (!authorization) {
      return res.status(401).json({ message: 'Token not found' });
    }
    validateToken(authorization);
    await belongToTask(authorization, id);
    next();
  } catch (error) {
    console.log(error);
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};
