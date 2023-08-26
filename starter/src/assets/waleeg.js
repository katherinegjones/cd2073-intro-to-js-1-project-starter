const products = [
    {name: 'Orange', price: 5, productId: 1001, img: 'orange.jpg', quantity: 0},
    {name: 'Strawberry', price: 4, productId: 1002, img: 'strawberry.jpg', quantity: 0},
    {name: 'Cherry', price: 3, productId: 1003, img: 'cherry.jpg', quantity: 0},
    ]
    let cart = [];
    function addProductToCart(productId) {
      let addProductToCart = cart.find((cart) => cart.name === item.name);
      if ( addProductToCart) {
        addProductToCart.quantity++;
      } else {
        cart.push({...item, quantity:1});
      }
    }
    function increaseQuantity(productId) {
      let increaseQuantity = cart.find((cart) => cart.name === item.name);
      if (increaseQuantity) {
        increaseQuantity.quantity++;
    };
    function   decreaseQuantity(productId) {
      let decreaseQuantity = cart.find((cart) => cart.name === item.name);
      if (decreaseQuantity) {
        decreaseQuantity.quantity--;
      } else {
      }
    }
    function removeProductFromCart(productId) {
    let removeProductFromCart = cart.find((cart) => cart.name === item.name);
    if( removeProductFromCart >= 0) {
      cart.splice(removeProductFromCart, 1);
    }
      }
    }
    function cartTotal() {
      let total = 0
      for ( let i = 0; i < cart.length; i += 1) {
        total += cart[i].price * cart[i].quantity
      }
      return total
      };
    function emptyCart(cart) {
      for( let item in cart) {
        cart[item] = 0;
      }
      return cart;
    };
    /* Create a function named pay that takes in an amount as an argument
      - pay will return a negative number if there is a remaining balance
      - pay will return a positive number if money should be returned to customer
    */function pay(amount) {
    const totalPrice = cartTotal
    const difference = totalPrice - amount;
    if(difference > 0) {
      console.log('Thank you for your payment. You still owe -$' + difference + '.')
    } else if (difference < 0) {
      console.log('Thank you for your payment. Your change is $' + difference + '.')
    } else {
      console.log('Thank you for your payment.')
    }
    };
    /* Place stand out suggestions here (stand out suggestions can be found at the bottom of the project rubric.)*/
    /* The following is for running unit tests.
       To fully complete this project, it is expected that all tests pass.
       Run the following command in terminal to run tests
       npm run test
    */
    module.exports = {
      products,
      cart,
      addProductToCart,
      increaseQuantity,
      decreaseQuantity,
      removeProductFromCart,
      cartTotal,
      pay,
      emptyCart,
      /* Uncomment the following line if completing the currency converter bonus */
      // currency
    }