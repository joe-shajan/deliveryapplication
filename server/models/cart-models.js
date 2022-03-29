import mongoose from 'mongoose'

const cartSchema = new mongoose.Schema({

    userid: { type: mongoose.Schema.Types.ObjectId, required: true },
    storeid: { type: String, required: true },
    cartitems:[
        {
            productid:{type: String, required: true},
            productname:{ type: String, required: true },
            qty:{ type: Number, required: true },
            unit:{ type: String, required: true },
            noofitems:{ type: Number, required: true },
            producttotal:{ type: Number, required: true },
        }
    ]

})

const CartModel = mongoose.model('Cart', cartSchema);
export default CartModel