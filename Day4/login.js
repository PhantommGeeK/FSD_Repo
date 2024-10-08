function login() {
    let username = document.getElementById("username").value;
    let pass = document.getElementById("password").value;
    let p1 = document.getElementById("result")
    if(username == "admin")
    {
        if(pass = "admin")
        {
            p1.innerText = "Welcome Admin";
        }
        else{
            p1.innerText = "Invalid Password";
        }
    }
    else{
        p1.innerText = "Invalid Username";
    }
}

function validate() {
    let username = document.getElementById("username").value;
    let pass = document.getElementById("password").value;
    let p1 = document.getElementById("result")
    if(username.length < 10 || username.length == 0)
    {
        p1.innerText = "Username cannot be less than 10 characters";
    }
    else if(pass.length == 0 || pass.length <10)
    {
        p1.innerText = "Password cannot be empty";
    }
    else{
        
    }
}