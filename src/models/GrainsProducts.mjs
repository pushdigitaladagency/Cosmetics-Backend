import mongoose from 'mongoose';

const ingredientQtySchema = new mongoose.Schema({
    name: String,
    note: String,
    quantity: String
}, { _id: false });

const stepSchema = new mongoose.Schema({
    step: Number,
    label: String,
    title: String,
    description: String
}, { _id: false });

const highlightItemSchema = new mongoose.Schema({
    title: String,
    description: String
}, { _id: false });

const storageItemSchema = new mongoose.Schema({
    title: String,
    description: String
}, { _id: false });

const weightSchema = new mongoose.Schema({
    label: String,
    popular: Boolean
}, { _id: false });

const featureHighlightSchema = new mongoose.Schema({
    title: String,
    description: String
}, { _id: false });

const grainsProductSchema = new mongoose.Schema({

    category_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'GrainsCategory'
    },

    category_slug: {
        type: String,
        required: true
    },

    badge: {
        type: String
    },

    name: {
        type: String,
        required: true,
        trim: true
    },

    name_tamil: {
        type: String
    },

    slug: {
        type: String,
        required: true,
        unique: true
    },

    sku: {
        type: String,
        required: true,
        unique: true
    },

    short_description: {
        type: String
    },

    description: {
        type: String
    },

    description_tagline: {
        type: String
    },

    rating: {
        value: Number,
        count: Number
    },

    sold_text: {
        type: String
    },

    images: [String],

    weights: [weightSchema],

    ingredients: [String],

    feature_highlights: [featureHighlightSchema],

    preparation_method: {
        heading: String,
        recipe_title: String,
        prep_time: String,
        cook_time: String,
        main_ingredients: String,
        ingredients: [ingredientQtySchema],
        steps: [stepSchema]
    },

    product_highlights: [String],

    health_benefits: [String],

    highlights_section: {
        eyebrow: String,
        heading: String,
        subtext: String,
        items: [highlightItemSchema]
    },

    storage: {
        heading: String,
        items: [storageItemSchema]
    },

    storage_instructions: [String],

    shelf_life: {
        type: String
    },

    related_products: [String],

    related_heading: {
        type: String
    },

    seo: {
        meta_title: String,
        meta_description: String,
        keywords: [String]
    },

    isFeatured: {
        type: Boolean,
        default: false
    },

    isActive: {
        type: Boolean,
        default: true
    }

}, {
    timestamps: true
});

// Third arg pins the exact Atlas collection name.
export default mongoose.model('GrainsProduct', grainsProductSchema, 'GrainsProducts');
