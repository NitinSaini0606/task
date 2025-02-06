let firstPage = document.querySelector(".firstPage");
let login = document.querySelector(".login");
let hello = document.querySelector(".hello");
let pls = document.querySelector(".pls");
let jns = document.querySelector(".jns");
let afterClick = document.querySelector(".afterClick");
let pers = document.querySelector(".pers");
let sgn = document.querySelector(".sgn");





login.addEventListener("click" , function(){
    hello.style.display='none';
    pls.style.display='none';
    jns.style.display='none';
    login.style.display='none';
    afterClick.style.display='block';
  

});
sgn.addEventListener("click", function(){
    hello.style.display='block';
    pls.style.display='block';
    jns.style.display='block';
    login.style.display='block';
    afterClick.style.display='none';

});