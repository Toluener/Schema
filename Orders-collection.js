Order = {
    _id: ObjectId,
    customerId: ObjectId,
    items: [
        {
            itemId: ObjectId,
            quantity: number,
        }
    ],
    totalPrice: number,
    orderDate: date,
    deliveryType: "string",
    deliveryAddress: "string",
    deliveryStatus: "string"
}