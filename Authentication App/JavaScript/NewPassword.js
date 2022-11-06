function fun(){
    if(pwd.value != pwd2.value)
    {
    alert("Passwords does not match!!");
    pwd.value="";
    pwd2.value="";
    }
    else
    {
        let userlist = localStorage.getItem("userlist") ? JSON.parse(localStorage.getItem("userlist")) : [];
        let result = userlist.filter(function(data) {
            if (username.value == data.username) {
              data.password=pwd.value;
            }
        });
        localStorage.setItem("userlist", JSON.stringify(userlist));

        alert("Password Changed");
        window.location = "../HTML/SignIn.html";
        pwd.value="";
        pwd2.value="";
    }
}
