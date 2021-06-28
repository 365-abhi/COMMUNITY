var fn;
var sn;
var e;
var u;
var p;
var cp; 
var us;
var pw;

function chckpwd()
{
    fn = document.getElementById("fname").value;
    sn = document.getElementById("sname").value;
    e = document.getElementById("email").value;
    u = document.getElementById("uid").value;
    p = document.getElementById("pwd").value;
    cp = document.getElementById("cpwd").value;
    if (fn == "" || sn == "" || e == "" || u == "" || p == "" || cp == "")
    {
        document.getElementById("test1").innerHTML = "Please enter all the fields";
    }
    else
    {
        if (p == cp)
        {
//            window.location = "Login.html";
            $('#signupModal').modal('hide');
//            document.getElementById("test1").innerHTML = "";
            
        }
        else
        {
            document.getElementById("test1").innerHTML = "Passwords didnot Match";
        }
    }
    console.log(u, p);
}

function login()
{
    console.log(u, p);
    us = document.getElementById("usid").value;
    pw = document.getElementById("pass").value;
    
    if (us == "" || pw == "")
    {
        document.getElementById("test").innerHTML = "You haven't filled anything";
    }
    else
    {
        if (us == u && pw == p)
        {
            window.location = "Home.html"
        }
        else
        {
            document.getElementById("test").innerHTML = "Get your own account";
        }
    }
    console.clear();
}

function emp()
{
    document.getElementById("test").innerHTML = "";
    document.getElementById("test1").innerHTML = "";
}
