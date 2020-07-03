// Quantidade total de dinheiro que o participante está ganhando
let dinheiro = 0;
let terminar = false;

// Colocando alguns event listeners
parar.addEventListener("click", pararJogo);

// Algumas funções importantes
function pararJogo() {
	while (true) {
		const sair = prompt("Deseja realmente parar?\nSim ou Não");

		if (sair.toLowerCase() == "sim") {
			terminar = true;
			break;
		} else if (sair.toLowerCase() == "não") {
			break;
		} else {
			alert("Por Favor digite (não) ou (sim)!");
		}
	}
}

// Aqui irá rodar a lógica principal do jogo
while (dinheiro < 1000000) {
	// Verificar a situação do participante e mostrar na tela
	// Quanto ficará se Errar, acertar ou parar
	if (terminar) {
		break;
	}

	break;
}
