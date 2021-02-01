
/*function validation(){
    var form = document.querySelector(".form");
    var email = document.querySelector("#login-email").value;
    var emailInput = document.querySelector("#login-email");
    
    var text = document.querySelector("#text");
    var pattern = /^([a-zA-Z-0-9\._]+)@([a-zA-Z0-9])+.([a-z]+)(.[a-z]+)?$/;

    if(pattern.test(email)){
        form.classList.add("valid");
        form.classList.remove("invalid");
        text.innerHTML = "Your Email address is valid."
        text.style.color = "#38B581"
    }else{
        form.classList.remove("valid");
        form.classList.add("invalid");
        text.innerHTML = "Your Email address is valid."
        text.style.color = "#F5363D"
    }
}*/



var form = document.querySelector(".form");
var email = document.querySelector("#login-email").value;
var emailInput = document.querySelector("#login-email");
var passInput = document.querySelector('#password');
var text = document.querySelector("#text");
var pattern = /^([a-zA-Z-0-9\._]+)@([a-zA-Z0-9])+.([a-z]+)(.[a-z]+)?$/;

emailInput.addEventListener('keydown', function(){
    if(pattern.test(email)){
        form.classList.add("valid");
        form.classList.remove("invalid");
        text.innerHTML = "Your Email address is valid."
        text.style.color = "#38B581" //Color Green
    }else{
        form.classList.remove("valid");
        form.classList.add("invalid");
        text.innerHTML = "Your Email address is invalid."
        text.style.color = "#F5363D" //Color Red
    }
})

passInput.addEventListener('keydown', function(){
    if(form.classList.contains('valid')){
        text.style.display = "none";
    } 
})