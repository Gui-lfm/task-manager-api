const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET || 'secretToken';
// configuração básica do jwt
const jwtConfig = {
  expiresIn: '5d',
  algorithm: 'HS256',
};

// função responsável por criar um token usando os dados fornecidos na requisição
const createToken = (data) => jwt.sign({ data }, secret, jwtConfig);

// verifica se o token fornecido é valido
const validateToken = (token) => jwt.verify(token, secret);

module.exports = {
  createToken,
  validateToken,
};
