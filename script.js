const rättAnvändarnamn = "test";
const rättLösenord = "1234";

document.getElementById("inloggad").hidden = true;
document.getElementById("fel").hidden= true;

function lyckadInloggning(){
    document.getElementById("inloggad").hidden = false;
}

function misslyckadInloggning(){
    document.getElementById("fel").hidden= false;
}

function testaLoggaIn(){

    let användarnamn = document.getElementById("användarnamn").value;
    let lösenord = document.getElementById("lösenord").value;
    let rättInloggningsuppgifter = Boolean(false);
    document.getElementById("start").hidden = true;
    
    if (användarnamn == "test" && lösenord == "1234"){
        rättInloggningsuppgifter = "true";
        lyckadInloggning();
    }
    else misslyckadInloggning();
    
    console.log ("Användarnamn: " + användarnamn);
    console.log ("Lösenord: " + lösenord);
    console.log ("Rätt inloggningsuppgifter? = " + rättInloggningsuppgifter);
}

function loggaUt(){
    localStorage.clear();
    /*document.getElementById("användarnamn").value = ""; //Här kunde en "reset"-funktion användas (?)
    document.getElementById("lösenord").value = "";
    document.getElementById("start").hidden = false;
    document.getElementById("inloggad").hidden = true; */
}