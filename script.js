
const header = document.querySelector("header");
const footer = document.querySelector("footer");

header.innerHTML = `
    <h1>Oktika</h1>
    <div class="navbar">
        <a href="index.html" class="active">Store</a>
        <a href="profile/cart.html">Cart</a>
        <a href="profile/profile.html">Profile</a>
        <a href="signup/sign_up.html" class="right">Sign up</a>
        <a href="signup/log_in.html" class="right">Log in</a>
        <div class="burger-menu" id="click">
            <div class="one"></div>
            <div class="two"></div>
            <div class="three"></div>
            <div class="dropdown-content">
                <a href="index.html" class="active">Store</a>
                <a href="profile/cart.html">Cart</a>
                <a href="profile/profile.html">Profile</a>
                <a href="signup/sign_up.html" class="right">Sign up</a>
                <a href="signup/log_in.html" class="right">Log in</a>
            </div>
        </div>
    </div>
`;

footer.innerHTML = ` 
    <h2>Light studio</h2>
    <p>Copyright © 2024 All rights reserved.</p>
`;
const burgerMenu = document.querySelector('.burger-menu');
const dropdownContent = document.querySelector('.dropdown-content');

burgerMenu.addEventListener('click', function () {
    dropdownContent.classList.toggle('show');
});
