/* 📝 main.js */
let errMsg,
  successMessageAlert,
  email,
  dismissAlert,
  messageAlertContent,
  subscribeBtn,
  getUserEmail;

errMsg = document.querySelector(".error-message");
email = document.getElementById("email");
successMessageAlert = document.getElementById("success-message-alert");
dismissAlert = document.getElementById("dismiss-alert");
messageAlertContent = document.getElementById("alert-message-content");
subscribeBtn = document.getElementById("subscribeBtn");
getUserEmail = document.getElementById("getUserEmail");

let checkMail = new RegExp(
  "([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|\"([]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|[[\t -Z^-~]*])"
);

// 💬 "click" EventListener for signUp form
subscribeBtn.addEventListener("click", () => {
  // 💬 Condition
  if (email.value.match(checkMail)) {
    errMsg.innerText = " ";
    messageAlertContent.style.display = "grid"; // 💬 Display Success Message
    successMessageAlert.style.display = "grid"; // 💬 Display Success Message
    getUserEmail.innerText = email.value; // 💬 using DOM to display email.value in success message
    console.log(`User Email: ${email.value}`); // 💬 email.value
    console.log(getUserEmail); // 💬 getUserEmail
    return true;
  }
  // 💬 Display Error Message
  else {
    errMsg.innerText = "Valid email required";
    email.classList.add("invalid-email");
    return false;
  }
});
// 💬 Hide Success Message
dismissAlert.addEventListener("click", () => {
  messageAlertContent.style.display = "none";
  successMessageAlert.style.display = "none";
});
