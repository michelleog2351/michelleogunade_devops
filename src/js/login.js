/**
 * @function login
 * @author Michelle Ogunade
 * @description This function checks if the provided username and password match the predefined credentials.
 * @version 1.0
 */
const validUsername = "michelle@fungames.com";
const validPassword = "1020DevOps!";

$(document).ready(function () {
  nav();
  footer();

  $("#loginForm").submit(function (e) {
    e.preventDefault();

    const username = $("#userNameID").val();
    const password = $("#passwordID").val();

    if (username === validUsername && password === validPassword) {
      sessionStorage.setItem("login", "true");
      location.replace("about.html");
    } else {
      $("#errorSpan").text("Invalid username or password. Please try again.");
    }
  });
});
