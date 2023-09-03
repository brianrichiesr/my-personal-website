/* Brian Richie JavaScript for Demo Site */

/* This will create an 'h2' element, add text to 'h2' element, find the 'main' element and then append the 'h2' element to the bottom of the 'main' element */
const h2 = document.createElement("h2");
h2.textContent = "This content added by JavaScript";
document.querySelector("main").appendChild(h2);

/* Declare a variable and set its value equal to the number one */
let count = 1;

/* Function that will create a message for the console and then increment the value of 'count' by one */
function addToCount() {
    console.log(`You have clicked me ${count} ${count === 1 ? "time" : "times"}!`);
    count++;
}

/* Find the 'button' element, in a different way than I found an element in earlier code, add text to the 'button' element, add text to the 'button' element, then add an event listener to the 'button' element that will call the 'addToCount' function everytime the 'button' element is clicked  */
const button = document.getElementsByTagName('button')[0];
button.textContent = "Click Me!"
button.addEventListener("click", addToCount);