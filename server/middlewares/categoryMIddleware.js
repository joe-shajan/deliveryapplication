
import categoryModel from '../models/category-models.js';
import cloudinary from '../utils/cloudinary.js'

const uploadCategoryImage = async (req, res, next) => {
    let { image } = req.body
    try {
        const { url } = await cloudinary.uploader.upload(image);
        let { category } = await categoryModel.updateOne({ _id: req.categoryId }, { $set: { image: url } });
        res.status(200).json({ message: 'category added successfully', category });
    } catch (error) {
        next(error)
    }

}

export {
    uploadCategoryImage
}