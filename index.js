var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var itemPrice = Math.floor(Math.random() * 100) + 1
  var caritemObj = {itemName: `${item}`, itemPrice}
  cart.push(caritemObj)
  return (`${caritemObj.itemName} has been added to your cart.`)
}

function viewCart() {
  if (cart.length === 0) {
    return ('Your shopping cart is empty.')
  } else {
    var itemsList = []
    for (let i = 0; i < cart.length; i++) {
      itemsList.push(cart[i].caritemObj.key)
    }
    return ('In your cart, you have' + itemsList)
  }
  // write your code here
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
