//* 1st
/* let firstCard = 1
let secondCard = 11
let sum = firstCard + secondCard

if (sum < 21) {
    console.log('Do you want to draw a new card? 🃏')
} else if (sum === 21) {
    console.log("Wohooo!, You've got a blackjack! 🎉")
} else {
    console.log("You're out of the game! 😭")
} */

//* 2nd
/* let age = 10

if (age < 21) {
    console.log('You can not enter the club!😢')
} else {
    console.log('Welcome!!!🎇')
}
 */

//* 3rd
/* let age = 100

if (age < 100) {
    console.log('Not eligible!')
} else if (age === 100) {
    console.log('Here is your birthday card from the King!')
} else {
    console.log('Not elegible, you have already gotten one')
} */

//* 4th
/* let firstCard = 10
let secondCard = 11
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true

console.log(sum)

if (sum <= 20) {
    console.log('Do you want to draw a new card? 🙂')
} else if (sum === 21) {
    console.log("Wohoo! You've got Blackjack! 🥳")
    hasBlackJack = true
} else {
    console.log("You're out of the game! 😭")
    isAlive = false
}

//* CASH OUT!
console.log(hasBlackJack)
console.log(`Life: ${isAlive}`) */

//* 5th
/* console.log(4 === 3) //* false
console.log(5 > 2) //* true
console.log(12 > 12) //* false
console.log(3 < 0) //* false
console.log(3 >= 3) //* true
console.log(11 <= 11) //* true
console.log(3 <= 2) //* false */

//* 6th
/* let firstCard = 10
let secondCard = 11
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
// 1. Declare a variable called message and assign its value to an empty string
let message = ''
// 2. Reassign the message variable to the string we're logging out
if (sum <= 20) {
    message = 'Do you want to draw a new card? 🙂'
} else if (sum === 21) {
    message = "Wohoo! You've got Blackjack! 🥳"
    hasBlackJack = true
} else {
    message = "You're out of the game! 😭"
    isAlive = false
}

// 3. Log it out!
console.log(`Life: ${isAlive}`)
console.log(message)*/

//* 7th
/* const messageEl = document.getElementById('message-el')
console.log('🚀 ~ file: index.js ~ line 92 ~ messageEl', messageEl)

function startGame() {
    let firstCard = 10
    let secondCard = 4
    let sum = firstCard + secondCard
    let hasBlackJack = false
    let isAlive = true
    let message = ''

    if (sum <= 20) {
        message = 'Do you want to draw a new card?'
    } else if (sum === 21) {
        message = "Wohoo! You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }

    messageEl.textContent = message
} */

//* 8th
/* const messageEl = document.getElementById('message-el')
const sumEl = document.getElementById('sum-el')

function startGame() {
    let firstCard = 18
    let secondCard = 4
    let sum = firstCard + secondCard
    let hasBlackJack = false
    let isAlive = true
    let message = ''

    if (sum <= 20) {
        message = 'Do you want to draw a new card?'
    } else if (sum === 21) {
        message = "Wohoo! You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = `You're out of the game!`
        isAlive = false
    }

    sumEl.textContent = `Sum: ${sum}`
    messageEl.textContent = message
}
 */

//* 9th
/* const messageEl = document.getElementById('message-el')
const sumEl = document.getElementById('sum-el')
const cardEl = document.getElementById('card-el')

function startGame() {
    let firstCard = 18
    let secondCard = 4
    let sum = firstCard + secondCard
    let hasBlackJack = false
    let isAlive = true
    let message = ''

    if (sum <= 20) {
        message = 'Do you want to draw a new card?'
    } else if (sum === 21) {
        message = "Wohoo! You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = `You're out of the game!`
        isAlive = false
    }

    cardEl.textContent = `Cards: ${firstCard} ${secondCard}`
    sumEl.textContent = `Sum: ${sum}`
    messageEl.textContent = message
}

function newCard() {
    console.log('Drawing a new card from the deck!')
} */

//* 10th
/* const messageEl = document.getElementById('message-el')
const sumEl = document.getElementById('sum-el')
const cardEl = document.getElementById('card-el')

let firstCard = 1
let secondCard = 8
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ''
function startGame() {
    if (sum <= 20) {
        message = 'Do you want to draw a new card?'
    } else if (sum === 21) {
        message = "Wohoo! You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = `You're out of the game!`
        isAlive = false
    }

    cardEl.textContent = `Cards: ${firstCard} ${secondCard}`
    sumEl.textContent = `Sum: ${sum}`
    messageEl.textContent = message
}

function newCard() {
    console.log('Drawing a new card from the deck!')
    // 1. Create a card variable, and hard code its value to a number (2-11)
    let card = 5
    // 2. Add the new card to the sum variable
    sum += card
    // 3. Call startGame()
    startGame()
    cardEl.textContent += ` ${card}`
} */

