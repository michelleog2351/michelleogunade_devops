$(document).ready(function () {
  nav();
  footer();

  $("#registerForm").append(`
      <div class="row">
          <div class="col-md-6 mb-3">
              <label for="registerFName" class="form-label">First Name</label>
              <input type="text" class="form-control" id="registerFName" name="registerFName" required>
          </div>
          
          <div class="col-md-6 mb-3">
              <label for="registerLName" class="form-label">Last Name</label>
              <input type="text" class="form-control" id="registerLName" name="registerLName" required>
          </div>
      </div>

      <div class="mb-3">
          <label for="registerEmail" class="form-label">Email</label>
          <input type="email" class="form-control" id="registerEmail" name="registerEmail" placeholder="example@atu.ie" required>
      </div>

      <div class="mb-3">
          <label for="registerphoneNo" class="form-label">Phone No.</label>
          <input type="tel" class="form-control" id="registerphoneNo" name="registerphoneNo" placeholder="+353 564 7891" required>
      </div>

      <div class="mb-3">
          <label for="registerUsername" class="form-label">Username</label>
          <input type="text" class="form-control" id="registerUsername" name="registerUsername" placeholder="firstname.lastname" required>
      </div>

      <div class="mb-3">
          <label for="registerPassword" class="form-label">Password</label>
          <input type="password" class="form-control" id="registerPassword" name="password" required>
      </div>

      <div class="mb-3">
          <label for="registerConfirmPassword" class="form-label">Confirm Password</label>
          <input type="password" class="form-control" id="registerConfirmPassword" name="confirmPassword" required>
      </div>
      <br>
      <button type="submit" class="btn btn-primary w-100" id="registerButton">Register</button>
  `);

  // Handle input validation dynamically (show errors on blur or input events)
  $("input").on("blur", function () {
    validateInput($(this));
  });

  // Validate input fields
  function validateInput(input) {
    const id = input.attr("id");
    const value = input.val();

    switch (id) {
      case "registerEmail":
        validateEmail(value);
        break;
      case "registerphoneNo":
        validatePhone(value);
        break;
      case "registerUsername":
        validateUsername(value);
        break;
      case "registerPassword":
        validatePassword(value);
        break;
      case "registerConfirmPassword":
        validateConfirmPassword(value);
        break;
    }
  }

  // Email validation
  function validateEmail(value) {
    var emailRegEx = /^[a-zA-Z0-9._%+-]+@atu\.ie$/;
    if (!emailRegEx.test(value)) {
      showAlert("#registerEmail", "Please enter a valid atu.ie email.");
    } else {
      hideAlert("#registerEmail");
    }
  }

  // Phone number validation
  function validatePhone(value) {
    var phoneNoRegEx =
      /^(\+\d{1,4}[\s]?\d{1,4}[\s]?\d{1,4}|\d{3}[\s]?\d{3}[\s]?\d{4})$/;
    if (!phoneNoRegEx.test(value)) {
      showAlert("#registerphoneNo", "Please enter a valid phone number.");
    } else {
      hideAlert("#registerphoneNo");
    }
  }

  // Username validation
  function validateUsername(value) {
    var usernameRegEx = /^[a-zA-Z]{3,20}\.[a-zA-Z]{3,20}$/;
    if (!usernameRegEx.test(value)) {
      showAlert(
        "#registerUsername",
        "Please enter a valid username (e.g., firstname.lastname)."
      );
    } else {
      hideAlert("#registerUsername");
    }
  }

  // Password validation
  function validatePassword(value) {
    var passwordRegEx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{9,}$/;
    if (!passwordRegEx.test(value)) {
      showAlert(
        "#registerPassword",
        "Password must be at least 9 characters long, with a mix of letters, numbers, and special characters."
      );
    } else {
      hideAlert("#registerPassword");
    }
  }

  // Confirm password validation
  function validateConfirmPassword(value) {
    var password = $("#registerPassword").val();
    if (value !== password) {
      showAlert("#registerConfirmPassword", "Passwords do not match!");
    } else {
      hideAlert("#registerConfirmPassword");
    }
  }

  // Show error alert below input
  function showAlert(inputId, message) {
    const $input = $(inputId);
    const $next = $input.next(".alert-danger");
    if ($next.length) {
      $next.text(message); // Update existing error message
    } else {
      $input.after(`<div class="alert alert-danger mt-2">${message}</div>`);
    }
  }

  // Hide error alert
  function hideAlert(inputId) {
    const $input = $(inputId);
    const $next = $input.next(".alert-danger");
    if ($next.length) {
      $next.remove();
    }
  }

  // Form submission handler
  $("#registerForm").submit(function (e) {
    e.preventDefault();

    var registerFName = $("#registerFName").val();
    var registerLName = $("#registerLName").val();
    var registerEmail = $("#registerEmail").val();
    var registerphoneNo = $("#registerphoneNo").val();
    var registerUsername = $("#registerUsername").val();
    var registerPassword = $("#registerPassword").val();

    // Validation check for all fields
    if (
      $("#registerEmail").next(".alert-danger").length ||
      $("#registerphoneNo").next(".alert-danger").length ||
      $("#registerUsername").next(".alert-danger").length ||
      $("#registerPassword").next(".alert-danger").length ||
      $("#registerConfirmPassword").next(".alert-danger").length
    ) {
      return; // Don’t submit if any errors
    }

    // Disable the submit button while processing
    $("#registerButton").prop("disabled", true);

    $.ajax({
      url: "/register",
      type: "POST",
      contentType: "application/json",
      data: JSON.stringify({
        first_name: registerFName,
        last_name: registerLName,
        email: registerEmail,
        phone_no: registerphoneNo,
        username: registerUsername,
        password: registerPassword,
        balance: 0.0, // Starting balance
      }),
      success: function (response) {
        alert(response);
        $("#registerButton").prop("disabled", false);
        location.replace("http://localhost:3000/index.html");
      },
      error: function (xhr, status, error) {
        alert(xhr.responseText);
        $("#registerButton").prop("disabled", false);
      },
    });
  });
});