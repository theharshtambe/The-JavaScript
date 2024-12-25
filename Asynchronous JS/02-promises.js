const cart = ['item1', 'item2', 'item3', 'item4', 'item5'];

// API to create an order
function createOrder(cart) {
   return new Promise((resolve, reject) => {
      if (!validateCart(cart)) {
         reject(new Error('Cart is not valid'));
      }

      const orderId = '13245';

      if (orderId) {
         setTimeout(() => {
            resolve(orderId);
         }, 5000);
      }
   });
}

function validateCart(cart) {
   return true;
}

// API to proceed to payment
function proccedToPayment(orderId) {
   return new Promise((resolve, reject) => {
      if (orderId) {
         resolve('Payment Successful');
      } else {
         reject(new Error('Payment Failed'));
      }
   });
}

// API to show order summary
function showOrderSummary(paymentInfo) {
   return new Promise((resolve, reject) => {
      if (paymentInfo) {
         resolve('Order Summary');
      } else {
         reject(new Error('Something went wrong'));
      }
   });
}

// API to update the wallet balance
function updateWallet(orderSummary) {
   return new Promise((resolve, reject) => {
      if (orderSummary) {
         resolve('Wallet Balance Updated');
      } else {
         reject(new Error('Something went wrong'));
      }
   });
}

createOrder(cart)
   .then((orderId) => {
      console.log(orderId);
      return proccedToPayment(orderId); // Passes orderId to proceedToPayment
   })
   .then((paymentInfo) => {
      console.log(paymentInfo);
      return showOrderSummary(paymentInfo); // Passes paymentInfo to showOrderSummary
   })
   .then((orderSummary) => {
      console.log(orderSummary);
      return updateWallet(orderSummary); // Passes orderSummary to updateWallet
   })
   .then((walletUpdate) => {
      console.log(walletUpdate); // Logs final wallet update message
   })
   .catch((error) => {
      console.log(error.message); // Logs any errors in the promise chain
   });
