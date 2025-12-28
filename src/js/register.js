$(document).ready(function () {
  nav();
  footer();

  const validators = {
    registerEmail: value =>
      /^[a-zA-Z0-9._%+-]+@atu\.ie$/.test(value) ||
      "Please enter a valid atu.ie email.",

    registerphoneNo: value =>
      /^(\+\d{1,4}[\s]?\d{1,4}[\s]?\d{1,4}|\d{3}[\s]?\d{3}[\s]?\d{4})$/.test(value) ||
      "Invalid phone number.",

    registerUsername: value =>
      /^[a-zA-Z]{3,20}\.[a-zA-Z]{3,20}$/.test(value) ||
      "Use firstname.lastname format.",

    registerPassword: value =>
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{9,}$/.test(value) ||
      "Password too weak.",

    registerConfirmPassword: value =>
      value === $("#registerPassword").val() ||
      "Passwords do not match."
  };

  $("input").on("input blur", function () {
    validate($(this));
  });

  function validate($input) {
    const id = $input.attr("id");
    if (!validators[id]) return;

    const result = validators[id]($input.val());
    removeError($input);

    if (result !== true) {
      showError($input, result);
    }
  }

  function showError($input, msg) {
    $input.after(`<div class="alert alert-danger mt-2">${msg}</div>`);
  }

  function removeError($input) {
    $input.next(".alert-danger").remove();
  }

  $("#registerForm").submit(function (e) {
    e.preventDefault();

    $("input").each(function () {
      validate($(this));
    });

    if ($(".alert-danger").length) return;

    $("#registerButton").prop("disabled", true);

    $.ajax({
      url: "/register",
      method: "POST",
      contentType: "application/json",
      data: JSON.stringify({
        first_name: $("#registerFName").val(),
        last_name: $("#registerLName").val(),
        email: $("#registerEmail").val(),
        phone_no: $("#registerphoneNo").val(),
        username: $("#registerUsername").val(),
        password: $("#registerPassword").val()
      }),
      success: () => {
        alert("Registration successful!");
        location.replace("index.html");
      },
      error: xhr => {
        alert(xhr.responseText);
        console.error("Registration failed:", xhr.responseText);
        $("#registerButton").prop("disabled", false);
      }
    });
  });
});
