let pergunta = document.querySelector(".pergunta");
let opcoes = document.querySelectorAll(".texto-resposta");
let opcaoCerta;
let jogadaFeita = true;

function geraPergunta(texto = {}) {
	pergunta.innerHTML = tornarMaiusculo(texto.pergunta);

	// Colocando as opções
	opcoes[0].innerHTML = texto.opcoes[0];
	opcoes[1].innerHTML = texto.opcoes[1];
	opcoes[2].innerHTML = texto.opcoes[2];
	opcoes[3].innerHTML = texto.opcoes[3];

	// Colocando a opção numa variável
	opcaoCerta = texto.certa;
	console.log(opcaoCerta);
}

// Depois que a jogada foi feita, colocar a nova pergunta

/*
if (jogadaFeita) {
	console.log("Jogada anterior já foi feita");
}
*/

geraPergunta(perguntas[0]);
