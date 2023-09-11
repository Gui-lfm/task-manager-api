module.exports = (req, res, next) => {
  const { status } = req.body;

  if (!status) {
    return res.status(400).json({ message: '"Status" is required' });
  }

  next();
}