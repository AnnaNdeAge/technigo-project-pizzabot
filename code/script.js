// Start here

// Step 1 - Welcome and introduction
// Your code goes here
alert(
  `Welcome to our Javascript Pizzeria. Ready to Start? - Click 'OK' to begin.`
);

let person = prompt("Please enter your name:", "no name");

if (person !== null) {
  alert('Hello, ' + person + ', welcome to our Foodbot!')
}

// Step 2 - Food choice
let foodChoice = parseInt(prompt("What type of food would you like to eat? \nEnter a number: \n1 - Pizza \n2 - Pasta \n3 - Salad"))
if (foodChoice === 1) {
  alert("You have choosen Pizza!")
} else if (foodChoice === 2) {
  alert("You have choosen Pasta")
} else if (foodChoice === 3) {
  alert("You have choosen Salad")
} else {
  alert("Please enter a valid number!")
}


// Step 3 - Subtype choice
// Your code goes here

// Step 4 - Age
// Your code goes here

// Step 5 - Order confirmation
// Your code goes here
