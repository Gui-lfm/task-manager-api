module.exports = (req, res, next) => {
  const { description } = req.body;

  if (!description) {
    return res.status(400).json({ message: '"description" is required' });
  }

  next();
};
