/// create a login form


$("document").ready(function () {
  $("#loginButton").click(function (e) {
    e.preventDefault();
    let username = $("#username").val();
    let password = $("#password").val();

    console.log("Username: " + username);
    console.log("Password: " + password);

    // if (email === "test@example.com" && password === "123456") {
    //   alert("Login successful!");
    // } else {
    //   alert("Invalid username or password.");
    // }
  });
});
