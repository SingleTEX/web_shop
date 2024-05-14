
const header = document.querySelector("header");
const footer = document.querySelector("footer");

header.innerHTML = `
    <h1>Oktika</h1>
    <div class="navbar">
        <a href="index.html">Store</a>
        <a href="cart.html">Cart</a>
        <a href="profile.html">Profile</a>
        <a href="sign_up.html" class="right">Log in</a>
        <div class="burger-menu" id="click">
            <div class="one"></div>
            <div class="two"></div>
            <div class="three"></div>
            <nav class="dropdown-content">
        <a href="index.html">Store</a>
        <a href="cart.html">Cart</a>
        <a href="profile.html">Profile</a>
        <a href="sign_up.html" class="right">Log in</a>
            </nav>
        </div>
    </div>
`;

footer.innerHTML = ` 
    <h2>Light studio</h2>
    <p>Copyright © 2024 All rights reserved.</p>
`;


