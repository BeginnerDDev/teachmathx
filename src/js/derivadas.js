let questionsD = [
	{
		id: 1,
        image: 'd-1.png',
		question: 'Encuentra la derivada',
		answer: 'a) 6x + 2',
		options: [
			'a) 6x + 2', 
			'b) 3x^2 + 2', 
			'c) 6x - 2', 
			'D) 3x^2 + 2x'
		],
	},
	{
		id: 2,
        image: 'd-2.png',
		question: 'Halla la derivada',
		answer: 'a) -2/x^2',
		options: [
			'a) -2/x^2', 
			'b) -2/X^3', 
			'c) 2/x^2', 
			'd) 2/x^3'
		],
	},
	{
		id: 3,
        image: 'd-3.png',
		question: 'Deriva la función',
		answer: 'a) Todos los números reales excepto x = 0',
		options: [
			'a) 2e^2x', 
			'b) e^2x', 
			'c) 2e^2x', 
			'd) e'
		],
	},
	{
		id: 4,
        image: 'd-4.png',
		question: 'Encuentra la derivada',
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
        image: 'd-5.png',
		question: 'Deriva la función',
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
        image: 'd-6.png',
		question: '',
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
        image: 'd-7.png',
		question: '',
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
        image: 'd-8.png',
		question: '',
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
        image: 'd-9.png',
		question: 'Encuentra la derivada',
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
        image: 'd-10.png',
		question: 'Halla la derivada',
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

	if (questionCount < questionsD.length - 1) {
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
	
    questionImage.src = questionsD[index].image;
    questionText.textContent = questionsD[index].question;

	let optionTag = `<div class="option"><span>${questionsD[index].options[0]}</span></div>
	<div class="option"><span>${questionsD[index].options[1]}</span></div>
	<div class="option"><span>${questionsD[index].options[2]}</span></div>
	<div class="option"><span>${questionsD[index].options[3]}</span></div>`

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
	let correctAnswer = questionsD[questionCount].answer
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
	questionTotal.textContent = `${index} de ${questionsD.length} preguntas`
}

function headerScore() {
	const headerScoreText = document.querySelector('.header-score')
	headerScoreText.textContent = `Puntuación: ${userScore} / ${questionsD.length}`
}

function showResultBox() {
	quizBox.classList.remove('active')
	resultBox.classList.add('active')

	const scoreText = document.querySelector('.score-text')
	scoreText.textContent = `Tu puntuación fue ${userScore} de ${questionsD.length}`
	
	const circularProgress = document.querySelector('.circular-progress')
	const progressValue = document.querySelector('.progress-value')
	let progressStartValue = -1
	let progressEndValue = (userScore / questionsD.length) * 100;
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