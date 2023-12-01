const starBtn = document.querySelector('.home__btn')
const popupInfo = document.querySelector('.popup')
const exitBtn = document.querySelector('.exit-btn')
const main = document.querySelector('.main')
const continueBtn = document.querySelector('.continue-btn')
const quizSection = document.querySelector('.quiz-section')

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
}