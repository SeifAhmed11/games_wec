let m1 =document.querySelector("#home");
let m2 =document.querySelector("#kinds");
let m3 =document.querySelector("#history");
let m4 =document.querySelector("#about");

m2.remove();
m3.remove();
m4.remove();


function home() {
    m2.remove();
    m3.remove();
    m4.remove();
    document.body.appendChild(m1);
}

function kinds() {
    m3.remove();
    m1.remove();
    m4.remove();
    document.body.appendChild(m2);
}

function history() {
    m1.remove();
    m2.remove();
    m4.remove();
    document.body.appendChild(m3);
}

function about() {
    m1.remove();
    m2.remove();
    m3.remove();
    document.body.appendChild(m4);
}


setInterval(myTimer, 5000);

function myTimer() {
    document.getElementById("loa").remove() ;
}