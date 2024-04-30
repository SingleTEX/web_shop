document.addEventListener('DOMContentLoaded', function() {
    var burgerMenu = document.getElementById('burger-menu');
    var dropdownContent = document.getElementById('dropdown-content');
  
    burgerMenu.addEventListener('click', function() {
      dropdownContent.classList.toggle('active');
    });
  });