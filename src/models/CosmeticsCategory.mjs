import mongoose from 'mongoose';

const categorySchema = new mongoose.Schema({

    catcode: {
        type: String,
        required: true,
        unique: true
    },

    name: {
        type: String,
        required: true,
        trim: true
    },

    slug: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },

    status: {
        type: String,
        default: '1'
    },

    image: {
        type: String
    }

}, {
    timestamps: true
});

// Third arg pins the exact Atlas collection name (note: misspelled "Categroies" in the DB).
export default mongoose.model('Category', categorySchema, 'CosmeticsCategroies');