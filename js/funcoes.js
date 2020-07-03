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
	const continuar = prompt("Está certo de sua resposta?");
	if(continuar === null){
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
				msgAviso.innerText = "";
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
				msgAviso.innerText = "";
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
				msgAviso.innerText = "";
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
				msgAviso.innerText = "";
			}, 2000);
		}
	}
}

// Algumas funções importantes
function pararJogo() {
	alert('Implementar saída do Jogo');
}

// Função que pega uma carta e retira entre 1 a 3 respostas pra ajudar o participante a acertar
function sorteiaCartas(event) {
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
				opcoes.forEach((opcao) => {
					opcao.classList.remove('sumir');
				})
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
				opcoes.forEach((opcao) => {
					opcao.classList.remove('sumir');
				})
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
				opcoes.forEach((opcao) => {
					opcao.classList.remove('sumir');
				})
				break;
			}
		}
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

// função para pular a pergunta atual, pode ser usada somente uma vez
function pularPergunta() {
	alert(`Você tem direito a 3 pulos\nE já usou ${pulos.length}`);
	
	if(pulos.length === 3){
		msgAviso.innerHTML = 'Você não pode mais pular';
		return;
	}

	pulos.push(1);

	setTimeout(() => {
		contador += 1;
		geraPergunta(perguntas[contador]);
	}, 2000);
}
