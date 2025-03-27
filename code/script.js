// Start here

// Step 1 - Welcome and introduction
// Your code goes here
alert(
  `Welcome to our Javascript Pizzeria. Ready to Start? - Click 'OK' to begin.`
);

let person = prompt("Please enter your name:", "Guest");

if (person !== null) {
  alert('Hello ' + person + ', welcome to our Foodbot!')
}

// Step 2 - Food choice
var foodChoice = parseInt(prompt("What type of food would you like to eat? \nEnter a number: \n1 - Pizza \n2 - Pasta \n3 - Salad"))
function foodMenu() {
  if (foodChoice === 1) {
    return "Pizza";
  } else if (foodChoice === 2) {
    return "Pasta";
  } else if (foodChoice === 3) {
    return "Salad";
  } else {
    alert("Please enter a valid number!")
  }

}

alert("You have chosen " + foodMenu())
//alert("You have chosen" + foodType() + "!")

// Step 3 - Subtype choice
var foodSubtypeChoice = menuSubtypeChoice()
function menuSubtypeChoice() {
  if (foodChoice === 1) {
    let pizzaType = parseInt(prompt("What type of Pizza would you like to eat? \nEnter a number: \n1 - Margherita \n2 - Capriciosa \n3 - Bufala"))
    if (pizzaType === 1) {
      return "Margherita";
    } else if (pizzaType === 2) {
      return "Capriciosa";
    } else if (pizzaType === 3) {
      return "Bufala";
    } else {
      alert("Please enter a valid number!")
    }
  } else if (foodChoice === 2) {
    let pastaType = parseInt(prompt("What type of Pasta would you like to eat? \nEnter a number: \n1 - Carbonara \n2 - Bolognese \n3 - Arrabbiata"))
    if (pastaType === 1) {
      return "Carbonara";
    } else if (pastaType === 2) {
      return "Bolognese";
    } else if (pastaType === 3) {
      return "Arrabbiata";
    } else {
      alert("Please enter a valid number!")
    }
  } else if (foodChoice === 3) {
    let saladType = parseInt(prompt("What type of Salad would you like to eat? \nEnter a number: \n1 - Caesar \n2 - Tuna \n3 - Caprese"))
    if (saladType === 1) {
      return "Caesar";
    } else if (saladType === 2) {
      return "Tuna";
    } else if (saladType === 3) {
      return "Caprese";
    } else {
      alert("Please enter a valid number!")
    }
  }
}


alert("You have chosen " + foodSubtypeChoice)
// Step 4 - Age
var age = ageReply()
function ageReply() {
  parseInt(prompt("Is this food for an adult or a child? Please type your age:"))
}

var ageNumber = parseInt(age)
alert("Your age:" + toString(age))


var orderConfirmation = orderReply()
function orderReply() {
  if (age > 12) {
    parseInt(prompt("One adult sized " + foodSubtypeChoice + ". " + "That will be 15 euro. Are you sure you want to order this? Enter a number to confirm. \n1 - Yes \n2 - No"))
  }
  else if (age <= 12) {
    parseInt(prompt("One child sized " + foodSubtypeChoice + ". " + "That will be 10 euro. Are you sure you want to order this? Enter a number to confirm. \n1 - Yes \n2 - No"))
  }
}


// Step 5 - Order confirmation
// Your code goes here
