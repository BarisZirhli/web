const contact = document.querySelector("contact-form");

let formname = document.getElementById("form-name");
let formail = document.getElementById("form-mail");
let formsub = document.getElementById("form-subject");
let formsg = document.getElementById("form-msg");
let btn = document.getElementById("btn");

contact.addEventListener("btn", (e) => {
  e.preventDefault();

  let data = {
    formname: formname.value,
    formail: formail.value,
    formsub: formsub.value,
    formsg: formsg.value,
  };

  let xhr = new XMLHttpRequest();

  xhr.open("POST", "/");
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.onload = function () {
    console.log(xhr.responseText);
    if (xhr.responseText == "success") {
      alert("email send.");
      formname.value = "";
      formail.value = "";
      formsub.value = "";
      formsg.value = "";
    } else {
      alert("something went wrong.");
    }
  };

  xhr.send(JSON.stringify(data));
});
