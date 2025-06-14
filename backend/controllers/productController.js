const products = require('../models/product');

const getAllProducts = (req, res) => {
  res.json(products);
};

module.exports = { getAllProducts };