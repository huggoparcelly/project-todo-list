module.exports = (err, _req, res, _next) => {
  if (err.isJoi) {
    return res.status(400).json({
     message: 'Entrada inválida. Tente novamente.' });
  }

  if (err.statusCode) {
    return res.status(err.statusCode).json(
     { message: err.message },
);
  }

  console.error(err);

  return res.status(500).json({
    error: {
      message: `Internal server error: ${err.message}`,
    },
  });
};