function nav() {
  const isLoggedIn = sessionStorage.getItem("login") === "true";

  let navOutPut = `
    <div class="container-fluid">
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse justify-content-between" id="navbarNav">
        <ul class="navbar-nav d-flex flex-row gap-3 align-items-center">
          <li class="nav-item">
            <a class="nav-link" href="index.html">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="about.html">About</a>
          </li>
        </ul>

        <ul class="navbar-nav d-flex flex-row gap-3 align-items-center">`;

  navOutPut += isLoggedIn
    ? `
        <li class="nav-item">
          <a class="nav-link" href="accountInformation.html">My Account</a>
        </li>
        <li class="nav-item">
          <button class="btn btn-danger" id="logout">Logout</button>
        </li>`
    : `
        <li class="nav-item">
          <a class="nav-link" href="login.html">Login</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="register.html">Register</a>
        </li>`;

  navOutPut += `
        </ul>
      </div>
    </div>`;

  $("nav").html(navOutPut);
}

$(document).on("click", "#logout", function (e) {
  e.preventDefault();
  sessionStorage.removeItem("login");
  location.replace("login.html");
});