document.addEventListener('DOMContentLoaded', function() {
    // Function to calculate the total line price for a product
    function calculateLinePrice(product) {
      var quantity = product.querySelector('.product-quantity input').value;
      var price = parseFloat(product.querySelector('.product-price').textContent);
      return (quantity * price).toFixed(2);
    }
  
    // Function to update the total line price for a product
    function updateLinePrice(product) {
      var linePrice = product.querySelector('.product-line-price');
      linePrice.textContent = calculateLinePrice(product);
    }
  
    // Function to update the cart totals
    function updateCartTotals() {
      var products = document.querySelectorAll('.product');
      var subtotal = 0;
      products.forEach(function(product) {
        subtotal += parseFloat(calculateLinePrice(product));
      });
      var tax = (subtotal * 0.05).toFixed(2);
      var total = (subtotal + parseFloat(tax)).toFixed(2);
      document.getElementById('cart-subtotal').textContent = subtotal.toFixed(2);
      document.getElementById('cart-tax').textContent = tax;
      document.getElementById('cart-total').textContent = total;
    }
  
    // Event listeners for quantity input changes
    var quantityInputs = document.querySelectorAll('.product-quantity input');
    quantityInputs.forEach(function(input) {
      input.addEventListener('input', function() {
        var product = this.closest('.product');
        updateLinePrice(product);
        updateCartTotals();
      });
    });
  
    // Event listeners for remove buttons
    var removeButtons = document.querySelectorAll('.remove-product');
    removeButtons.forEach(function(button) {
      button.addEventListener('click', function() {
        var product = this.closest('.product');
        product.remove();
        updateCartTotals();
      });
    });
  
    // Initial update of cart totals
    updateCartTotals();
  });
  
  // Function to show payment section
  function showPayment() {
    var paymentSection = document.getElementById("paymentSection");
  var shoppingCart = document.querySelector(".shopping-cart");
  paymentSection.style.display = "block";
  shoppingCart.style.display = "none";
  }

  document.addEventListener('DOMContentLoaded', function() {
    // Get the library button element
    var libraryButton = document.getElementById('libraryButton');

    // Add event listener to the library button
    libraryButton.addEventListener('click', function() {
        // Redirect to the library file
        window.location.href = 'library.html';
    });
});
