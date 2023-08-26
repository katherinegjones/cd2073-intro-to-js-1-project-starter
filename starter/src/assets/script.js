/* Create an array named products which you will use to add all of your product object literals that you create in the next step. */

const products = [
  {
    name: "Cherry",
    price: .25,
    quantity: 0,
    productId: 101,
    image: "../images/cherry.jpg"
  },
  {
    name: "Orange",
    price: 1.00,
    quantity: 0,
    productId: 102,
    image: "images/orange.jpg"
  },
  {
    name: "Strawberry",
    price: .50,
    quantity: 0,
    productId: 103,
    image: "../images/strawberry.jpg"
  }
]
/* Create 3 or more product objects using object literal notation 
   Each product should include five properties
   - name: name of product (string)
   - price: price of product (number)
   - quantity: quantity in cart should start at zero (number)
   - productId: unique id for the product (number)
   - image: picture of product (url string)
*/

/* Images provided in /images folder. All images from Unsplash.com
   - cherry.jpg by Mae Mu
   - orange.jpg by Mae Mu
   - strawberry.jpg by Allec Gomes
*/

/* Declare an empty array named cart to hold the items in the cart */
let cart = []

const addProductToCart = (selectedProdId) => {
  const productToAdd = products.find(product => product.productId === selectedProdId)
  const productInCart = cart.find(product => product?.productId === selectedProdId)
  
  if (!productInCart){
    productToAdd.quantity++
    cart.push(productToAdd)
  }else {
    increaseQuantity(selectedProdId)
  }
}
/* Create a function named addProductToCart that takes in the product productId as an argument
  - addProductToCart should get the correct product based on the productId
  - addProductToCart should then increase the product's quantity
  - if the product is not already in the cart, add it to the cart
*/

const increaseQuantity = (selectedProdId) => {
  const productToIncrease = cart.find(product => product.productId === selectedProdId)
  productToIncrease.quantity += 1
}
/* Create a function named increaseQuantity that takes in the productId as an argument
  - increaseQuantity should get the correct product based on the productId
  - increaseQuantity should then increase the product's quantity
*/

const decreaseQuantity = (selectedProdId) => {
  const productToDecrease = cart.find(product => product.productId === selectedProdId)
  if (productToDecrease.quantity === 1){
    removeProductFromCart(selectedProdId)
  }
  else productToDecrease.quantity -= 1
}
/* Create a function named decreaseQuantity that takes in the productId as an argument
  - decreaseQuantity should get the correct product based on the productId
  - decreaseQuantity should decrease the quantity of the product
  - if the function decreases the quantity to 0, the product is removed from the cart
*/

const removeProductFromCart = (selectedProdId) => {
  const itemToRemove = cart.find(product => product.productId === selectedProdId)
  itemToRemove.quantity = 0
  const removeIndex = cart.indexOf(itemToRemove)
  cart.splice(removeIndex, 1)
}
/* Create a function named removeProductFromCart that takes in the productId as an argument
  - removeProductFromCart should get the correct product based on the productId
  - removeProductFromCart should update the product quantity to 0
  - removeProductFromCart should remove the product from the cart
*/

/* Create a function named cartTotal that has no parameters
  - cartTotal should iterate through the cart to get the total of all products
  - cartTotal should return the sum of the products in the cart
*/
const cartTotal = () => {
  const total = cart.reduce((runningTotal, item) => {
    return runningTotal + (item.quantity * item.price)
  }, 0)
  return total
} 

/* Create a function called emptyCart that empties the products from the cart */
let totalReceived = 0
const pay = (receivedAmount) => {
  const totalCost = cartTotal()
  totalReceived += receivedAmount
  const balance = totalReceived - totalCost
  if (balance > 0){
    totalReceived = 0
  }
  return balance
}
/* Create a function named pay that takes in an amount as an argument
  - pay will return a negative number if there is a remaining balance
  - pay will return a positive number if money should be returned to customer
*/

/* Place stand out suggestions here (stand out suggestions can be found at the bottom of the project rubric.)*/

const emptyCart = () => {
  cart = []
}

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
