const perguntas = [
	{
		pergunta: "De quem é a famosa frase “Penso, logo existo”?",
		certa: 3,
		opcoes: ["Platão", "Galileu", "Descartes", "Sócrates"],
	},
];

function tornarMaiusculo(s) {
	let tempString = "";
	for (let letter of s) {
		tempString += letter.toUpperCase();
	}
	return tempString;
}

console.log(tornarMaiusculo(perguntas[0].pergunta));
