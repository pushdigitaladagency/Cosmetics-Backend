import GrainsCategory from '../models/GrainsCategory.mjs';

// ─── GET /api/grains/categories ──────────────────────────────────
export const getGrainsCategories = async (req, res) => {
  try {
    const categories = await GrainsCategory.find({ isActive: true }).sort({ sortOrder: 1 });
    res.status(200).send(categories);
  } catch (error) {
    console.error('Error fetching grains categories:', error);
    res.status(500).json({ status: 'error', message: 'Failed to fetch categories' });
  }
};

// ─── GET /api/grains/categories/:slug ────────────────────────────
export const getGrainsCategory = async (req, res) => {
  try {
    const category = await GrainsCategory.findOne({ slug: req.params.slug });
    if (!category) {
      return res.status(404).json({ status: 'fail', message: 'Category not found' });
    }
    res.status(200).send(category);
  } catch (error) {
    console.error('Error fetching grains category:', error);
    res.status(500).json({ status: 'error', message: 'Failed to fetch category' });
  }
};
