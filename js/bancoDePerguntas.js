const perguntas = [
	{
		pergunta: "De quem é a famosa frase “Penso, logo existo”?",
		certa: 3,
		opcoes: ["Platão", "Galileu", "Descartes", "Sócrates"],
	},
	{
		pergunta: "Quais o menor e o maior país do mundo?",
		certa: 1,
		opcoes: [
			"Vaticano e Rússia",
			"Nauru e China",
			"Mônaco e Canadá",
			"São Marino e Índia",
		],
	},
];

function tornarMaiusculo(s) {
	let tempString = "";
	for (let letter of s) {
		tempString += letter.toUpperCase();
	}
	return tempString;
}
