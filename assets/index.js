
const increment = document.querySelector (".inc");
const decrease = document.querySelector (".dec");
const conta = document.querySelector (".contador");
let counter = 0

increment.addEventListener("click", aumentar);
decrease.addEventListener("click", diminuir);

function aumentar(){
	if (counter>=0) {
		counter++
		conta.innerText = counter
	}
}

function diminuir(){
	if (counter>0) {
		counter--
		conta.innerText = counter
	}
}


