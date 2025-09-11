const rättAnvändarnamn = "test";
const rättLösenord = "1234";
const username = localStorage.getItem("username");
const password = localStorage.getItem("password");

document.getElementById("inloggad").hidden = true;
document.getElementById("fel").hidden= true;

function lyckadInloggning(){
    document.getElementById("inloggad").hidden = false;
    const username = localStorage.getItem("username");
    const password = localStorage.getItem("password");
   }

function misslyckadInloggning(){
    document.getElementById("fel").hidden= false;
}

function testaLoggaIn(){

    let användarnamn = document.getElementById("användarnamnInput").value;
    let lösenord = document.getElementById("lösenordInput").value;
    let rättInloggningsuppgifter = Boolean(false);
    document.getElementById("start").hidden = true;
    
    if (användarnamn == "test" && lösenord == "1234"){
        rättInloggningsuppgifter = "true";
        localStorage.setItem("username", användarnamn);
        localStorage.setItem("password", lösenord);
        lyckadInloggning();
    }
    else misslyckadInloggning();
}

function loggaUt(){
    document.getElementById("användarnamnInput").value = ""; //Här kunde en "reset"-funktion användas (?)
    document.getElementById("lösenordInput").value = "";
    document.getElementById("start").hidden = false;
    document.getElementById("inloggad").hidden = true;
    localStorage.clear();
    }