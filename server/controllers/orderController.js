import mongoose from "mongoose";
import CartModel from "../models/cart-models.js";
import OrderModel from "../models/order-models.js";


const createOrder = async (req, res, next) => {
    const { userid, paymentid, totalamount, address } = req.body
    console.log(userid, paymentid, totalamount);
    try {
        const { storeid, cartitems } = await CartModel.findOne({ userid })
        const order = new OrderModel({
            userid,
            storeid,
            products: cartitems,
            totalamount,
            address,
            status: "pending",
            paymentid,
            // date: new Date()
        })
        await order.save()
        await CartModel.deleteOne({ userid })
        res.status(200).json({ message: "order created successfully" })
    } catch (error) {
        next(error)
    }
}


const getOrdersByStoreid = async (req, res, next) => {
    const { storeid } = req.params
    const { status } = req.query

    const matchQuery = { storeid }
    if (status) {
        matchQuery.status = status
    }
    try {
        const order = await OrderModel.aggregate([
            {
                $match: matchQuery

            },
            {
                $lookup:
                {
                    from: "users",
                    localField: "userid",
                    foreignField: "_id",
                    as: "userDetails"
                }
            },
            {
                $unwind: "$userDetails",
            }
        ])

        res.status(200).json(order)
    } catch (error) {
        next(error)
    }
}


const getOrdersByUserid = async (req, res, next) => {
    const { userid } = req.params
    try {
        const order = await OrderModel.find({ userid })
        res.status(200).json(order)
    } catch (error) {
        next(error)
    }
}
// const getOrdersByUserid = async (req, res, next) => {
//     const { userid } = req.params
//     try {
//         const order = await OrderModel.aggregate([
//             {
//                 $match:
//                 {
//                     userid:mongoose.Types.ObjectId(userid)
//                 },

//             },
//             {
//                 $lookup:
//                 {
//                     from: "stores",
//                     localField: "storeid",
//                     foreignField: "_id",
//                     as: "storeDetails"
//                 }
//             },
//             {
//                 $unwind: "$storeDetails",
//             }
//         ])

//         res.status(200).json(order)
//     } catch (error) {
//         // next(error)
//         console.log(error);
//     }
// }

const getOrderByOrderid = async (req, res, next) => {
    const { orderid } = req.params
    try {
        const order = await OrderModel.findById(orderid)
        res.status(200).json(order)
    } catch (error) {
        next(error)
    }
}
const changeOrderStatus = async (req, res, next) => {
    console.log('in change order status');
    const { orderid } = req.params
    const { status } = req.body
    try {
        if (!status) res.status(404).json({ message: "status not found" })
        const { modifiedCount, matchedCount } = await OrderModel.updateOne({ _id: orderid }, { $set: { status: status } })
        if (modifiedCount, matchedCount) res.status(200).json({ message: "status changed successfully" })
    } catch (error) {
        next(error)
    }
}



export {
    createOrder,
    getOrdersByStoreid,
    getOrdersByUserid,
    getOrderByOrderid,
    changeOrderStatus
}