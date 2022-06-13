/*MENU*/
document.addEventListener("click", (x) => 0);
const menu = document.querySelector("#menuSec nav");

document.querySelector("#menuSec .closeMenu").addEventListener("click", closeMenu);
document.querySelector("#menuSec .openMenu").addEventListener("click", openMenu);

function closeMenu() {
  menu.style.top = "-100vh";
}

function openMenu() {
  menu.style.top = "0";
}

const scrollElements = document.querySelectorAll(".js-scroll");

const elementInView = (el, dividend = 1) => {
  const elementTop = el.getBoundingClientRect().top;

  return elementTop <= (window.innerHeight || document.documentElement.clientHeight) / dividend;
};

const elementOutofView = (el) => {
  const elementTop = el.getBoundingClientRect().top;

  return elementTop > (window.innerHeight || document.documentElement.clientHeight);
};

const displayScrollElement = (element) => {
  element.classList.add("scrolled");
};

const hideScrollElement = (element) => {
  element.classList.remove("scrolled");
};

const handleScrollAnimation = () => {
  scrollElements.forEach((el) => {
    if (elementInView(el, 1.25)) {
      displayScrollElement(el);
    } else if (elementOutofView(el)) {
      hideScrollElement(el);
    }
  });
};

window.addEventListener("scroll", () => {
  handleScrollAnimation();
});

/* CART */

const CART = {
  KEY: "basket",
  contents: [],
  init() {
    //contents is a temporary string

    let _contents = localStorage.getItem(CART.KEY);
    if (_contents) {
      // if there's anything there, turn it into 20 objects that we can access with the dot . notation
      CART.contents = JSON.parse(_contents);
    } else {
    }
    // I want to update the
    //this.updateDOM(); use this when we're not hardcoding the contents, and the content is read from localStorage
    CART.sync();
  },
  sync() {
    //turn CART contents array of objects into a string that we can write in localStorage
    let _cart = JSON.stringify(CART.contents);
    localStorage.setItem(CART.KEY, _cart);
  },
};

CART.init();

let cartItems = CART.contents;
let cartLenght = cartItems.length;

if (cartLenght === 0) {
  document.querySelector(".cartNav").classList.remove("items");
} else if (cartLenght >= 1) {
  document.querySelector(".cartNav").classList.add("items");
}
