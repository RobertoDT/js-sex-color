//chiedere il nome all'utente
var nome = prompt("Inserisci il tuo nome");
//chiedere il sesso all'utente
var sesso = prompt("Inserisci il tuo sesso: maschio o femmina!!");

var element = document.getElementById("name");
//colore blu per maschi, colore rosa per femmine in base al sesso inserito
if(sesso === "maschio" || sesso === "MASCHIO" || sesso === "Maschio"){
  element.className = "blue";
  element.innerHTML = nome;
}
  else if(sesso === "femmina" || sesso === "FEMMINA" || sesso === "Femmina"){
  element.className = "pink";
  element.innerHTML = nome;
}
  else{
    alert("occhio hai sbagliato a scrivere!!!")
  }
