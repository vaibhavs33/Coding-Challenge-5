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