const square = document.querySelectorAll('.square')
const mole = document.querySelectorAll('.mole')
const timeleft = document.querySelector('#time-left')
let score = document.querySelector('#score')

// start the game
let result = 0;
let  currentTime = timeleft.textContent

// random square function
function randomSquare() {
    square.forEach(className => {
        className.classList.remove('mole')
    })
    let randomPosition = square[Math.floor(Math.random() * 9)]
    randomPosition.classList.add('mole')

    // assign the id to the randomPosition to the hitPosition to use later
    hitPosition = randomPosition.id
}

square.forEach(id => {
    id.addEventListener('mouseup', () => {
        // if id match add 1 to result
        if(id.id === hitPosition) {
            result = result + 1
            // display the result
            score.textContent = result
        }
    })
})

// function to move the mole

function moveMole() {
    let timerId = null
    timerId = setInterval(randomSquare, 750)
}

moveMole()

function countDown() {
    currentTime--
    timeleft.textContent = currentTime

    if(currentTime === 0) {
        clearInterval(timerId)
        alert('GAME OVER! Your Final score is ' + result)
    }
}

let timerId = setInterval(countDown, 1000);