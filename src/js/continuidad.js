let questionsC = [
	{
		id: 1,
        image: 'c-1.png',
		question: '¿En qué punto la función no es continua?',
		answer: 'a) x = -1',
		options: [
			'a) x = -1', 
			'b) x = 0', 
			'c) x = 1', 
			'D) x = -2'
		],
	},
	{
		id: 2,
        image: 'c-2.png',
		question: '¿En qué intervalo la función es continua?',
		answer: 'c) (-Ꝏ, 0) ∪ (0, Ꝏ)',
		options: [
			'a) (-Ꝏ, 0)', 
			'b) (0, Ꝏ)', 
			'c) (-Ꝏ, 0) ∪ (0, Ꝏ)', 
			'd) [0, Ꝏ)'
		],
	},
	{
		id: 3,
        image: 'power.gif',
		question: '¿Cuál de las siguientes funciones es continua en todos los números reales?',
		answer: 'c) h(x) = e^x',
		options: [
			'a) h(x) = 1/x', 
			'b) h(x) = sin(x)', 
			'c) h(x) = e^x', 
			'd) h(x) = |x|'
		],
	},
	{
		id: 4,
        image: 'c-4.png',
		question: '¿En qué punto la función no es continua?',
		answer: 'a) x = 2',
		options: [
			'a) x = 2', 
			'b) x = 4', 
			'c) x = -2', 
			'd) x = 0'
		],
	},
	{
		id: 5,
        image: 'c-5.png',
		question: '¿En qué intervalo la función es continua?',
		answer: 'a) (0, Ꝏ)',
		options: [
			'a) (0, Ꝏ)', 
			'b) (-Ꝏ, 0)', 
			'c) (-Ꝏ, 0) ∪ (0, Ꝏ)', 
			'd) (-Ꝏ, 0] ∪ (0, Ꝏ)'
		],
	},
	{
		id: 6,
        image: 'c-6.png',
		question: '¿En qué punto la función no es continua?',
		answer: 'b) x = -2',
		options: [
			'a) x = 2', 
			'b) x = -2', 
			'c) x = 0', 
			'd) x = -1'
		],
	},
	{
		id: 7,
        image: 'power.gif',
		question: '¿Cuál de las siguientes funciones es continua en x = 1?',
		answer: 'a) p(x) = x^2 -1/x -1',
		options: [
			'a) p(x) = x^2 -1/x -1', 
			'b) p(x) = sin(x)', 
			'c) p(x) = e^x', 
			'd) p(x) = 1/x'
		],
	},
	{
		id: 8,
        image: 'c-8.png',
		question: '¿En qué punto la función no es continua?',
		answer: 'a) x = 0',
		options: [
			'a) x = 0', 
			'b) x = 1', 
			'c) x = -1', 
			'd) x = 2'
		],
	},
	{
		id: 9,
        image: 'c-9.png',
		question: '¿En qué intervalo la función f(x) es continua?',
		answer: 'c) (-Ꝏ, -1) ∪ [1, Ꝏ)',
		options: [
			'a) (-1, 1)', 
			'b) (-Ꝏ, -1) ∪ (1, Ꝏ)', 
			'c) (-Ꝏ, -1) ∪ [1, Ꝏ)', 
			'd) (-Ꝏ, 1) ∪ (1, Ꝏ)'
		],
	},
	{
		id: 10,
        image: 'c-10.png',
		question: '¿En qué intervalo la función es continua?',
		answer: 'c) (-Ꝏ, 0) ∪ (0, Ꝏ)',
		options: [
			'a) (-Ꝏ, 0)', 
			'b) (0, Ꝏ)', 
			'c) (-Ꝏ, 0) ∪ (0, Ꝏ)',
			'd) [0, Ꝏ)'
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

	if (questionCount < questionsC.length - 1) {
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
	
    questionImage.src = questionsC[index].image;
    questionText.textContent = questionsC[index].question;

	let optionTag = `<div class="option"><span>${questionsC[index].options[0]}</span></div>
	<div class="option"><span>${questionsC[index].options[1]}</span></div>
	<div class="option"><span>${questionsC[index].options[2]}</span></div>
	<div class="option"><span>${questionsC[index].options[3]}</span></div>`

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
	let correctAnswer = questionsC[questionCount].answer
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
	questionTotal.textContent = `${index} de ${questionsC.length} preguntas`
}

function headerScore() {
	const headerScoreText = document.querySelector('.header-score')
	headerScoreText.textContent = `Puntuación: ${userScore} / ${questionsC.length}`
}

function showResultBox() {
	quizBox.classList.remove('active')
	resultBox.classList.add('active')

	const scoreText = document.querySelector('.score-text')
	scoreText.textContent = `Tu puntuación fue ${userScore} de ${questionsC.length}`
	
	const circularProgress = document.querySelector('.circular-progress')
	const progressValue = document.querySelector('.progress-value')
	let progressStartValue = -1
	let progressEndValue = (userScore / questionsC.length) * 100;
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