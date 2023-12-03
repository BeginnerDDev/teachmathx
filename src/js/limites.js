let questionsL = [
	{
		id: 1,
        image: 'l-1.png',
		question: 'Encuentra el límite',
		answer: 'b) 11',
		options: [
			'a) 8', 
			'b) 11', 
			'c) 15', 
			'D) 20'
		],
	},
	{
		id: 2,
        image: 'l-2.png',
		question: 'Encuentra el límite',
		answer: 'a) 0',
		options: [
			'a) 0', 
			'b) 1', 
			'c) -1', 
			'd) 3'
		],
	},
	{
		id: 3,
        image: 'l-3.png',
		question: 'Encuentra el límite',
		answer: 'b) e^2',
		options: [
			'a) e', 
			'b) e^2', 
			'c) 2', 
			'd) 1'
		],
	},
	{
		id: 4,
        image: 'l-4.png',
		question: 'Encuentra el límite',
		answer: 'c) 4',
		options: [
			'a) 0', 
			'b) 1', 
			'c) 4', 
			'd) 8'
		],
	},
	{
		id: 5,
        image: 'l-5.png',
		question: 'Encuentra el límite',
		answer: 'a) 2/3',
		options: [
			'a) 2/3', 
			'b) 3/2', 
			'c) 1', 
			'd) 2'
		],
	},
	{
		id: 6,
        image: 'l-6.png',
		question: 'Encuentra el límite',
		answer: 'b) 0',
		options: [
			'a) -1', 
			'b) 0', 
			'c) 1', 
			'd) No existe'
		],
	},
	{
		id: 7,
        image: 'l-7.png',
		question: 'Encuentra el límite',
		answer: 'd) 3',
		options: [
			'a) 1', 
			'b) 2', 
			'c) 4', 
			'd) 3'
		],
	},
	{
		id: 8,
        image: 'l-8.png',
		question: 'Encuentra el límite',
		answer: 'c) 5/2',
		options: [
			'a) 1/2', 
			'b) 3/5', 
			'c) 5/2', 
			'd) 4/3'
		],
	},
	{
		id: 9,
        image: 'l-9.png',
		question: 'Encuentra el límite',
		answer: 'a) e',
		options: [
			'a) e', 
			'b) 2', 
			'c) 1/e', 
			'd) 0'
		],
	},
	{
		id: 10,
        image: 'l-10.png',
		question: 'Encuentra el límite',
		answer: 'd) 2',
		options: [
			'a) 0', 
			'b) 1', 
			'c) Ꝏ',
			'd) 2'
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

	if (questionCount < questionsL.length - 1) {
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
	
    questionImage.src = questionsL[index].image;
    questionText.textContent = questionsL[index].question;

	let optionTag = `<div class="option"><span>${questionsL[index].options[0]}</span></div>
	<div class="option"><span>${questionsL[index].options[1]}</span></div>
	<div class="option"><span>${questionsL[index].options[2]}</span></div>
	<div class="option"><span>${questionsL[index].options[3]}</span></div>`

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
	let correctAnswer = questionsL[questionCount].answer
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
	questionTotal.textContent = `${index} de ${questionsL.length} preguntas`
}

function headerScore() {
	const headerScoreText = document.querySelector('.header-score')
	headerScoreText.textContent = `Puntuación: ${userScore} / ${questionsL.length}`
}

function showResultBox() {
	quizBox.classList.remove('active')
	resultBox.classList.add('active')

	const scoreText = document.querySelector('.score-text')
	scoreText.textContent = `Tu puntuación fue ${userScore} de ${questionsL.length}`
	
	const circularProgress = document.querySelector('.circular-progress')
	const progressValue = document.querySelector('.progress-value')
	let progressStartValue = -1
	let progressEndValue = (userScore / questionsL.length) * 100;
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