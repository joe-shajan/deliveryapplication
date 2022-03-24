import mongoose from 'mongoose'

const productSchema = new mongoose.Schema({

    storeid: { type: mongoose.Schema.Types.ObjectId, required: true },
    productname: { type: String, required: true },
    unit: { type: String, required: true },
    qty: { type: Number, required: true },
    amount: { type: Number, required: true },
    exprmonths: { type: Number, required: true },
    category: { type: String, required: true },
    units: { type: Number, required: true },
    description: { type: String, required: true },
    image1: { type: String },
    image3: { type: String },
    image2: { type: String },

})

const Products = mongoose.model('Products', productSchema);
export default Products