
const increment = document.querySelector (".inc");
const decrease = document.querySelector (".dec");
const restart = document.querySelector (".res");
const conta = document.querySelector (".contador");
let message = document.querySelector (".message");
let message2 = document.querySelector (".message2");
let counter = 0

increment.addEventListener("click", aumentar);
decrease.addEventListener("click", diminuir);
restart.addEventListener("click", reiniciar);

function aumentar(){
	if (counter>=0) {
		counter++
		conta.innerText = counter
	}
	messageColorWhite();
	
}

function diminuir(){
	if (counter>0) {
		counter--
		conta.innerText = counter
	}
	messageColor();

	
}


function reiniciar(){
	conta.innerText = 0
	counter = 0
	messageColor();

	
}

function messageColor() {
	if (counter<=0) {
		message.innerText = "Seu contador chegou a 0"
		message2.innerText = "Inicie sua contagem!"
		message.style.color = "yellow"
		message2.style.color = "yellow"

	}
}



function messageColorWhite(){
if (counter>0) {
		message.innerText = "Contando!"
		message2.innerText = ""
		message.style.color = "white"
	}
}

