// Togle class active
const navbarNav = document.querySelector(".navbar-nav");
// ketika hamburger di klik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// Togle Search Active
const searchForm = document.querySelector(".search-form");
const searchBox = document.querySelector("#search-box");
// ketika search di klik
document.querySelector("#search-btn").onclick = (e) => {
  // (e) => e.preventDefault = mematikan default untuk kembali ke #
  searchForm.classList.toggle("active");
  searchBox.focus();
  e.preventDefault();
};

// Toggle class active shopping-cart
const shoppingCart = document.querySelector(".shopping-cart");
// ketika shopping-cart di klik
document.querySelector("#shopping-cart-button").onclick = (e) => {
  shoppingCart.classList.toggle("active");
  e.preventDefault();
};

// Klik diluar sidebar & elemen  untuk menghilangkan nav & search button

const hamburger = document.querySelector("#hamburger-menu");
const searchButton = document.querySelector("#search-btn");
const sc = document.querySelector("#shopping-cart-button");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

document.addEventListener("click", function (e) {
  if (!searchButton.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove("active");
  }
});
document.addEventListener("click", function (e) {
  if (!sc.contains(e.target) && !shoppingCart.contains(e.target)) {
    shoppingCart.classList.remove("active");
  }
});

//Modal Box
const itemDetailModal1 = document.querySelector("#item-detail-modal-1");
const itemDetailModal2 = document.querySelector("#item-detail-modal-2");
const itemDetailModal3 = document.querySelector("#item-detail-modal-3");
const itemDetailModal4 = document.querySelector("#item-detail-modal-4");
const itemDetailButton1 = document.querySelectorAll(".item-detail-button-1");
const itemDetailButton2 = document.querySelectorAll(".item-detail-button-2");
const itemDetailButton3 = document.querySelectorAll(".item-detail-button-3");
const itemDetailButton4 = document.querySelectorAll(".item-detail-button-4");

//Pemanggilan data btn eye

document.querySelector(".item-detail-button-1").onclick = (e) => {
  itemDetailModal1.style.display = "flex";
  e.preventDefault();
};
document.querySelector(".item-detail-button-2").onclick = (e) => {
  itemDetailModal2.style.display = "flex";
  e.preventDefault();
};
document.querySelector(".item-detail-button-3").onclick = (e) => {
  itemDetailModal3.style.display = "flex";
  e.preventDefault();
};
document.querySelector(".item-detail-button-4").onclick = (e) => {
  itemDetailModal4.style.display = "flex";
  e.preventDefault();
};

//klik tombol close
document.querySelector(".modal-1 .close-icon").onclick = (e) => {
  itemDetailModal1.style.display = "none";
  e.preventDefault();
};
document.querySelector(".modal-2 .close-icon").onclick = (e) => {
  itemDetailModal2.style.display = "none";
  e.preventDefault();
};
document.querySelector(".modal-3 .close-icon").onclick = (e) => {
  itemDetailModal3.style.display = "none";
  e.preventDefault();
};
document.querySelector(".modal-4 .close-icon").onclick = (e) => {
  itemDetailModal4.style.display = "none";
  e.preventDefault();
};

// Klik diluar close

const itemDetailModal =
  document.querySelector[
    "#item-detail-modal-1,#item-detail-modal-2,item-detail-modal-3,item-detail-modal-4"
  ];

window.onclick = (e) => {
  if (e.target === itemDetailModal) {
    itemDetailModal.style.display = "none";
  }
};
// window.onclick = (e) => {
//   if (e.target === itemDetailModal2) {
//     itemDetailModal2.style.display = "none";
//   }
// };
