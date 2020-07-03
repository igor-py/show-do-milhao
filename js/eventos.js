const respostas = document.querySelectorAll(".container-button");

respostas.forEach((resposta) => {
	resposta.addEventListener("click", verificaResposta);
});

// Colocando alguns event listeners
parar.addEventListener("click", pararJogo);

// Cartas
document.querySelector("#carta").addEventListener("click", sorteiaCartas);
