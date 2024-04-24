// Navmenu functionality
const hamburgerButton = document.querySelector(".hamburger-icon");
const mobileMenu = document.querySelector(".mobile-menu");
const closeIcon = document.querySelector(".close-icon");
const menuLinks = document.querySelectorAll(".mobile-menu a");

function closeMobileMenu() {
    mobileMenu.classList.remove("active");
}

hamburgerButton.addEventListener("click", () => {
    mobileMenu.classList.toggle("active");
});

closeIcon.addEventListener("click", () => {
    closeMobileMenu();
});

// Navbar auto hide on scroll (only for phones)
function isPhone() {
    return window.innerWidth < 900;
}
if (isPhone()) {
    let lastScrollTop = 0;
    let header = document.querySelector("header");

    window.addEventListener("scroll", function () {
        let scrollTop = window.scrollY || document.documentElement.scrollTop;
        if (scrollTop > lastScrollTop) {
            header.style.top = "-100px";
        } else {
            header.style.top = "0px";
        }
        lastScrollTop = scrollTop;
    });
}
