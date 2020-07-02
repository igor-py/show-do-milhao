const respostas = document.querySelectorAll(".container-button");
respostas[0].addEventListener("click", verificaResposta);

respostas.forEach((resposta) => {
	resposta.addEventListener("click", verificaResposta);
});

function verificaResposta(event) {
	if (event.target.innerText === "1") {
		console.log("Clicked 1");
	} else if (event.target.innerText === "2") {
		console.log("clicked 2");
	} else if (event.target.innerText === "3") {
		console.log("clicked 3");
	} else if (event.target.innerText === "4") {
		console.log("clicked 4");
	}
}
