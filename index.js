let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-btn")
let saveResult = document.getElementById("save-result")
let count = 0

console.log(saveEl)

//increments people entered by 1 for each click
function increment() {
    count += 1
    countEl.textContent = count
}

//logs previously counted people under 'previous entries:'
function save() {
    saveResult.textContent += " " + count + " - "
    count = 0
    countEl.textContent = count
}

//Resets count & previous entries
function reset() {
    count = 0
    countEl.textContent = count
    saveResult.textContent = 'Previous entries:'
}