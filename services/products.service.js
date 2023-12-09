const { models: { Product } } = require("../db");

class ProductsService {

  static async findAll() {
    return await Product.findAll();
  }

  static async findById(id) {
    return await Product.findByPk(id);
  }
  
  static async create(product){
    return await Product.create(product);
  }

  static async delete(id) {
    try {
      const product = await Product.findByPk(id);
      if (!product) {
        throw new Error(`Product with id ${id} not found`);
      }
      await product.destroy();
      return true;
      
    } catch (error) {
     
      console.error('Error in deleting product:', error.message);
      throw error;
    }
  }
}

module.exports = ProductsService;
