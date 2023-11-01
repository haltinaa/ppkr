const playButton = document.getElementById("playButton");
const audioPlayer = document.getElementById("audioPlayer");
const menuIcon = document.getElementById("menuIcon");
const navMenu = document.getElementById("navMenu");
playButton.addEventListener("click", function () {
    audioPlayer.play();
});

playButton.addEventListener("mouseover", function () {
    playButton.classList.add("animate");
});

playButton.addEventListener("mouseout", function () {

    playButton.style.backgroundColor = "white";
});


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

