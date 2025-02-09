//Task 1 - Customer Profile
const customer = {
    name: "John Doe", //Customer's name
    age: 35, //Customer's age
    email: "john.doe@email.com" //Customer's email address
};

//Logging the customer's name to the console
console.log(`Customer's name: ${customer.name}`);

//Logging the customer's age to the console
console.log(`Customer's age: ${customer.age}`);

//Logging the customer's email to the console
console.log(`Customer's email: ${customer.email}`);


//Task 2 - Order Details
const order = {
    orderId: 12345, //Order ID
    totalAmount: 150, //Total amount for the order
    status: "Processing", //Status of the order
    displayOrder: function() {
        //Logs the order details using the displayOrder method, accessing the object's properties with 'this'
        console.log(`Order ID: ${this.orderId}, Total: $${this.totalAmount}, Status: ${this.status}`);
    }
};

//Calling the method to display order details in the console
order.displayOrder();

//Task 3 - Shopping Cart

//Declaring an array containing 3 product names
let cartItems = ["Milk", "Bread", "Eggs"];

//Adding a new product to the cart
cartItems.push("Cheese");

//Removing the last item from the cart (Cheese)
cartItems.pop();

//Adding an item at the beginning of the cart
cartItems.unshift("Butter");

//Removing the first item from the cart (Butter)
cartItems.shift();

//Logging the final array to the console
console.log(`Final cart items: ${cartItems}`);

//Task 4 - Price Adjustments

//Declaring an array with original prices
let prices = [100, 200, 300];

//Applying a 10% discount to each price in the array
let discountedPrices = prices.map(price => price * 0.9);

//Logging the new array with discounted prices to the console
console.log(`Discounted prices: ${discountedPrices}`);

//Task 5 - Product Availability

//Declaring an array representing the product quantities
let inventory = [4, 6, 7, 0, 3];

//Filtering out the products that are out of stock to create a new array of available stock only
let availableStock = inventory.filter(quantity => quantity > 0);

//Logging the array of available stock to the console
console.log(`Available stock: ${availableStock}`);

//Task 6 - Revenue Calculation

//Declaring an array representing sales revenue from different transactions
let sales = [500, 300, 200, 400];

//Adding up all sales amounts using the reduce method to calculate the total revenue
let totalRevenue = sales.reduce((total, sale) => total + sale, 0);

//Logging the total revenue to the console
console.log(`Total revenue: $${totalRevenue}`);