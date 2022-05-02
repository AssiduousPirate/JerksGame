const yes = document.querySelector('.yes')
const no = document.querySelector('.no')
const question = document.querySelector('.question')
const result = document.querySelector('.result')
const reset = document.querySelector('.reset')
no.addEventListener("click", () => {
    let arrTop = ["2em", "6em"]
    let arrLeft = ["1em", "5em"]
    const ranTop = Math.floor(Math.random() * arrTop.length)
    const ranNumTop = (ranTop, arrTop[ranTop])
    const ranLeft = Math.floor(Math.random() * arrLeft.length)
    const ranNumLeft = (ranLeft, arrLeft[ranLeft])
    no.style.left = ranNumLeft
    no.style.top =  ranNumTop
})
yes.addEventListener("click", () => {
    question.style.display = "none"
    result.style.display = "block"
})
reset.addEventListener("click", () => {
    result.style.display = "none"
    question.style.display = "block"
    window.location.reload()
})