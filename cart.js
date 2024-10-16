let cart = [];

function addToCart(id) {
  const newItem = {
    name: 'Stiletto Heels',
    price: 10,
    quantity: 1,
    id: id,
  };

  cart.push(newItem);
}

function removeFromCart(id) {
  const filtered = cart.filter((item) => item.id !== id);
  cart = filtered;
}

function showCart() {
  console.log(cart);
}

function updateCart(id) {
  const productToUpdate = cart.find((item) => item.id === id);

  const updatedField = {
    ...productToUpdate,
    quantity: 4,
  };

  const updatedCart = cart.map((item) => {
    if (item.id === id) {
      return updatedField;
    } else {
      return item;
    }
  });

  cart = updatedCart;
}

addToCart(1);
addToCart(2);
addToCart(3);

showCart();

removeFromCart(1);
showCart();

updateCart(2);
showCart();
