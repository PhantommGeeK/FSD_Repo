function validated(){
    let username = document.getElementById("un").value;
    let pass = document.getElementById("pass").value;
    if(username.length <10 || username.length == 0)
        return false;
    if(pass.length <10 || pass.length == 0)
        return false;
    return true;
}