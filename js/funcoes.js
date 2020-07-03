// Algumas variáveis que serão utilizadas em mais de uma função

// Pega o elemento que colocará o texto na tela
let msgAviso = document.querySelector(".msg-aviso");

// Aqui colocarei todas as funções que serão utilizadas pelo jogo
function tornarMaiusculo(s) {
	let tempString = "";
	for (let letter of s) {
		tempString += letter.toUpperCase();
	}
	return tempString;
}

function geraPergunta(texto = {}) {
	let pergunta = document.querySelector(".pergunta");
	let opcoes = document.querySelectorAll(".texto-resposta");

	pergunta.innerHTML = tornarMaiusculo(texto.pergunta);

	// Colocando as opções
	opcoes[0].innerHTML = texto.opcoes[0];
	opcoes[1].innerHTML = texto.opcoes[1];
	opcoes[2].innerHTML = texto.opcoes[2];
	opcoes[3].innerHTML = texto.opcoes[3];

	// Colocando a opção numa variável
	opcaoCerta = texto.certa;
}

function verificaResposta(event) {
	// Verifica se o jogador quer realmente confirmar a alternativa selecionada
	const continuar = prompt(
		"Está certo de sua resposta?\nDigite (s) caso queira e (n) caso queira selecionar outra opção"
	);

	if (continuar.toLowerCase() !== "s") {
		if (continuar.toLowerCase() !== "n") {
			msgAviso.innerHTML = "Você digitou (n) ou (s) errado!!!";
			return;
		}
	}

	if (!continuar.toLowerCase() === "s") {
		return;
	}

	if (event.target.innerText === "1") {
		if (Number(event.target.innerText) == opcaoCerta) {
			msgAviso.innerHTML = "Você acertou a resposta!!!";
			event.path[1].classList.add("acertou");
			// colocar uma classe que pinte a cor da borda de verde
		} else {
			// colocar uma classe que pinte a cor da borda de vermelho
			msgAviso.innerHTML = "Você errou a resposta!!!";
			event.path[1].classList.add("errou");
		}
	} else if (event.target.innerText === "2") {
		if (Number(event.target.innerText) == opcaoCerta) {
			msgAviso.innerHTML = "Você acertou a resposta!!!";
			event.path[1].classList.add("acertou");
		} else {
			// colocar uma classe que pinte a cor da borda de vermelho
			msgAviso.innerHTML = "Você errou a resposta!!!";
			event.path[1].classList.add("errou");
		}
	} else if (event.target.innerText === "3") {
		if (Number(event.target.innerText) == opcaoCerta) {
			msgAviso.innerHTML = "Você acertou a resposta!!!";
			event.path[1].classList.add("acertou");
		} else {
			// colocar uma classe que pinte a cor da borda de vermelho
			msgAviso.innerHTML = "Você errou a resposta!!!";
			event.path[1].classList.add("errou");
		}
	} else if (event.target.innerText === "4") {
		if (Number(event.target.innerText) == opcaoCerta) {
			msgAviso.innerHTML = "Você acertou a resposta!!!";
			event.path[1].classList.add("acertou");
		} else {
			// colocar uma classe que pinte a cor da borda de vermelho
			msgAviso.innerHTML = "Você errou a resposta!!!";
			event.path[1].classList.add("errou");
		}
	}
}

// Algumas funções importantes
function pararJogo() {
	while (true) {
		const sair = prompt(
			"Deseja realmente parar?\ndigite (s) para Sim ou (n) para Não"
		);

		if (sair.toLowerCase() == "s") {
			terminar = true;
			break;
		} else if (sair.toLowerCase() == "n") {
			break;
		} else {
			msgAviso.innerHTML =
				"Por favor digite (s) ou (n) você digitou um comando não aceito";
			break;
		}
	}
}

// Função que pega uma carta e retira entre 1 a 3 respostas pra ajudar o participante a acertar
function sorteiaCartas(event) {
	let quantidadeCartas = Math.floor(Math.random() * 3);
	console.log(event);

	if (quantidadeCartas === 0) {
		// Retirar uma resposta errada
		console.log("do nothing");
	} else if (quantidadeCartas === 1) {
		console.log("Sorteia 2 cartas");
	} else {
		console.log("sorteia 3 cartas");
	}
}
