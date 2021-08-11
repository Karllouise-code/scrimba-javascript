// document.getElementById("count-el").innerText = 5

let countEl = document.getElementById('count-el')
let saveEl = document.getElementById('save-el')

let count = 0

function increment() {
    count += 1
    countEl.innerText = count
}

function save() {
    saveEl.textContent += count + ' - '
    console.log(count)
    countEl.textContent = 0
    count = 0
}

/* let username = "Karl"

let message = "You have three new notifications"
newMessage = message + ", " + username + "!"

let messageToUser = newMessage
console.log(messageToUser) */

/* let name = 42
let greeting = "Hi, my name is "

let myGreeting = greeting + name

console.log(myGreeting); */

/* let points = 4
let bonusPoints = "10"

let totalPoints = points + bonusPoints

console.log(totalPoints); */

/* 
9 
24 
51 
100100 
*/
/* console.log(4 + 5) // 9
console.log("2" + "4") // "24"
console.log("5" + 1) // "51"
console.log(100 + "100") // "100100" */
