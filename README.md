# Schema
USER STORY:
 As a shopper, I want to be able to browse a catalog of products and add items to my shopping cart. I also want to be able to view the contents of my cart
 and adjust the quantity of items in my cart, Finally, I want to be able to place an order and receive confirmation of my order.
 
 REQUIREMENT ANALYSIS:


   ENTITIES:

   - A cart: which shows the orders made, status of all orders placed, total price of all orders and a confirmation summary of the orders.

   
   - Customer: The customer has a unique Id, name, address, preffered username, phone number, email and password.

   
   - Orders: An Order has a unique Id, a foreign key which is the Id of the customer placing the order, an array of the item unique Id and their quantity, 
   the total price of the item selected, the order date, the payment method, the delivery type choosen by the customer, the delivery address and the delivery status.

   
   -Item: The Item has a unique Id, name, category, description, a unit price, status of the item if it is still in stock or not, a product review of the item by 
   customers who have purchased the item and information about the seller of the product.
  
 
   RELATIONSHIPS:

    - A customer can view the items and place an order and also review the order in the cart
  
   - An order can contain only one item of a unique Id but with any amount of quantity required.
  
   - The cart contains various orders of different items and these orders can also be edited or removed from the cart.
    
    
    API ENDPOINTS:
    
    - GET /items - loads a page showing various items in the database.
    - GET /items/:{itemId} - gets details of a particular item of the specified id.
    - POST /items/:{itemId}/order - places an order for the specified item selected by the customer.
    - GET /customer/:{customerId}/cart - loads the list of all the orders placed by the customer in the cart.
    - GET /orders/:{orderId} - Gets the details of a specific order.
    - GET /confirm - gets a confirmation of the placed orders.
    - PUT /orders/:{orderId} -updates an order of the specified Id.
    - DELETE /cart/:{orderId} - deletes an order from the cart.
