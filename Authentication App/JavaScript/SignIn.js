const username = document.getElementById("username");
const password = document.getElementById("password");
const login = document.getElementById("login");

login.addEventListener("click", function() {
    let userlist = localStorage.getItem("userlist") ? JSON.parse(localStorage.getItem("userlist")) : [];

    let result = userlist.filter(function(data) {
      if (username.value == data.username) {
        return data.password;
      }
    });

    if (result.length == 0) {
      alert("Username does not exist!");
      return;
    }

    console.log(result[0].password);
    if (password.value != result[0].password) {
      alert("Incorrect Password");
      return;
    }
    alert("Login successfull!");
})