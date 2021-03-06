// Aqui vai ficar somente o array que armazena todas as perguntas
const perguntas = [
	{
		pergunta: "Qual a montanha mais alta do Brasil?",
		certa: 1,
		opcoes: [
			"Pico da Neblina",
			"Pico Paraná",
			"Monte Roraima",
			"Pico da Bandeira",
		],
		dificuldade: 1,
	},
	{
		pergunta: "De quem é a famosa frase “Penso, logo existo”?",
		certa: 3,
		opcoes: ["Platão", "Galileu", "Descartes", "Sócrates"],
		dificuldade: 1,
	},
	{
		pergunta:
			"Como é a conjugação do verbo caber na 1.ª pessoa do singular do presente do indicativo?",
		certa: 2,
		opcoes: ["Ele cabe", "Eu caibo", "Eu cabo", "Nenhuma das alternativas"],
		dificuldade: 1,
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
		dificuldade: 3,
	},
	{
		pergunta: "Quantas casas decimais tem o número pi?",
		certa: 3,
		opcoes: ["Duas", "Centenas", "Infinitas", "Milhares"],
		dificuldade: 2,
	},
	{
		pergunta: "O que a palavra legend significa em português?",
		certa: 4,
		opcoes: ["Legenda", "Conto", "Legendário", "Lenda"],
		dificuldade: 1,
	},
	{
		pergunta:
			"Quais das opções abaixo apresentam duas Maravilhas do Mundo Moderno?",
		certa: 3,
		opcoes: [
			"Chichén Itzá e Big Ben",
			"Torre Eiffel e Grande Muralha da China",
			"Cristo Redentor e Coliseu",
			"Ruínas de Petra e Torre de Pisa ",
		],
		dificuldade: 2,
	},
	{
		pergunta:
			"Qual o nome do presidente do Brasil que ficou conhecido como Jango?",
		certa: 4,
		opcoes: [
			"Jânio Quadros",
			"Jacinto Anjos",
			"João Figueiredo",
			"João Goulart",
		],
		dificuldade: 3,
	},
	{
		pergunta: "De onde é a invenção do chuveiro elétrico?",
		certa: 3,
		opcoes: ["França", "Inglaterra", "Brasil", "Portugal"],
		dificuldade: 2,
	},
	{
		pergunta: 'Quem pintou "Guernica"?',
		certa: 2,
		opcoes: [
			"Paul Cézanne",
			"Pablo Picasso",
			"Diego Rivera",
			"Tarsila do Amaral",
		],
		dificuldade: 1,
	},
	{
		pergunta:
			"Quantos graus são necessário para que dois ângulos sejam complementares?",
		certa: 3,
		opcoes: ["45°", "60°", "90°", "180°"],
		dificuldade: 2,
	},
	{
		pergunta: "Qual o livro mais vendido no mundo a seguir à Bíblia?",
		certa: 2,
		opcoes: [
			"O Senhor dos Anéis",
			"Dom Quixote",
			"O Pequeno Príncipe",
			"Um Conto de Duas Cidades",
		],
		dificuldade: 1,
	},
	{
		pergunta: "Qual a nacionalidade de Che Guevara?",
		certa: 1,
		opcoes: ["Argentina", "Cubana", "Boliviana", "Panamenha"],
		dificuldade: 1,
	},
	{
		pergunta: "Qual o metal cujo símbolo químico é o Au?",
		certa: 4,
		opcoes: ["Cobre", "Prata", "Mercúrio", "Ouro"],
		dificuldade: 3,
	},
	{
		pergunta: "Em que período da pré-história o fogo foi descoberto?",
		certa: 2,
		opcoes: [
			"Neolítico",
			"Paleolítico",
			"Idade dos Metais",
			"Período da Pedra Polida",
		],
		dificuldade: 2,
	},
	{
		pergunta: "Quem é o autor de “O Príncipe”?",
		certa: 1,
		opcoes: [
			"Maquiavel",
			"Antoine de Saint-Exupéry",
			"Montesquieu",
			"Thomas Hobbes",
		],
		dificuldade: 1,
	},
	{
		pergunta: "Qual o número mínimo de jogadores numa partida de futebol?",
		certa: 3,
		opcoes: ["8", "10", "7", "5"],
		dificuldade: 2,
	},
	{
		pergunta:
			"Qual o tema do famoso discurso Eu Tenho um Sonho, de Martin Luther King?",
		certa: 1,
		opcoes: [
			"Igualdade das raças",
			"Justiça para os menos favorecidos",
			"Intolerância religiosa",
			"Prêmio Nobel da Paz",
		],
		dificuldade: 1,
	},
	{
		pergunta: "Que líder mundial ficou conhecida como “Dama de Ferro”?",
		certa: 3,
		opcoes: [
			"Dilma Rousseff",
			"Angela Merkel",
			"Margaret Thatcher",
			"Hillary Clinton",
		],
		dificuldade: 1,
	},
	{
		pergunta:
			"Qual foi o recurso utilizado inicialmente pelo homem para explicar a origem das coisas?",
		certa: 2,
		opcoes: ["A Filosofia", "A Mitologia", "A Biologia", "A Astronomia"],
		dificuldade: 1,
	},
	{
		pergunta:
			"Atualmente, quantos elementos químicos a tabela periódica possui?",
		certa: 4,
		opcoes: ["113", "109", "118", "92"],
		dificuldade: 3,
	},
	{
		pergunta:
			"Quem foi o primeiro homem a pisar na lua e em que ano aconteceu?",
		certa: 3,
		opcoes: [
			"Yuri Gagarin, em 1961",
			"Neil Armstrong, em 1972",
			"Neil Armstrong, em 1969",
			"Yuri Gagarin, em 1969",
		],
		dificuldade: 2,
	},
	{
		pergunta: "Em que ordem surgiram os modelos atômicos?",
		certa: 4,
		opcoes: [
			"Thomson, Dalton, Rutherford, Rutherford-Bohr",
			"Rutherford-Bohr, Rutherford, Thomson, Dalton",
			"Dalton, Thomson, Rutherford-Bohr, Rutherford",
			"Dalton, Thomson, Rutherford, Rutherford-Bohr",
		],
		dificuldade: 3,
	},
];
