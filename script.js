const rättAnvändarnamn = "test";
const rättLösenord = "1234";

function lyckadInloggning(){
    document.getElementById("start").style.display = "none";
}

function testaLoggaIn (){

    let användarnamn = document.getElementById("användarnamn").value;
    let lösenord = document.getElementById("lösenord").value;
    let rättInloggningsuppgifter = Boolean(false);

    if (användarnamn == "test" && lösenord == "1234"){
        rättInloggningsuppgifter = "true";
        lyckadInloggning();
    }
    else rättInloggningsuppgifter = "false";
    
    console.log ("Användarnamn: " + användarnamn);
    console.log ("Lösenord: " + lösenord);
    console.log ("Rätt inloggningsuppgifter? = " + rättInloggningsuppgifter);
}

