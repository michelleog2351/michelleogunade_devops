/**
 * @author Michelle Ogunade
 * @description This function checks if the provided username and password match the predefined credentials.
 * @version 1.0
 */

$(document).ready(function () {
  $("#loginButton").click(function (e) {
    e.preventDefault();
    let username = $("#username").val();
    let password = $("#password").val();

    console.log("Username: " + username);
    console.log("Password: " + password);
  });
});
