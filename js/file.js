const yes = document.querySelector('.yes')
const no = document.querySelector('.no')
const question = document.querySelector('.question')
const result = document.querySelector('.result')
const reset = document.querySelector('.reset')
no.addEventListener("mouseover", () => {
    let arrTop = ["-4em", "-3em", "-2em", "-1em", ".1em","2em", "6em", "7em", "8em", "9em", "10em"]
    let arrLeft = [ "-4em", "-3em", "-2em", "-1em", "1em", "5em", "6em", "7em", "8em", "9em", "10em"]
    const ranTop = Math.floor(Math.random() * arrTop.length)
    const ranNumTop = (ranTop, arrTop[ranTop])
    const ranLeft = Math.floor(Math.random() * arrLeft.length)
    const ranNumLeft = (ranLeft, arrLeft[ranLeft])
    no.style.left = ranNumLeft
    no.style.top =  ranNumTop
})
no.addEventListener("click", () => {
    window.location.reload()
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