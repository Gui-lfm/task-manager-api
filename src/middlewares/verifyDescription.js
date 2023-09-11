// middleware responsável por verificar se a requisição possui o campo description
module.exports = (req, res, next) => {
  const { description } = req.body;

  if (!description) {
    return res.status(400).json({ message: '"description" is required' });
  }

  next();
};
