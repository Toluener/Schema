Cart = {
    _id: ObjectId,
    orders: [ 
        {
            orderId: ObjectId,
            orderStatus:"string"
        }
    ],
    totalPriceOfAllOrders: number,
    confirmation: "string"
}