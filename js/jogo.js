// Quantidade total de dinheiro que o participante está ganhando
let dinheiro = 0;
let terminar = false;
let opcaoCerta;

// Gera a primeira pergunta assim que já entrar no site e coloca a situação inicial
geraPergunta(perguntas[contador]);
sitaucaoAtual([dinheiro, dinheiro, 10]);

// Aqui irá rodar a lógica principal do jogo

/*
while (dinheiro < 1000) {
	// Verificar a situação do participante e mostrar na tela
	// Quanto ficará se Errar, acertar ou parar
	if (terminar) {
		break;
	}

	if (dinheiro === 0 && acertou) {
		dinheiro += 10;
	}

	geraPergunta(perguntas[2]);
	sitaucaoAtual([dinheiro, 0, 100]);

	break;
}
*/
