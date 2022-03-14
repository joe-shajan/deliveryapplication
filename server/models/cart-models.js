import mongoose from 'mongoose'

const cartSchema = new mongoose.Schema({

    userid: { type: mongoose.Schema.Types.ObjectId, required: true },
    storeid: { type: mongoose.Schema.Types.ObjectId, required: true },
    cartitems:[
        {
            productid:{type: mongoose.Schema.Types.ObjectId, required: true},
            qty:{ type: Number, required: true },
            producttotal:{ type: Number, required: true },
        }
    ],
    carttotalamount:{ type: Number, required: true },

})

const CartModel = mongoose.model('Cart', cartSchema);
export default CartModel