let numero1 = 0
let numero2 = 0
let cifra = 10
let isInNumTwo = false
let operazione = ""

window.addEventListener('load', function () {
  update();
})

function update(){
	let elements  = document.getElementsByClassName("numero1")
	for(let i= 0; i< elements.length; i++){
		elements[i].innerHTML = numero1
	}
	elements = document.getElementsByClassName("numero2")
	for(let i= 0; i< elements.length; i++){
		elements[i].innerHTML = numero2
	}
	displayUpdater()
	//risultato(0)
}

function displayUpdater(){
  let display = document.getElementById("display")
  if(!isInNumTwo){
    display.innerHTML = numero1
  } else {
    display.innerHTML = numero1 + " " + operazione + " " + numero2
  }
}

function risultato(num){
  document.getElementById("risultato").innerHTML = num
  document.getElementById("display").innerHTML = num
}

function calcola(){
  switch(operazione){
    case '+':
      risultato(numero1 + numero2)
      break
    case '-':
      risultato(numero1 - numero2)
      break
    case '*':
   	  risultato(numero1 * numero2)
      break
    case '/':
      risultato(numero1 / numero2)
      break;
    default:
      alert("Operazione non trovata")
      
  }
}

function operazioneClicked(el){
  switch(el){
    case '+':     
    case '-':     
    case '*':   	  
    case '/':      
    default:
		
		isInNumTwo = true
		operazione = el
		operazioneHTML(operazione)
	  displayUpdater()
		console.log(operazione)
		return;
  }
}

function operazioneHTML(operazioneInnerHTML){
	let op = document.getElementsByClassName("operazione")
	elements = document.getElementsByClassName("operazione")
	for(let i= 0; i< elements.length; i++){
		elements[i].innerHTML = operazioneInnerHTML
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
  risultato(0)
  update()
  operazioneHTML("")
}



