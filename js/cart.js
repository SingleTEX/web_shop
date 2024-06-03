document.addEventListener('DOMContentLoaded', function() {

    function calculateLinePrice(product) {
      var quantity = product.querySelector('.product-quantity input').value;
      var price = parseFloat(product.querySelector('.product-price').textContent);
      return (quantity * price).toFixed(2);
    }
  
    function updateLinePrice(product) {
      var linePrice = product.querySelector('.product-line-price');
      linePrice.textContent = calculateLinePrice(product);
    }
  
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

    var quantityInputs = document.querySelectorAll('.product-quantity input');
    quantityInputs.forEach(function(input) {
      input.addEventListener('input', function() {
        var product = this.closest('.product');
        updateLinePrice(product);
        updateCartTotals();
      });
    });
  
    var removeButtons = document.querySelectorAll('.remove-product');
    removeButtons.forEach(function(button) {
      button.addEventListener('click', function() {
        var product = this.closest('.product');
        product.remove();
        updateCartTotals();
      });
    });
  
    updateCartTotals();
  });
  
  function showPayment() {
    var paymentSection = document.getElementById("paymentSection");
  var shoppingCart = document.querySelector(".shopping-cart");
  paymentSection.style.display = "block";
  shoppingCart.style.display = "none";
  }

    document.addEventListener('DOMContentLoaded', function() {
      const libraryButton = document.getElementById('libraryButton');
      
      if (libraryButton) {
          libraryButton.addEventListener('click', function() {
              
              window.location.href = 'library.html';
          });
      } else {
          console.error('Element with ID "libraryButton" not found.');
      }
  });
  