//* 11th
/* const messageEl = document.getElementById('message-el')
const sumEl = document.getElementById('sum-el')
const cardEl = document.getElementById('card-el')

let firstCard = 1
let secondCard = 8
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ''

// Create a new function called startGame() that calls renderGame()
function startGame() {
    renderGame()
}

function renderGame() {
    if (sum <= 20) {
        message = 'Do you want to draw a new card?'
    } else if (sum === 21) {
        message = "Wohoo! You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = `You're out of the game!`
        isAlive = false
    }

    cardEl.textContent = `Cards: ${firstCard} ${secondCard}`
    sumEl.textContent = `Sum: ${sum}`
    messageEl.textContent = message
}

function newCard() {
    console.log('Drawing a new card from the deck!')
    let card = 5
    sum += card
    renderGame()
    cardEl.textContent += ` ${card}`
} */

//* 12th

/* const messageEl = document.getElementById('message-el')
const sumEl = document.getElementById('sum-el')
const cardEl = document.getElementById('card-el')

let firstCard = 1
let secondCard = 8
let cards = [firstCard, secondCard]
let sum = cards[0] + cards[1]
let hasBlackJack = false
let isAlive = true
let message = ''

// Create a new function called startGame() that calls renderGame()
function startGame() {
    renderGame()
}

function renderGame() {
    if (sum <= 20) {
        message = 'Do you want to draw a new card?'
    } else if (sum === 21) {
        message = "Wohoo! You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = `You're out of the game!`
        isAlive = false
    }

    cardEl.textContent = `Cards: ${cards[0]}, ${cards[1]},`
    sumEl.textContent = `Sum: ${sum}`
    messageEl.textContent = message
}

function newCard() {
    console.log('Drawing a new card from the deck!')
    let card = 5
    sum += card
    renderGame()
    cardEl.textContent += ` ${card}`
} */

//* 13th
//* ARRAYS - ordered lists of items
/* let featuredPosts = [
    'Check out my Netflix clone',
    "Here's the code for my project",
    "I've just relaunched my portfolio"
]

let experience = [
    'Trimex Scholar',
    'Intern at SideHustle',
    'Certified Problem Solver'
]

let education = [
    'Elementary School - LES',
    'High School - BINHS',
    'Senior High School - BINHS',
    'College - TRIMEX COLLEGES'
]

let skills = ['JavaScript', 'HTML', 'CSS', 'PHP', 'Nodejs']

console.log(experience.length) */

//* 14th
/* // Array - ordered list of items - coposite / complex data type

// Create an array that describes yourself. Use the three primitive data types you've learned
// It should contain your name (string), your age (number), and whether you like pizza (boolean)
let mySelf = ['Karl Louise Rito', `Age: ${20}years old`, `Pizza?: ${true}`]
 */

//* 15th
/* let cards = [7, 4]
cards.push(6)
console.log(cards) */

//* 16th
/* let cards = [7, 4]
cards.push(6)
//console.log(cards)

// Push the newMessage to the messages array, and then log out the array

let messages = [
    "Hey, how's it going?",
    "I'm great, thank you! How about you?",
    'All good. Been working on my portfolio lately.'
]

let newMessage = 'Same here!'
messages.push(newMessage) //* ADD ARRAY
console.log(messages)
messages.pop() //* REMOVE ARRAY
console.log(messages) */

//* 17th
/* const messageEl = document.getElementById('message-el')
const sumEl = document.getElementById('sum-el')
const cardEl = document.getElementById('card-el')

let firstCard = 1
let secondCard = 8
let cards = [firstCard, secondCard]
let sum = cards[0] + cards[1]
let hasBlackJack = false
let isAlive = true
let message = ''

function startGame() {
    renderGame()
}

function renderGame() {
    if (sum <= 20) {
        message = 'Do you want to draw a new card?'
    } else if (sum === 21) {
        message = "Wohoo! You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = `You're out of the game!`
        isAlive = false
    }

    cardEl.textContent = `Cards: ${cards[0]}, ${cards[1]},`
    sumEl.textContent = `Sum: ${sum}`
    messageEl.textContent = message
}

function newCard() {
    console.log('Drawing a new card from the deck!')
    let card = 5
    sum += card
    renderGame()
    cardEl.textContent += ` ${card}`
}
 */

