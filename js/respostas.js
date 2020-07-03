const respostas = document.querySelectorAll(".container-button");
respostas[0].addEventListener("click", verificaResposta);

respostas.forEach((resposta) => {
	resposta.addEventListener("click", verificaResposta);
});

function verificaResposta(event) {
	if (event.target.innerText === "1") {
		if(Number(event.target.innerText) == opcaoCerta){
			console.log('Você acertou a resposta');
			// colocar uma classe que pinte a cor da borda de verde
		} else{
			// colocar uma classe que pinte a cor da borda de vermelho
			console.log('Você errou a resposta');
		}
	} else if (event.target.innerText === "2") {
		if(Number(event.target.innerText) == opcaoCerta){
			console.log('Você acertou a resposta');
		}
	} else if (event.target.innerText === "3") {
		if(Number(event.target.innerText) == opcaoCerta){
			console.log('Você acertou a resposta');
		}
	} else if (event.target.innerText === "4") {
		if(Number(event.target.innerText) == opcaoCerta){
			console.log('Você acertou a resposta');
		}
	}
}
