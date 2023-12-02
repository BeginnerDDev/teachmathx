let questionsF = [
	{
		id: 1,
        image: 'bg.webp',
		question: ' ¿Cuál es el valor de \(f(5)\)?',
		answer: 'b) 13',
		options: ['a) 8', 'b) 13', 'c) 15', 'd) 23'],
	},
	{
		id: 2,
        image: 'bg.webp',
		question: 'Si (f(x) = 2x + 3) | ¿Cuál es el valor de (f(6))',
		answer: 'b) 13',
		options: ['a) 8', 'b) 13', 'c) 15', 'd) 23'],
	},
	{
		id: 3,
        image: 'bg.webp',
		question: 'Si (f(x) = 2x + 3) | ¿Cuál es el valor de (f(5))',
		answer: 'b) 13',
		options: ['a) 8', 'b) 13', 'c) 15', 'd) 23'],
	},
	{
		id: 4,
		question: 'Si (f(x) = 2x + 3) | ¿Cuál es el valor de (f(5))',
		answer: 'b) 13',
		options: ['a) 8', 'b) 13', 'c) 15', 'd) 23'],
	},
	{
		id: 5,
		question: 'Si (f(x) = 2x + 3) | ¿Cuál es el valor de (f(5))',
		answer: 'b) 13',
		options: ['a) 8', 'b) 13', 'c) 15', 'd) 23'],
	},
	{
		id: 6,
		question: 'Si (f(x) = 2x + 3) | ¿Cuál es el valor de (f(5))',
		answer: 'b) 13',
		options: ['a) 8', 'b) 13', 'c) 15', 'd) 23'],
	},
	{
		id: 7,
		question: 'Si (f(x) = 2x + 3) | ¿Cuál es el valor de (f(5))',
		answer: 'b) 13',
		options: ['a) 8', 'b) 13', 'c) 15', 'd) 23'],
	},
	{
		id: 8,
		question: 'Si (f(x) = 2x + 3) | ¿Cuál es el valor de (f(5))',
		answer: 'b) 13',
		options: ['a) 8', 'b) 13', 'c) 15', 'd) 23'],
	},
	{
		id: 9,
		question: 'Si (f(x) = 2x + 3) | ¿Cuál es el valor de (f(5))',
		answer: 'b) 13',
		options: ['a) 8', 'b) 13', 'c) 15', 'd) 23'],
	},
	{
		id: 10,
		question: 'Si (f(x) = 2x + 3) | ¿Cuál es el valor de (f(5))',
		answer: 'b) 13',
		options: ['a) 8', 'b) 13', 'c) 15', 'd) 23'],
	},
];

const starBtn = document.querySelector('.home__btn');
const popupInfo = document.querySelector('.popup');
const exitBtn = document.querySelector('.exit-btn');
const main = document.querySelector('.main');
const continueBtn = document.querySelector('.continue-btn');
const quizSection = document.querySelector('.quiz-section');
const quizBox = document.querySelector('.quiz-box');

starBtn.onclick = () => {
	popupInfo.classList.add('active');
	main.classList.add('active');
};

exitBtn.onclick = () => {
	popupInfo.classList.remove('active');
	main.classList.remove('active');
};

continueBtn.onclick = () => {
	quizSection.classList.add('active');
	popupInfo.classList.remove('active');
	main.classList.remove('active');
	quizBox.classList.add('active');

	showQuestion(0);
};

let questionCount = 0;

const nextBtn = document.querySelector('.next-btn');

nextBtn.onclick = () => {
	questionCount++;
	showQuestion(questionCount);
};

function showQuestion(i) {
	const questionText = document.querySelector('.question-text');
	const questionImage = document.querySelector('.question-image');
	
    questionImage.src = question[i].image
    questionText.textContent = `${questionsF[i].question}`;
}
