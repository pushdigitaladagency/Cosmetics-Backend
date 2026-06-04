import GrainsProduct from '../models/GrainsProducts.mjs';
import GrainsCategory from '../models/GrainsCategory.mjs';

// ─── GET /api/grains/products ────────────────────────────────────
export const getGrainsProducts = async (req, res) => {
  try {
    const products = await GrainsProduct.find({ isActive: true }).sort({ createdAt: -1 });
    res.status(200).send(products);
  } catch (error) {
    console.error('Error fetching grains products:', error);
    res.status(500).json({ status: 'error', message: 'Failed to fetch products' });
  }
};

// ─── GET /api/grains/products/:slug ──────────────────────────────
export const getGrainsProduct = async (req, res) => {
  try {
    const product = await GrainsProduct.findOne({ slug: req.params.slug });
    if (!product) {
      return res.status(404).json({ status: 'fail', message: 'Product not found' });
    }
    res.status(200).send(product);
  } catch (error) {
    console.error('Error fetching grains product:', error);
    res.status(500).json({ status: 'error', message: 'Failed to fetch product' });
  }
};

// ─── GET /api/grains/categories/:slug/products ───────────────────
// Slug stays in URL; internally resolves slug → category _id for the query.
export const getGrainsProductsByCategory = async (req, res) => {
  try {
    const category = await GrainsCategory.findOne({ slug: req.params.slug }).lean();
    if (!category) {
      return res.status(404).json({ status: 'fail', message: 'Category not found' });
    }

    // Query by category_id (ObjectId ref) for docs that have it,
    // falling back to category_slug for existing docs that were seeded without the ID.
    const products = await GrainsProduct
      .find({
        $or: [
          { category_id: category._id },
          { category_slug: category.slug }
        ],
        isActive: true
      })
      .sort({ createdAt: -1 });

    res.status(200).json({
      category: {
        _id: category._id,
        name: category.name,
        slug: category.slug
      },
      count: products.length,
      products
    });
  } catch (error) {
    console.error('Error fetching grains products by category:', error);
    res.status(500).json({ status: 'error', message: 'Failed to fetch products' });
  }
};

// ─── GET /api/grains/products/featured ───────────────────────────
export const getFeaturedGrainsProducts = async (req, res) => {
  try {
    const products = await GrainsProduct
      .find({ isFeatured: true, isActive: true })
      .sort({ createdAt: -1 });
    res.status(200).send(products);
  } catch (error) {
    console.error('Error fetching featured grains products:', error);
    res.status(500).json({ status: 'error', message: 'Failed to fetch featured products' });
  }
};
