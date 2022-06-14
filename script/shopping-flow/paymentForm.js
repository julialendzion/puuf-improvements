console.log("hejka to form.js");

const form = document.querySelector("#payment-form");
// console.log(form.elements);

const handleSubmit = (e) => {
  e.preventDefault();
  let myForm = document.getElementById("payment-form");
  let formData = new FormData(myForm);
  document.querySelector("button[id=place-order]").disabled = true;
  fetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams(formData).toString(),
  })
    .then(() => {
      console.log("form submited sucesfully");
      window.location.href = "orderConfirmation.html";
    })
    .catch((error) => alert(error));
};

let radio = document.querySelector('input[type="radio"]');

document.querySelector("#cardMethod").addEventListener("click", radioCheck);

function radioCheck() {
  document.getElementById("cardNumber").required = radio.checked;
  document.getElementById("month").required = radio.checked;
  document.getElementById("year").required = radio.checked;
  document.getElementById("nameCard").required = radio.checked;
  document.getElementById("CVV").required = radio.checked;
}
form.addEventListener("submit", handleSubmit);

document.getElementById("cardSection").style.display = "none";

document.querySelector("#cardMethod").addEventListener("click", show);
document.querySelector("#mobilepayMethod").addEventListener("click", show1);
document.querySelector("#paypayMethod").addEventListener("click", show1);

function show() {
  document.getElementById("cardSection").style.display = "block";
}

function show1() {
  document.getElementById("cardSection").style.display = "none";
}

// function removeMessege() {
//   document.querySelector("#confirmation-text").classList.add("hidden");
// }
// do
