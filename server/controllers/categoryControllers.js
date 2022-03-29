import categoryModel from "../models/category-models.js";

const addNewCategory = async (req, res, next) => {
    const { category } = req.body
    const newCategory = new categoryModel({
        category
    })
    try {
        const { _id } = await newCategory.save()
        req.categoryId = _id
        next()
    } catch (error) {
        next(error)
    }
}

const getAllCategorys = async (req, res, next) => {
    try {
        const categorys = await categoryModel.find({})
        res.status(200).json(categorys)
    } catch (error) {
        next(error)
    }
}

export {
    addNewCategory,
    getAllCategorys
}