const h2 = document.createElement("h2");
h2.textContent = "This content added by JavaScript";
document.querySelector("main").appendChild(h2);

let count = 1;

function addToCount() {
    console.log(`You have clicked me ${count} ${count === 1 ? "time" : "times"}!`);
    count++;
}

const button = document.getElementsByTagName('button')[0];
button.textContent = "Click Me!"
button.addEventListener("click", addToCount);