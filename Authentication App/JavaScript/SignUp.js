const names = document.getElementById("name");
const username = document.getElementById("username");
var password1 = document.getElementById("password1");
const password2 = document.getElementById("password2");
const create  = document.getElementById("create");
let userlist = [];

create.addEventListener("click",function()
{
  if(localStorage.getItem("userlist"))
  {
    userlist = JSON.parse(localStorage.getItem("userlist"));
  }

  let result = userlist.filter(function(data)
  {
    if(data.username == username.value)
    {
     return true;
    }
   });

   if(result.length != 0)
   {
     alert("Username already taken!!");
     return;
   }

   if(password1.value != password2.value)
  {
    alert("Passwords do not match!!");
    return;
  }

  let user = {};
  user.names = names.value;
  user.username  = username.value;
  user.password = password1.value;
  userlist.push(user);
  localStorage.setItem("userlist", JSON.stringify(userlist));
  alert("Account created successfully");  
});

