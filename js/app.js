
//login
function login() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  // Add your login validation logic here
  if (username === "naseem" && password === "1234") {
    alert("Login successful!");
    // Redirect to the home page or perform other actions
  } else {
    alert("Invalid username or password. Please try again.");
  }
}

//product

function searchProducts() {
    var searchInput = document.getElementById("searchInput");
    var searchText = searchInput.value.toLowerCase();
    var productCards = document.getElementsByClassName("card");

    for (var i = 0; i < productCards.length; i++) {
      var productCard = productCards[i];
      var productText = productCard.textContent.toLowerCase();

      if (productText.includes(searchText)) {
        productCard.style.display = "block";
      } else {
        productCard.style.display = "none";
      }
    }
  }
  function addToCart(name, price){
    alert("The Product Is Add To Cart...");
  }
//cart

  var cartItems = [
    { name: 'Product 1', quantity: 2, price: 9.99 },
    { name: 'Product 2', quantity: 1, price: 14.99 },
    { name: 'Product 3', quantity: 3, price: 5.99 }
  ];

  var cartItemsContainer = document.getElementById('cart-items');
  var totalPriceElement = document.getElementById('total-price');

  function updateCart() {
    cartItemsContainer.innerHTML = '';
    var totalPrice = 0;

    cartItems.forEach(function(item) {
      var tr = document.createElement('tr');

      var productCell = document.createElement('td');
      productCell.textContent = item.name;
      tr.appendChild(productCell);

      var quantityCell = document.createElement('td');
      quantityCell.textContent = item.quantity;
      tr.appendChild(quantityCell);

      var priceCell = document.createElement('td');
      priceCell.textContent = '$' + item.price.toFixed(2);
      tr.appendChild(priceCell);

      var totalCell = document.createElement('td');
      var total = item.quantity * item.price;
      totalCell.textContent = '$' + total.toFixed(2);
      tr.appendChild(totalCell);

      var actionCell = document.createElement('td');
      var removeButton = document.createElement('button');
      removeButton.textContent = 'Remove';
      removeButton.addEventListener('click', function() {
        removeFromCart(item);
      });
      actionCell.appendChild(removeButton);
      tr.appendChild(actionCell);

      cartItemsContainer.appendChild(tr);

      totalPrice += total;
    });

    totalPriceElement.textContent = '$' + totalPrice.toFixed(2);
  }

  function removeFromCart(item) {
    var index = cartItems.indexOf(item);
    if (index !== -1) {
      cartItems.splice(index, 1);
      updateCart();
    }
  }
  updateCart();
  function proceedToCheckout() {
    // Implement the checkout process here
    alert("Proceeding to checkout...");
  }
 
