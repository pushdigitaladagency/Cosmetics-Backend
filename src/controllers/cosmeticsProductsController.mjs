import Product from '../models/CosmeticsProducts.mjs';

// ─── GET /api/products ───────────────────────────────────────────
export const getProducts = async (req, res) => {
  try {
    const products = await Product.find().sort({ createdAt: -1 });
    res.status(200).send(products);
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).json({ status: 'error', message: 'Failed to fetch products' });
  }
};

// ─── GET /api/products/:product_id ──────────────────────────────
export const getProduct = async (req, res) => {
  try {
    const product = await Product.find({ product_id: req.params.product_id });
    if (!product) {
      return res.status(404).json({ status: 'fail', message: 'Product not found' });
    }
    res.status(200).send(product);
  } catch (error) {
    console.error('Error fetching product:', error);
    res.status(500).json({ status: 'error', message: 'Failed to fetch product' });
  }
};

// ─── GET /api/categories/:catcode/products ───────────────────────
export const getProductsByCategory = async (req, res) => {
  try {
    const products = await Product.find({ catcode: req.params.catcode }).sort({ createdAt: -1 });
    res.status(200).send(products);
  } catch (error) {
    console.error('Error fetching products by category:', error);
    res.status(500).json({ status: 'error', message: 'Failed to fetch products' });
  }
};