//* 18th

// Create a for loop that counts from 10 to 100 in steps of 10
// Use console.log to log out the numbers
/* 
for (let i = 10; i < 101; i += 10) {
    console.log(i)
} */

//* 19th

/* let messages = [
    "Hey, how's it going?",
    "I'm great, thank you! How about you?",
    'All good. Been working on my portfolio lately.',
    'Same here!',
    'Great to hear'
]

for (let i = 0; i < messages.length; i++) {
    console.log(messages[i])
} */

//* 20th
/* let cards = [7, 3, 9]

for (let index = 0; index < cards.length; index++) {
    console.log(cards[index])
}
 */

//* 21th
/* let sentence = ['Hello', 'my', 'name', 'is', 'Per']
let greetingEl = document.getElementById('greeting-el')

for (let index = 0; index < sentence.length; index++) {
    greetingEl.textContent += sentence[index] + ' '
} */

// Render the sentence in the greetingEl paragraph using a for loop and .textContent

//* 22th
/* const messageEl = document.getElementById('message-el')
const sumEl = document.getElementById('sum-el')
const cardEl = document.getElementById('card-el')

let firstCard = 1
let secondCard = 8
let cards = [firstCard, secondCard]
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ''

function startGame() {
    renderGame()
}

function renderGame() {
    if (sum <= 20) {
        message = 'Do you want to draw a new card?'
    } else if (sum === 21) {
        message = "Wohoo! You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = `You're out of the game!`
        isAlive = false
    }

    // Create a for loop that renders out all the cards instead of just two
    cardEl.textContent = `Cards: `
    for (let i = 0; i < cards.length; i++) {
        cardEl.textContent += cards[i] + ' '
    }
    sumEl.textContent = 'Sum: ' + sum
    messageEl.textContent = message
}

function newCard() {
    console.log('Drawing a new card from the deck!')
    let card = 5
    sum += card
    cards.push(card)
    renderGame()
} */

//* 23rd
/* const messageEl = document.getElementById('message-el')
const sumEl = document.getElementById('sum-el')
const cardEl = document.getElementById('card-el')

let firstCard = getRandomCard()
let secondCard = getRandomCard()
let cards = [firstCard, secondCard]
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ''

function startGame() {
    renderGame()
}

function renderGame() {
    if (sum <= 20) {
        message = 'Do you want to draw a new card?'
    } else if (sum === 21) {
        message = "Wohoo! You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = `You're out of the game!`
        isAlive = false
    }

    // Create a for loop that renders out all the cards instead of just two
    cardEl.textContent = `Cards: `
    for (let i = 0; i < cards.length; i++) {
        cardEl.textContent += cards[i] + ' '
    }
    sumEl.textContent = 'Sum: ' + sum
    messageEl.textContent = message
}

function newCard() {
    console.log('Drawing a new card from the deck!')
    let card = getRandomCard()
    sum += card
    cards.push(card)
    renderGame()
} */

//* 24th
/* let player1Time = 102
let player2Time = 101

function getFastestRaceTime() {
    if (player1Time < player2Time) {
        return 'player 1: ' + player1Time + 'seconds'
    } else if (player1Time > player2Time) {
        return 'player 2: ' + player2Time + 'seconds'
    } else {
        return 'Tie!!'
    }
}

console.log('The Fastest is ' + getFastestRaceTime())
 */

//* 24th
/* let player1Time = 108
let player2Time = 107

function getFastestRaceTime() {
    if (player1Time < player2Time) {
        return 'player 1: ' + player1Time + 'seconds'
    } else if (player1Time > player2Time) {
        return 'player 2: ' + player2Time + 'seconds'
    } else {
        return 'Tie!!'
    }
}

console.log('The Fastest is ' + getFastestRaceTime())

function getTotalRaceTime() {
    let total = player1Time + player2Time
    return total
}

let totalTime = getTotalRaceTime()
console.log(totalTime)
 */

//* 25th

