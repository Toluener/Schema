Order = {
    _id: ObjectId,
    customerId: ObjectId,
    items: [
        {
            itemId: ObjectId,
            quantity: number,
        }
    ],
    totalAmount: number,
    orderDate: date,
    deliveryType: "string",
    deliveryAddress: "string",
    deliveryStatus: "string"
}