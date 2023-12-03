let questionsF = [
	{
		id: 1,
        image: 'f-1.png',
		question: '¿Cuál es el valor de f(5)?',
		answer: 'b) 13',
		options: [
			'a) 8', 
			'b) 13', 
			'c) 15', 
			'D) 23'
		],
	},
	{
		id: 2,
        image: 'f-2.png',
		question: '¿Cuáles son las soluciones de la ecuación g(x) = 0?',
		answer: 'a) x = -2 & x = 2',
		options: [
			'a) x = -2 & x = 2', 
			'b) x = -4 & x = 4', 
			'c) x = -1 & x = 1', 
			'd) x = -3 & x = 3'
		],
	},
	{
		id: 3,
        image: 'f-3.png',
		question: '¿Cuál es el dominio de la función h(x)?',
		answer: 'a) Todos los números reales excepto x = 0',
		options: [
			'a) Todos los números reales excepto x = 0', 
			'b) Todos los números reales positivos', 
			'c) Todos los números reales negativos', 
			'd) Solo x = 1'
		],
	},
	{
		id: 4,
        image: 'f-4.png',
		question: '¿Cuál es el valor de h(8)?',
		answer: 'b) 49',
		options: [
			'a) 31', 
			'b) 49', 
			'c) 59', 
			'd) 48'
		],
	},
	{
		id: 5,
        image: 'f-5.png',
		question: '¿Cuál es el rango de la función m(x)?',
		answer: 'a) y ≥ 0',
		options: [
			'a) y ≥ 0', 
			'b) y > 0', 
			'c) y ≤ 2', 
			'd) y ≥ 2'
		],
	},
	{
		id: 6,
        image: 'f-6.png',
		question: '¿Cuál es el valor de n(2)?',
		answer: 'a) 1',
		options: [
			'a) 1', 
			'b) 2', 
			'c) 3', 
			'd) 4'
		],
	},
	{
		id: 7,
        image: 'f-7.png',
		question: '¿Cuál es el dominio de la función h(x)?',
		answer: 'a) p^-1(x) = ln(x)',
		options: [
			'a) p^-1(x) = ln(x)', 
			'b) p^-1(x) = x^2', 
			'c) p^-1(x) = sin(x)', 
			'd) p^-1(x) = 1/x'
		],
	},
	{
		id: 8,
        image: 'f-8.png',
		question: '¿Cuál es el valor de q(7)?',
		answer: 'c) 5',
		options: [
			'a) 3', 
			'b) 4', 
			'c) 5', 
			'd) 7'
		],
	},
	{
		id: 9,
        image: 'f-9.png',
		question: '¿Cuál es la base del algoritmo en la función r(x)?',
		answer: 'b) 2',
		options: [
			'a) 10', 
			'b) 2', 
			'c) e', 
			'd) 5'
		],
	},
	{
		id: 10,
        image: 'f-10.png',
		question: '¿Cuál es el periodo de la función s(x)?',
		answer: 'b) 2π',
		options: [
			'a) π', 
			'b) 2π', 
			'c) π/2', 
			'd) 3π/2'
		],
	}
];

const starBtn = document.querySelector('.home__btn');
const popupInfo = document.querySelector('.popup');
const exitBtn = document.querySelector('.exit-btn');
const main = document.querySelector('.main');
const continueBtn = document.querySelector('.continue-btn');
const quizSection = document.querySelector('.quiz-section');
const quizBox = document.querySelector('.quiz-box');
const resultBox = document.querySelector('.result-box');
const tryAgainBtn = document.querySelector('.tryAgain-btn');
const goToHomeBtn = document.querySelector('.goHome-btn');

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
	questionCounter(1);
	headerScore();
};

tryAgainBtn.onclick = () => {
	quizBox.classList.add('active');
	nextBtn.classList.remove('active');
	resultBox.classList.remove('active');

	questionCount = 0;
	questionId = 1;
	userScore = 0;
	showQuestion(questionCount);
	questionCounter(questionId);

	headerScore();
};


goToHomeBtn.onclick = () => {
	quizSection.classList.remove('active');
	nextBtn.classList.remove('active');
	resultBox.classList.remove('active');

	questionCount = 0;
	questionId = 1;
	userScore = 0;
	showQuestion(questionCount);
	questionCounter(questionId);
};

let questionCount = 0;
let questionId = 1;
let userScore = 0;

const nextBtn = document.querySelector('.next-btn');

nextBtn.onclick = () => {

	if (questionCount < questionsF.length - 1) {
		questionCount++;
		showQuestion(questionCount);

		questionId++
		questionCounter(questionId)

		nextBtn.classList.remove('active')
	}
	else {
		showResultBox()
	}

};

const optionList = document.querySelector('.option-list')


function showQuestion(index) {
	const questionText = document.querySelector('.question-text');
	const questionImage = document.querySelector('.question-image');
	
    questionImage.src = questionsF[index].image;
    questionText.textContent = questionsF[index].question;

	let optionTag = `<div class="option"><span>${questionsF[index].options[0]}</span></div>
	<div class="option"><span>${questionsF[index].options[1]}</span></div>
	<div class="option"><span>${questionsF[index].options[2]}</span></div>
	<div class="option"><span>${questionsF[index].options[3]}</span></div>`

	optionList.innerHTML = optionTag

	const option = document.querySelectorAll('.option');
    for (let i = 0; i < option.length; i++) {
        option[i].addEventListener('click', function() {
            optionSelected(this);
        });
    }
}

function optionSelected(answer) {

	let userAnswer = answer.textContent;
	let correctAnswer = questionsF[questionCount].answer
	let allOptions = optionList.children.length

	if (userAnswer == correctAnswer) {
		answer.classList.add('correct')
		userScore += 1
		headerScore()
	}
	else {
		answer.classList.add('incorrect')
		
		for (let i = 0; i < allOptions; i++) {
			if (optionList.children[i].textContent == correctAnswer) {
				optionList.children[i].setAttribute('class', 'option correct')
			}
		}
	}

	//Verifica si hay una opcioón seleccionada, deshabilita las otras opciones.
	for (let i = 0; i < allOptions; i++) {
		optionList.children[i].classList.add('disabled')
	}

	nextBtn.classList.add('active')
}

function questionCounter(index) {
	const questionTotal = document.querySelector('.question-total')
	questionTotal.textContent = `${index} de ${questionsF.length} preguntas`
}

function headerScore() {
	const headerScoreText = document.querySelector('.header-score')
	headerScoreText.textContent = `Puntuación: ${userScore} / ${questionsF.length}`
}

function showResultBox() {
	quizBox.classList.remove('active')
	resultBox.classList.add('active')

	const scoreText = document.querySelector('.score-text')
	scoreText.textContent = `Tu puntuación fue ${userScore} de ${questionsF.length}`
	
	const circularProgress = document.querySelector('.circular-progress')
	const progressValue = document.querySelector('.progress-value')
	let progressStartValue = -1
	let progressEndValue = (userScore / questionsF.length) * 100;
	let speed = 20

	let progress = setInterval(() => {
		progressStartValue++;
		//console.log(progressStartValue)
		progressValue.textContent = `${progressStartValue}%`
		circularProgress.style.background = `conic-gradient(rgb(192 81 255) ${progressStartValue * 3.6}deg, rgb(255 255 255 / .1) 0deg)`;

		if (progressStartValue == progressEndValue) {
			clearInterval(progress)
		}

	}, speed)
}