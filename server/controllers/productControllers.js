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
    const {storeid,skip} = req.params
    try {
        const products = await Products.find({storeid:storeid},undefined,{ skip, limit: 5 })
        res.status(200).json(products)
    } catch (error) {
        res.status(404).json(error)
    }

}
const getAllProductswithoutSkip = async (req, res) => {
    const {storeid} = req.params
    console.log(storeid);
    try {
        const products = await Products.find({storeid:storeid})
        
        res.status(200).json(products)
    } catch (error) {
        res.status(404).json(error)
    }

}

const getProduct = async(req,res)=>{
    const {storeid,productid} = req.params;
    try {
        const product = await Products.findOne({_id:productid,storeid:storeid})
        const store = await Store.findOne({_id:req.params.storeid})
        res.status(200).json({product,store})
    } catch (error) {
        res.status(404).json(error)
    }
}

export {
    addProduct,
    getAllProducts,
    getProduct,
    getAllProductswithoutSkip
}

