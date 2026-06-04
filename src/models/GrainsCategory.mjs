import mongoose from 'mongoose';

const grainsCategorySchema = new mongoose.Schema({

    name: {
        type: String,
        required: true,
        trim: true
    },

    slug: {
        type: String,
        required: true,
        unique: true
    },

    description: {
        type: String
    },

    image: {
        type: String
    },

    isActive: {
        type: Boolean,
        default: true
    },

    sortOrder: {
        type: Number,
        default: 0
    }

}, {
    timestamps: true
});

// Third arg pins the exact Atlas collection name (note: misspelled "Categroies" in the DB).
export default mongoose.model('GrainsCategory', grainsCategorySchema, 'GrainsCategroies');
