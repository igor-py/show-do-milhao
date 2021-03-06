// Falta atualizar a situação nas outras respostas certas sem ser a opção 1
geraPergunta(perguntas[contador]);
sitaucaoAtual([0, 10, 50]);

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
	if (dinheiro === 1000) {
		window.location.replace("../pages/ganhou.html");
	} else if (dinheiro === 950) {
		msgAviso.innerText = "Pergunta valendo 1 Milhão!!!";
	}

	let pergunta = document.querySelector(".pergunta");

	pergunta.innerHTML = tornarMaiusculo(texto.pergunta);

	// Retirando a classe que faz sumir, quando o jogador utiliza as cartas
	opcoes[0].parentElement.classList.remove("sumir");
	opcoes[1].parentElement.classList.remove("sumir");
	opcoes[2].parentElement.classList.remove("sumir");
	opcoes[3].parentElement.classList.remove("sumir");

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
	const continuar = prompt("Está certo de sua resposta?");
	if (continuar === null) {
		return;
	}

	if (event.target.innerText === "1") {
		if (Number(event.target.innerText) == opcaoCerta) {
			msgAviso.innerHTML = "Você acertou a resposta!!!";
			event.path[1].classList.add("acertou");
			contador += 1;
			dinheiro += 50;

			setTimeout(() => {
				geraPergunta(perguntas[contador]);
				event.path[1].classList.remove("acertou");
				if (dinheiro === 950) {
					msgAviso.innerText = "Pergunta valendo 1 Milhão !!!";
				} else {
					msgAviso.innerText = "";
				}

				sitaucaoAtual([dinheiro - 50, dinheiro, dinheiro + 50]);
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
				dinheiro = 0;
				pulos = [];
				sitaucaoAtual([0, 10, 50]);
				geraPergunta(perguntas[contador]);
				event.path[1].classList.remove("errou");
				msgAviso.innerText = "";
			}, 2000);
		}
	} else if (event.target.innerText === "2") {
		if (Number(event.target.innerText) == opcaoCerta) {
			msgAviso.innerHTML = "Você acertou a resposta!!!";
			event.path[1].classList.add("acertou");
			dinheiro += 50;
			contador += 1;

			setTimeout(() => {
				geraPergunta(perguntas[contador]);
				event.path[1].classList.remove("acertou");
				sitaucaoAtual([dinheiro - 50, dinheiro, dinheiro + 50]);
				if (dinheiro === 950) {
					msgAviso.innerText = "Pergunta valendo 1 Milhão !!!";
				} else {
					msgAviso.innerText = "";
				}
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
				pulos = [];
				dinheiro = 0;
				geraPergunta(perguntas[contador]);
				sitaucaoAtual([0, 10, 50]);
				event.path[1].classList.remove("errou");
				msgAviso.innerText = "";
			}, 2000);
		}
	} else if (event.target.innerText === "3") {
		if (Number(event.target.innerText) == opcaoCerta) {
			msgAviso.innerHTML = "Você acertou a resposta!!!";
			event.path[1].classList.add("acertou");
			dinheiro += 50;
			contador += 1;

			setTimeout(() => {
				geraPergunta(perguntas[contador]);
				event.path[1].classList.remove("acertou");
				sitaucaoAtual([dinheiro - 50, dinheiro, dinheiro + 50]);
				if (dinheiro === 950) {
					msgAviso.innerText = "Pergunta valendo 1 Milhão !!!";
				} else {
					msgAviso.innerText = "";
				}
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
				pulos = [];
				dinheiro = 0;
				sitaucaoAtual([0, 10, 50]);
				geraPergunta(perguntas[contador]);
				event.path[1].classList.remove("errou");
				if (dinheiro === 950) {
					msgAviso.innerText = "Pergunta valendo 1 Milhão !!!";
				} else {
					msgAviso.innerText = "";
				}
			}, 2000);
		}
	} else if (event.target.innerText === "4") {
		if (Number(event.target.innerText) == opcaoCerta) {
			msgAviso.innerHTML = "Você acertou a resposta!!!";
			event.path[1].classList.add("acertou");
			dinheiro += 50;
			contador += 1;

			setTimeout(() => {
				geraPergunta(perguntas[contador]);
				event.path[1].classList.remove("acertou");
				sitaucaoAtual([dinheiro - 50, dinheiro, dinheiro + 50]);
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
				pulos = [];
				dinheiro = 0;
				sitaucaoAtual([0, 10, 50]);
				geraPergunta(perguntas[contador]);
				event.path[1].classList.remove("errou");
				msgAviso.innerTexpulart = "";
			}, 2000);
		}
	}
}

// Algumas funções importantes
function pararJogo() {
	if (prompt(`Quer sair agora e levar ${formataValor(dinheiro)}`) === null) {
		return;
	}
	if (dinheiro === 0) {
		alert(`Você terminou o jogo com ${formataValor(10)}`);
	} else {
		alert(`Você terminou o jogo com ${formataValor(dinheiro)}`);
	}
	contador = 0;
	dinheiro = 0;
	pulos = [];
	sitaucaoAtual([0, 10, 50]);
	geraPergunta(perguntas[contador]);
}

// Função que pega uma carta e retira entre 1 a 3 respostas pra ajudar o participante a acertar
function sorteiaCartas(event) {
	if (prompt("Você quer realmente usar as cartas?") === null) {
		return;
	}

	let quantidadeCartas = Math.floor(Math.random() * 3);
	let opcaoCertaTemp = perguntas[contador].certa - 1;
	let cont = 0;

	if (quantidadeCartas === 0) {
		// Retirar uma resposta errada
		for (let t = 0; t < 4; t++) {
			if (t === opcaoCertaTemp) {
				continue;
			} else {
				opcoes[t].parentElement.classList.add("sumir");
				cont += 1;
			}

			if (cont === 1) {
				setTimeout(() => {
					msgAviso.innerHTML = "Você não pode mais usar as cartas";
					document.querySelector("#carta").classList.add("sumir");
				}, 1000);

				break;
			}
		}
	} else if (quantidadeCartas === 1) {
		for (let t = 0; t < 4; t++) {
			if (t === opcaoCertaTemp) {
				continue;
			} else {
				opcoes[t].parentElement.classList.add("sumir");
				cont += 1;
			}

			if (cont === 2) {
				setTimeout(() => {
					msgAviso.innerHTML = "Você não pode mais usar as cartas";
					document.querySelector("#carta").classList.add("sumir");
				}, 1000);
				break;
			}
		}
	} else {
		for (let t = 0; t < 4; t++) {
			if (t === opcaoCertaTemp) {
				continue;
			} else {
				opcoes[t].parentElement.classList.add("sumir");
				cont += 1;
			}

			if (cont === 3) {
				setTimeout(() => {
					msgAviso.innerHTML = "Você não pode mais usar as cartas";
					document.querySelector("#carta").classList.add("sumir");
				}, 1000);
				break;
			}
		}
	}
}

// Função que coloca o MIL depois do número
function formataValor(valor) {
	if (valor === 1000) {
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

// função para pular a pergunta atual, pode ser usada somente uma vez
function pularPergunta() {
	if (pulos.length === 3) {
		msgAviso.innerHTML = "Você não pode mais pular";
		document.querySelector("#pular").classList.add("sumir");
		return;
	}

	alert(`Você tem direito a 3 pulos\nE já usou ${pulos.length + 1}`);

	pulos.push(1);

	setTimeout(() => {
		contador += 1;
		geraPergunta(perguntas[contador]);
	}, 2000);
}
