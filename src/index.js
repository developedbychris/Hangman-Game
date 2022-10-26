import Hangman from './hangman.js'
import getPuzzle from './requests.js'

export let game1


const render = ()=>{
    gameWord.innerHTML = ''
    guessesLeft.textContent = `Guesses left: ${game1.remainingGuesses}`

    game1.puzzle.split('').forEach(letter => {
        const letterEl = document.createElement('span')
        letterEl.setAttribute('id', 'game')
        letterEl.textContent = letter
        gameWord.appendChild(letterEl)
    });

    wrongLetters.textContent = `Incorrect letters: ${game1.badLetters.join(', ')}`

    if(game1.status === 'finished'){
        guessesLeft.style.color = 'green'
    }
}

const startGame = async () =>{
    const puzzle = await getPuzzle('1')
    game1 = new Hangman(puzzle, 5)
    guessesLeft.style.color = 'white'
    console.log(puzzle)
    render()
}

startGame()

//Added from DOM
const appDiv = document.querySelector('#app')
//HTML Elements
const gameWord = document.createElement('p')
gameWord.setAttribute('id', 'puzzle')
gameWord.setAttribute('class', 'puzzle')

export const guessesLeft = document.createElement('p')
guessesLeft.setAttribute('id', 'guesses')
guessesLeft.setAttribute('class', 'warning')

const wrongLetters = document.createElement('p')
wrongLetters.setAttribute('class', 'warning')

const resBtn = document.createElement('button')
resBtn.setAttribute('class', 'button')
resBtn.setAttribute('id', 'reset')
resBtn.innerText = 'Restart Game'

appDiv.appendChild(gameWord)
appDiv.appendChild(guessesLeft)
appDiv.appendChild(wrongLetters)
appDiv.appendChild(resBtn)





//Restart button
resBtn.addEventListener('click', startGame)
//Global window event listener
window.addEventListener('keypress', (e)=>{
    const guess = String.fromCharCode(e.charCode)
    
    game1.makeGuess(guess)
    game1.setStatus()
    

    render()
    game1.statusMessage
    
})
