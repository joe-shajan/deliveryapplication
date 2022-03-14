import CartModel from "../models/cart-models.js";


const addToCart = (req,res)=>{
    const {userid,storeid,productid} = req.params
    const newCartItem = new CartModel({
        userid,
        storeid,
        cartitems:[{

            productid,
            qty:1,
            
        }]
    })
}
export{
    addToCart
}