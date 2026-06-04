import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({

    product_id: {
        type: String,
        required: true,
        unique: true
    },

    catcode: {
        type: String,
        required: true
    },

    name: {
        type: String,
        required: true,
        trim: true
    },

    image: {
        type: String
    },

    hero_section: {

        collection: String,

        title: String,

        short_description: String,

        variant: [String],

        rating: String,

        reviews: String,

        net_quantity: mongoose.Schema.Types.Mixed,

        sizes: [String],

        hero_ingredients: [String],

        suitability: mongoose.Schema.Types.Mixed
    },

    story_section: {

        heading: String,

        description: String,

        claim: String,

        main_benefits: [String],

        benefits_list: [String],

        suitability: [String],

        safety_warnings: [String],

        storage_instructions: [String],

        how_to_use: [String],

        net_quantity: [String],

        hero_ingredients: [String]
    }

}, {
    timestamps: true
});

// Third arg pins the exact Atlas collection name.
export default mongoose.model('Product', productSchema, 'CosmeticsProducts');