//step-1: add click event handler with the confirm button
document.getElementById("btn-confirm").addEventListener("click", function () {
  //step-2: get the email inside the email input field
  const emailField = document.getElementById("user-email");
  const email = emailField.value;

  //step-3:get the password inside the password input field
  const passwordFeild = document.getElementById("user-password");
  const password = passwordFeild.value;
  if (email === "amuhaimenpro829@gmail.com" && password === "secretpassword") {
    window.location.href = "insidebank.html";
  } else {
    console.log("invalid user");
  }
});