/* const messageEl = document.getElementById('message-el')
const sumEl = document.getElementById('sum-el')
const cardEl = document.getElementById('card-el')
// 2. Use getRandomCard() to set the values of firstCard and secondCard
let firstCard = getRandomCard()
let secondCard = getRandomCard()
let cards = [firstCard, secondCard]
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ''

// 1. Create a function, getRandomCard(), that always returns the number 5

function getRandomCard() {
    return 5
}
getRandomCard()

function startGame() {
    renderGame()
}

function renderGame() {
    if (sum <= 20) {
        message = 'Do you want to draw a new card?'
    } else if (sum === 21) {
        message = "Wohoo! You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = `You're out of the game!`
        isAlive = false
    }

    // Create a for loop that renders out all the cards instead of just two
    cardEl.textContent = `Cards: `
    for (let i = 0; i < cards.length; i++) {
        cardEl.textContent += cards[i] + ' '
    }
    sumEl.textContent = 'Sum: ' + sum
    messageEl.textContent = message
}

function newCard() {
    // 3. Use the getRandomCard() to set the value of card
    console.log('Drawing a new card from the deck!')
    let card = getRandomCard()
    sum += card
    cards.push(card)
    renderGame()
}
 */
// let randomNumber = Math.floor(Math.random() * 6) + 1

// console.log(randomNumber)

/* let hasCompletedCourse = true
let givesCertificate = true

function generateCertificate() {
    return hasCompletedCourse && givesCertificate
        ? 'Generating certificate....'
        : 'You did not meet the requirements'
    //  if (hasCompletedCourse && givesCertificate) {
    //     console.log('Generating certificate....')
    // }
}
let generate = generateCertificate()
console.log(generate) */

/* let hasSolvedChallenge = false
let hasHintsLeft = false

// Create an if statement that checks that both variables are false.
// If so, run the showSolution() function

function showSolution() {
    //* TERNARY OPERATOR
    return !hasSolvedChallenge && !hasHintsLeft
        ? 'Showing the solution....'
        : 'You have already solved the problem'
        //* IF STATEMENT
    // if (!hasSolvedChallenge && !hasHintsLeft) {
    //     console.log('Showing the solution....')
    // }
}
let show = showSolution()
console.log(show)
// showSolution() */

/* let likesDocumentaries = true
let likesStartups = false

function recommendMovie() {
    //* TERNARY OPERATOR
    return likesDocumentaries || likesStartups
        ? 'Hey, check out this new film we think you will like!'
        : "You're Boring!"

    //* IF STATEMENT
    // if (likesDocumentaries || likesStartups) {
    //     console.log('Hey, check out this new film we think you will like!')
    // } else {
        //     console.log("You're Boring!")
    // }
}
// let recommend = recommendMovie()
// console.log(recommend)
*/

/* let airbnb = {
    name: 'Dairsie Castle',
    guests: 14,
    bedrooms: 4,
    isBig: true,
    rating: 4.96,
    prices: [190, 173, 1089]
}

console.log(airbnb.prices) */

//* 26th

//* I will wrap up blackjack here in this part
const messageEl = document.getElementById('message-el')
const sumEl = document.getElementById('sum-el')
const cardEl = document.getElementById('card-el')
let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ''
let gameStart = false

let player = {
    name: 'Karl',
    chips: 500
}

let playerEl = document.getElementById('player-el')
playerEl.textContent = player.name + ': $' + player.chips

function getRandomCard() {
    let randomNumber = Math.floor(Math.random() * 13) + 1
    if (randomNumber === 1) {
        return 11
    } else if (randomNumber > 10) {
        return 10
    } else {
        return randomNumber
    }
}

function startGame() {
    gameStart = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()

    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    isAlive = true
    renderGame()
}

function renderGame() {
    if (sum <= 20) {
        message = 'Do you want to draw a new card?'
    } else if (sum === 21) {
        message = "Wohoo! You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = `You're out of the game!`
        isAlive = false
    }

    cardEl.textContent = `Cards: `
    for (let i = 0; i < cards.length; i++) {
        cardEl.textContent += cards[i] + ' '
    }
    sumEl.textContent = 'Sum: ' + sum
    messageEl.textContent = message
}

function newCard() {
    // Only allow the player to get a new card if she IS alive and does NOT have Blackjack
    if (isAlive && !hasBlackJack) {
        console.log('Drawing a new card from the deck!')
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()
    } else if (!gameStart) {
        messageEl.textContent = 'CLICK START GAME FIRST!'
    } else if (!isAlive) {
        messageEl.textContent = "Can't Draw! You're Dead!!!"
    } else if (hasBlackJack) {
        messageEl.textContent = 'You are already a BLACKJACK!!!'
    }
}
