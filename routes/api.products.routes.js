const express = require("express");
const ProductsService = require("../services/products.service");

const apiProductRoutes = express.Router();

// Get all products
apiProductRoutes.get('/', async (req, res) => {
  try {
    const products = await ProductsService.findAll();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get a single product by ID
apiProductRoutes.get('/:id', async (req, res) => {
  try {
    const product = await ProductsService.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Delete a product by ID
apiProductRoutes.delete('/:id', async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const isDeleted = await ProductsService.delete(id);
    if (isDeleted) {
      return res.status(200).json({ message: `Product ${id} was deleted successfully` });
    } else {
      return res.status(404).json({ message: `Product ${id} not found` });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create a new product
apiProductRoutes.post('/', async (req, res) => {
  try {
    const newProduct = await ProductsService.create(req.body);
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = apiProductRoutes;
