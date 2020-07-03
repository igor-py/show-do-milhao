geraPergunta(perguntas[contador]);

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
	const continuar = prompt("Está certo de sua resposta?\nSim(s) ou Não(n)");

	if (continuar.toLowerCase() !== "s") {
		if (continuar.toLowerCase() !== "n") {
			msgAviso.innerHTML = "Você digitou (n) ou (s) errado!!!";
			return;
		}
	}

	if (continuar.toLowerCase() === "n") {
		return;
	}

	if (event.target.innerText === "1") {
		if (Number(event.target.innerText) == opcaoCerta) {
			msgAviso.innerHTML = "Você acertou a resposta!!!";
			event.path[1].classList.add("acertou");
			contador += 1;

			setTimeout(() => {
				geraPergunta(perguntas[contador]);
				event.path[1].classList.remove("acertou");
				msgAviso.innerText = "";
			}, 2000);
		} else {
			msgAviso.innerHTML = "Você errou a resposta!!!";
			event.path[1].classList.add("errou");
			// Avisar que o jogo acabou e reiniciar o jogo
			setTimeout(() => {
				alert(
					`Você terminou com ${
						document.querySelectorAll(".texto-aviso")[0].innerHTML
					}`
				);
				contador = 0;
				geraPergunta(perguntas[contador]);
				event.path[1].classList.remove("errou");
			}, 2000);
		}
	} else if (event.target.innerText === "2") {
		if (Number(event.target.innerText) == opcaoCerta) {
			msgAviso.innerHTML = "Você acertou a resposta!!!";
			event.path[1].classList.add("acertou");
			contador += 1;

			setTimeout(() => {
				geraPergunta(perguntas[contador]);
				event.path[1].classList.remove("acertou");
				msgAviso.innerText = "";
			}, 2000);
		} else {
			msgAviso.innerHTML = "Você errou a resposta!!!";
			event.path[1].classList.add("errou");

			setTimeout(() => {
				alert(
					`Você terminou com ${
						document.querySelectorAll(".texto-aviso")[0].innerHTML
					}`
				);
				contador = 0;
				geraPergunta(perguntas[contador]);
				event.path[1].classList.remove("errou");
			}, 2000);
		}
	} else if (event.target.innerText === "3") {
		if (Number(event.target.innerText) == opcaoCerta) {
			msgAviso.innerHTML = "Você acertou a resposta!!!";
			event.path[1].classList.add("acertou");
			contador += 1;

			setTimeout(() => {
				geraPergunta(perguntas[contador]);
				event.path[1].classList.remove("acertou");
				msgAviso.innerText = "";
			}, 2000);
		} else {
			msgAviso.innerHTML = "Você errou a resposta!!!";
			event.path[1].classList.add("errou");

			setTimeout(() => {
				alert(
					`Você terminou com ${
						document.querySelectorAll(".texto-aviso")[0].innerHTML
					}`
				);
				contador = 0;
				geraPergunta(perguntas[contador]);
				event.path[1].classList.remove("errou");
			}, 2000);
		}
	} else if (event.target.innerText === "4") {
		if (Number(event.target.innerText) == opcaoCerta) {
			msgAviso.innerHTML = "Você acertou a resposta!!!";
			event.path[1].classList.add("acertou");
			contador += 1;

			setTimeout(() => {
				geraPergunta(perguntas[contador]);
				event.path[1].classList.remove("acertou");
				msgAviso.innerText = "";
			}, 2000);
		} else {
			msgAviso.innerHTML = "Você errou a resposta!!!";
			event.path[1].classList.add("errou");

			setTimeout(() => {
				alert(
					`Você terminou com ${
						document.querySelectorAll(".texto-aviso")[0].innerHTML
					}`
				);
				contador = 0;
				geraPergunta(perguntas[contador]);
				event.path[1].classList.remove("errou");
			}, 2000);
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

// Função que coloca o MIL depois do número
function formataValor(valor) {
	if (valor === 1000) {
		msgAviso.innerHTML = "Pergunta valendo 1 Milhão";
		return `1 MILHÃO`;
	} else if (valor === 0) {
		return "NADA";
	}

	return `${valor} MIL`;
}

// Função que altera as situações
function sitaucaoAtual(valores = []) {
	// Array com os 3 valores a serem inseridos nas situações

	let situacoes = document.querySelectorAll(".texto-aviso");

	for (let i = 0; i < situacoes.length; i++) {
		situacoes[i].innerHTML = formataValor(valores[i]);
	}
}
