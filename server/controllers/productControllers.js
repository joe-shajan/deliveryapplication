import Products from "../models/product-models.js"
import Store from "../models/store-model.js"




const addProduct = async (req, res, next) => {
    let { storeid, productname, unit, qty, amount, exprmonths, category, units, description } = req.body
    let newProduct = new Products({ storeid, productname, unit, qty, amount, exprmonths, category, units, description })

    newProduct.save(function (err, newProduct) {
        if (err) {
            res.status(404).json(err)
        } else {
            req.productId = newProduct._id
            next()
        }
    })

}

const getAllProducts = async (req, res) => {
    const { storeid, skip } = req.params
    try {
        const products = await Products.find({ storeid: storeid }, undefined, { skip, limit: 5 })
        res.status(200).json(products)
    } catch (error) {
        res.status(404).json(error)
    }

}
const searchProducts = async (req, res) => {
    const { storeid, search } = req.params
    try {
        const products = await Products.find({ storeid: storeid, productname: { $regex: search } })
        res.status(200).json(products)
    } catch (error) {
        res.status(404).json(error)
    }

}
const getAllProductswithoutSkip = async (req, res) => {
    const { storeid } = req.params
    console.log(storeid);
    try {
        const products = await Products.find({ storeid: storeid })

        res.status(200).json(products)
    } catch (error) {
        res.status(404).json(error)
    }

}

const getProduct = async (req, res) => {
    const { storeid, productid } = req.params;
    try {
        const product = await Products.findOne({ _id: productid, storeid: storeid })
        const store = await Store.findOne({ _id: req.params.storeid })
        res.status(200).json({ product, store })
    } catch (error) {
        res.status(404).json(error)
    }
}

const deleteProduct = async (req, res) => {
    const { storeid, productid } = req.params;

    try {
        let { deletedCount } = await Products.deleteOne({ _id: productid, storeid })
        if (deletedCount === 1) {

            res.status(202).json({ message: 'product deleted successfully' })
        } else {
            res.status(404).json({ message: 'no product found or something went wrong' })
        }
    } catch (error) {
        res.status(404).json({ message: error.message })
    }

}

const editProduct = async (req, res, next) => {
    const { storeid, productid } = req.params;
    const { productname, unit, qty, amount, exprmonths, category, units, description, image1, image2, image3 } = req.body;
    try {
        let { modifiedCount } = await Products.updateOne({ _id: productid, storeid }, { $set: { productname, unit, qty, amount, exprmonths, category, units, description } })
        if (modifiedCount) {
            if (image1 || image2 || image3) {
                next()
            } else {
                res.status(200).json({ message: 'product edited successfully' })
            }
        } else {
            if (image1 || image2 || image3) {
                next()
            } else {
                res.status(404).json({ message: 'product not edited' })
            }
        }
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

export {
    addProduct,
    getAllProducts,
    getProduct,
    getAllProductswithoutSkip,
    searchProducts,
    deleteProduct,
    editProduct
}

