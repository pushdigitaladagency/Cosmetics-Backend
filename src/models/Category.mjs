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

export default mongoose.model('Category', categorySchema);