import Category from '../models/CosmeticsCategory.mjs';

// ─── GET /api/categories ─────────────────────────────────────────
export const getCategories = async (req, res) => {
  try {
    const categories = await Category.find().sort({ catcode: 1 });
    res.status(200).send(categories);
  } catch (error) {
    console.error('Error fetching categories:', error);
    res.status(500).json({ status: 'error', message: 'Failed to fetch categories' });
  }
};

// ─── GET /api/categories/:catcode ───────────────────────────────
export const getCategory = async (req, res) => {
  try {
    const category = await Category.findOne({ catcode: req.params.catcode });
    if (!category) {
      return res.status(404).json({ status: 'fail', message: 'Category not found' });
    }
    res.status(200).send(category);
  } catch (error) {
    console.error('Error fetching category:', error);
    res.status(500).json({ status: 'error', message: 'Failed to fetch category' });
  }
};

