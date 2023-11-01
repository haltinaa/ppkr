
const menuIcon = document.getElementById("menuIcon");
const navMenu = document.getElementById("navMenu");


menuIcon.addEventListener("click", toggleNavMenu);

document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
        toggleNavMenu();
    }
});

function toggleNavMenu() {
    if (navMenu.style.display === "flex") {
        navMenu.style.display = "none";
    } else {
        navMenu.style.display = "flex";
    }
}


document.addEventListener('keydown', function (event) {
    console.log('Keypress', event.key);
});
document.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        alert('What you want to do by pressing this key?');
    } else if (event.key === 'Escape') {
        alert('You can not escape by this key. If you want to enter, press the cross item on the right-top corner');
    }
});

document.getElementById('buttonBuy1').addEventListener('click', function () {
    alert('At the moment there is no opportunity to purchase the product :(');
});

document.getElementById('buttonBuy2').addEventListener('click', function () {
    alert('At the moment there is no opportunity to purchase the product :(');
});

document.getElementById('buttonBuy3').addEventListener('click', function () {
    alert('At the moment there is no opportunity to purchase the product :(');
});

document.getElementById('buttonBuy4').addEventListener('click', function () {
    alert('At the moment there is no opportunity to purchase the product :(');
});

document.getElementById('buttonBuy5').addEventListener('click', function () {
    alert('At the moment there is no opportunity to purchase the product :(');
});

document.getElementById('buttonBuy6').addEventListener('click', function () {
    alert('At the moment there is no opportunity to purchase the product :(');
});

document.getElementById('buttonBuy7').addEventListener('click', function () {
    alert('At the moment there is no opportunity to purchase the product :(');
});

document.getElementById('buttonBuy8').addEventListener('click', function () {
    alert('At the moment there is no opportunity to purchase the product :(');
});