let navbar = document.querySelector(".navbar");
document.querySelector("#menu-bar").onclick = () => {
  navbar.classList.toggle("active");
};

let search = document.querySelector(".search");
document.querySelector("#search").onclick = () => {
  search.classList.toggle("active");
};

var swiper = new Swiper(".product-row", {
  slidesPerView: 1,
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});
