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

let radio = document.querySelector('label[for="cardMethod"]');
document.getElementById("cardSection").style.display = "none";

if ((radio.checked = true)) {
  document.querySelector("#cardMethod").addEventListener("click", show);
  document.querySelector("#mobilepayMethod").addEventListener("click", show1);

  function show() {
    document.getElementById("cardSection").style.display = "block";
  }

  function show1() {
    document.getElementById("cardSection").style.display = "none";
  }
  document.querySelector("#cardMethod").addEventListener("click", radioCheck);

  function radioCheck() {
    document.getElementById("cardNumber").required = true;
    document.getElementById("month").required = true;
    document.getElementById("year").required = true;
    document.getElementById("nameCard").required = true;
    document.getElementById("CVV").required = true;
  }
} else {
  document.getElementById("cardNumber").required = false;
  document.getElementById("month").required = false;
  document.getElementById("year").required = false;
  document.getElementById("nameCard").required = false;
  document.getElementById("CVV").required = false;
}

form.addEventListener("submit", handleSubmit);
