// Navbarconst

window.addEventListener("scroll", function () {
    const navBar = document.getElementById("navbar");
    navBar.classList.toggle("sticky", window.scrollY > 0);
});
// Hamburger Menu
const hamburger = document.querySelector(".icn_bars");
const navLink = document.querySelector(".navbar_link");
const linkNav = document.querySelectorAll(".link_nav");

hamburger.addEventListener("click", () => {
    navLink.classList.toggle("active");
});
window.addEventListener("click", () => {
    linkNav.forEach(function (val, i) {
        linkNav[i].addEventListener("click", () => {
            navLink.classList.remove("active");
        });
    });
});

// Validasi Kontak
const btnKontak = document.getElementById("btn_kontak");
const inputKontak = document.getElementById("input_pesanan_kontak").value;
const inptConvert = inputKontak.split(" ", 100);

let pesan = `https://wa.me/6283139001978?text=${inptConvert.join("%20")}`;

btnKontak.addEventListener("click", function () {
    btnKontak.setAttribute("href", pesan);
});
