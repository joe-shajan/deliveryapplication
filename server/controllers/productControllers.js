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

const getAllProducts = async (req, res, next) => {
    try {
        const products = await Products.find({storeid:req.params.storeid})
        const store = await Store.findOne({_id:req.params.storeid})
        res.status(200).json({products,store})
    } catch (error) {
        res.status(404).json(err)
    }

}

export {
    addProduct,
    getAllProducts
}

// const getAllProducts = async (req, res, next) => {
//     try {
//         await Products.aggregate([
//             {
//                 $group: '$salary'
//             }
//         ])

//     } catch (error) {
//         res.status(404).json(err)
//     }

// }