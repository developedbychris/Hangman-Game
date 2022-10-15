class Hangman{
    constructor(word, remainingGuesses){
        this.word = word.toLowerCase().split('')
        this.remainingGuesses = remainingGuesses
        this.guessedLetters = []
        this.badLetters = []
        this.status = 'playing'
    }

    get puzzle(){
        let puzzle = ''
        this.word.forEach(letter =>{
        if(this.guessedLetters.includes(letter) || letter === ' '){
            puzzle += letter
        } else {
            puzzle += '*'
        }
        })
        return puzzle
    }

    makeGuess(guess){
        guess = guess.toLowerCase()
        const isUnique = !this.guessedLetters.includes(guess)
        const isBadGuess = !this.word.includes(guess)
        if (isUnique){
            this.guessedLetters.push(guess)  
        }
    
        if(isUnique && isBadGuess){
            this.remainingGuesses--
            this.badLetters.push(guess)
        }
    }

    setStatus(){
        if(this.remainingGuesses <= 0){
            this.status = 'failed'
        } else if(this.puzzle === this.word.join('')){
            this.status = 'finished'
        } else {
            this.status = 'playing'
        }
    }

    get statusMessage(){
        if (this.status === 'finished'){
            guessesLeft.textContent = 'You win!'
            
        } else if (this.status === 'failed'){
            guessesLeft.innerHTML = `You ran out of guesses. The word was <span style="color:red;" >"${game1.word.join('')}"</span>.`
            
        }
    }
}




