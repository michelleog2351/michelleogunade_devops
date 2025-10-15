/**
 * @author Michelle Ogunade
 * @function checkLogin
 * @description This function checks if the provided username and password match the predefined credentials.
 * @param {string} username - The username of the user
 * @param {string} password - The password of the user
 * @returns {boolean} - Returns true if login is successful, false otherwise
 */

function checkLogin(username, password) {
  if (username === "test@example.com" && password === "123456") {
    return true;
  } else {
    return false;
  }
}