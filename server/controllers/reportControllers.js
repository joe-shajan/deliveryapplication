import OrderModel from "../models/order-models.js";

const getReport = async (req, res, next) => {
    const { storeid } = req.params
    try {
        
    let orders = await OrderModel.find({ storeid, status: "delivered" })
    let totalNoOfProductsSold = 0
    let totalRevenue = 0
    for (let order of orders) {
        let { products, totalamount } = order
        totalNoOfProductsSold += products.length
        totalRevenue += totalamount
        order.profit = order.totalamount * 25 / 100
    }
    let totalProfit = totalRevenue * 25 / 100
  
    res.status(200).json({totalNoOfProductsSold,totalRevenue,totalProfit,orders})
} catch (error) {
        next(error)
}
}

export {
    getReport
}