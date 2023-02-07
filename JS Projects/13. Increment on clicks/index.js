// document.getElementById("count").innerText = 5

// let count = 5
// count = count + 1
// console.log(count)

// intialize the count as 0

// listen for clicks on the increment button

// increment the count variable when the button is clicked

// change the count-el in the HTML to reflect the new count

people = document.getElementById("count-el")

let count = 0

function increment(){
    count++;
    people.innerHTML = count
}

// extra
function refreshcount() {
    count = 0
    people.innerHTML = count
}

function decrease() {
    count --;
    people.innerHTML = count
}
