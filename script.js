let numero1 = 0
let numero2 = 0
let cifra = 10
let isInNumTwo = false
let operazione = ""

window.onload = function() {
  update();

}

function update(){
  document.getElementById("numero1").innerHTML = numero1
  document.getElementById("numero2").innerHTML = numero2
  risultato(0)
}

function risultato(num){
  document.getElementById("risultato").innerHTML = num
}

function calcola(){
  switch(operazione){
    case '+':
      risultato(numero1 + numero2)
      break
    case '-':
      risultato(numero1 + numero2)
      break
    case '*':
   	  risultato(numero1 * numero2)
      break
    case '/':
      risultato(numero1 / numero2)
      break;
    default:
      
  }
}

function operazioneClicked(el){
  switch(el){
    case '+':     
    case '-':     
    case '*':   	  
    case '/':      
    default:
       if(!isInNumTwo){
         isInNumTwo = true
         operazione = el
       } 
       else {
         alert("premi uguale")
         return;
       }
      
  }
}

function clicked(el){
  console.log(el)
  
  
  if(!isInNumTwo){
    numero1 = numero1 * cifra + el
  } else {
    numero2 = numero2 * cifra + el
  }
  update()
}

function reset(){
  operazione = ""
  isInNumTwo = false
  numero1 = 0
  numero2 = 0
  update()
}



