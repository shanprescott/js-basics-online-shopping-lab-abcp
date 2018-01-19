var cart = [];

function setCart(newCart) {
  cart = newCart;
}

function total() {
  let t = 0

  for (var i = 0, l = cart.length; i < l; i++) {
    for (var item in cart[i]) {
      t += cart[i][item]
    }
  }

  return t
}

function getCart() {
  return cart;
}

function addToCart(item) {
  var currentCart = getCart();
  var price = Math.floor(Math.random * 100);

  currentCart.push({[item]: price});

  console.log(`${item} has been added to your cart.`);
  return cart;
}

function viewCart() {
  let list = [];
  let cart = getCart();

  if(cart.length === 0) {
    console.log("Your shopping cart is empty.");
    return cart;
  }

  for (let i = 0, l = cart.length; i < l; i++) {
    let key = Object.keys(cart[i])[0];
    list.push(`${key} at $${cart[i][key]}`);
  }

  console.log("In your cart, you have " + list.join(", ") + ".");

  return cart;
}

function removeFromCart(item) {
  let cart = getCart();
  let newCart = [];

  for(let i = 0, l = cart.length; i < l; i++) {
    if(!cart[i].hasOwnProperty(item)) {
      newCart.push(cart[i]);
    }
  }

  if(newCart.length === cart.length) {
    console.log("That item is not in your cart.");
  } else {
    setCart(newCart);
  }

  return getCart();
}

function placeOrder(creditCard) {
  if(creditCard === undefined) {
    console.log("We don't have a credit card on file for you to place your order.");
    return;
  }

  console.log(`Your total cost is $${total()}, which will be charged to the card ${creditCard}.`);

  setCart([]);
}
