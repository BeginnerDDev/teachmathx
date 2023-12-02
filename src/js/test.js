const starBtn = document.querySelector('.home__btn')
const popupInfo = document.querySelector('.popup')
const exitBtn = document.querySelector('.exit-btn')
const main = document.querySelector('.main')
const continueBtn = document.querySelector('.continue-btn')
const quizSection = document.querySelector('.quiz-section')
const quizBox = document.querySelector('.quiz-box')

starBtn.onclick = () => {
    popupInfo.classList.add('active')
    main.classList.add('active')
}

exitBtn.onclick = () => {
    popupInfo.classList.remove('active')
    main.classList.remove('active')
}


continueBtn.onclick = () => {
    quizSection.classList.add('active')
    popupInfo.classList.remove('active')
    main.classList.remove('active')
    quizBox.classList.add('active')

    showQuestion(0);
}

let questionCount = 0

const nextBtn = document.querySelector('.next-btn')

nextBtn.onclick = () => {
    questionCount++
    showQuestion(questionCount)

}

function showQuestion(i) {
    const questionText = document.querySelector('.question-text');
    questionText.textContent = `${questionsF[i].id}. ${questionsF[i].question}`
}