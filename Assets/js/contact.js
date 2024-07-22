// js/contact.js

function submitData(event) {
  event.preventDefault();

  const name = document.getElementById("input-name").value;
  const email = document.getElementById("input-mail").value;
  const phoneNumber = document.getElementById("input-number").value;
  const subject = document.getElementById("input-subject").value;
  const message = document.getElementById("input-message").value;

  console.log("Name:", name);
  console.log("Email:", email);
  console.log("Phone Number:", phoneNumber);
  console.log("Subject:", subject);
  console.log("Message:", message);
}
