import mongoose from "mongoose";


const orderSchema = mongoose.Schema({
    userid: { type: mongoose.Schema.Types.ObjectId, required: true },
    storeid: { type: String, required: true },
    products: [
        {
            productid: { type: String, required: true },
            productname: { type: String, required: true },
            qty: { type: Number, required: true },
            unit: { type: String, required: true },
            noofitems: { type: Number, required: true },
            producttotal: { type: Number, required: true },
            image: { type: String, required: true }
        }
    ],
    totalamount: { type: Number, required: true },
    address: { type: String, required: true },
    status:{type:String,required:true},
    paymentid:{type:String,required:true},
    
})

const OrderModel = mongoose.model('order',orderSchema)

export default OrderModel