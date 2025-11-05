function nav() {
  const isLoggedIn = sessionStorage.getItem("login") === "true";

  let navOutPut = `
    <div class="container-fluid">
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation"> 
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse d-flex justify-content-between" id="navbarNav">
        <!-- Left side links -->
        <ul class="navbar-nav list-unstyled d-flex flex-row gap-3 align-items-center mb-0" style="padding: 15px;">
          <li class="nav-item">
            <a class="nav-link" href="index.html">Home</a>
          </li>
        </ul>

        <!-- Right side links -->
        <ul class="navbar-nav list-unstyled d-flex flex-row gap-3 align-items-center mb-0">`;

  if (isLoggedIn) {
    navOutPut += `
          <li class="nav-item">
            <a class="nav-link" href="accountInformation.html">My Account</a>
          </li>
          <li class="nav-item">
            <button class="btn btn-danger" id="logout">Logout</button>
          </li>`;
  } else {
    navOutPut += `
          <li class="nav-item">
            <a class="nav-link" href="login.html">Login</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="register.html">Register</a>
          </li>`;
  }

  navOutPut += `
        </ul>
      </div>
    </div>`;

  $("nav").html(navOutPut);
}
//   $("#logout").click(function (e) {
//     e.preventDefault();
//     sessionStorage.removeItem("login");
//     location.replace("login.html");
//   });
// }

// function requireLogin() {
//   if (sessionStorage.getItem("login") !== "true") {
//     window.location.href = "login.html";
//   }
// }