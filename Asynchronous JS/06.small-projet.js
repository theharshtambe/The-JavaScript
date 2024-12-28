// shopping cart
const cart = ['t-shirt', 'shoes', 'blazer', 'cargo pants', 'watch'];

// database
const database = {
   validCarts: ['t-shirt', 'shoes', 'blazer', 'cargo pants', 'watch'],
   walletBalance: 5000,
};

// validate the cart
function validateCart(cart) {
   return cart.every((cartItem) => database.validCarts.includes(cartItem));
}

// API to create an order
function createOrder(cart) {
   return new Promise((resolve, reject) => {
      console.log('Validating Cart...');

      if (!validateCart(cart)) {
         reject(new Error('Cart validation failed: Some items are invalid.'));
      }

      const orderId = Math.floor(10000 + Math.random() * 90000).toString();

      setTimeout(() => {
         console.log('Order created successfully!');
         resolve(orderId);
      }, 2000);
   });
}

// API to procced to payment
function proccedToPayment(orderId) {
   return new Promise((resolve, reject) => {
      console.log('Processing payment...');

      setTimeout(() => {
         const isPaymentSuccessful = Math.random() > 0.2;

         if (isPaymentSuccessful) {
            resolve({ paymentStatus: 'Successful', orderId });
         } else {
            reject(new Error('Payment failed due to insufficient funds.'));
         }
      }, 1500);
   });
}

// API to show order summary
function showOrderSummary(paymentInfo) {
   return new Promise((resolve, reject) => {
      console.log('Fetching order summary...');

      setTimeout(() => {
         if (paymentInfo.paymentStatus === 'Successful') {
            resolve({
               orderId: paymentInfo.orderId,
               items: cart,
               totalAmount: cart.length * 100,
            });
         } else {
            reject(new Error('Unable to generate order summary.'));
         }
      }, 1000);
   });
}

// API to update the wallet balance
function updateWallet(orderSummary) {
   return new Promise((resolve, reject) => {
      console.log('Updating wallet balance...');

      setTimeout(() => {
         const totalCost = orderSummary.totalAmount;
         if (database.walletBalance >= totalCost) {
            database.walletBalance -= totalCost;
            resolve(
               `Wallet balance updated successfully! Remaining balance: ${database.walletBalance}`
            );
         } else {
            reject(new Error('Not enough balance to update the wallet.'));
         }
      }, 1000);
   });
}

// Function to simulate the entire flow
async function placeOrder() {
   try {
      const orderId = await createOrder(cart);
      console.log(`Order ID: ${orderId}`);

      const paymentInfo = await proccedToPayment(orderId);
      console.log(`Payment Status: ${paymentInfo.paymentStatus}`);

      const orderSummary = await showOrderSummary(paymentInfo);
      console.log(`Order Summary: ${JSON.stringify(orderSummary)}`);

      const walletUpdateMessage = await updateWallet(orderSummary);
      console.log(walletUpdateMessage);
   } catch (error) {
      console.log(`Error: ${error.message}`);
   }
}

placeOrder();
