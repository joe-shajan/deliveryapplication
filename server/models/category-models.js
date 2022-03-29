import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
    category: {
        type: String,
        required: [true, 'Enter a category.'],
        unique: [true, 'This category is already taken.'],
        lowercase: true,
    },
    image: { type: String }
})

const categoryModel = mongoose.model('category', categorySchema);
export default categoryModel