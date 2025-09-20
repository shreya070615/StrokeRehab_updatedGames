let score = 0;

// Drag & Drop for Motor Tasks
function allowDrop(ev) {
    ev.preventDefault();
}
function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}
function drop(ev) {
    ev.preventDefault();
    let data = ev.dataTransfer.getData("text");
    let target = ev.target;
    if(target.classList.contains("dropzone")) {
        target.appendChild(document.getElementById(data));
        score += 10;
        updateScore();
        target.style.backgroundColor = "#2ecc71";
        setTimeout(()=>{target.style.backgroundColor="#f0f4f8"}, 500);
    }
}

// Score Update
function updateScore() {
    let board = document.getElementById("scoreBoard");
    if(board) board.innerText = "Score: " + score;
}

// Cognitive Games
function memoryGame() {
    let colors = ["red", "green", "blue", "yellow"];
    let sequence = [];
    for(let i=0;i<3;i++) {
        sequence.push(colors[Math.floor(Math.random()*colors.length)]);
    }
    alert("Memorize this sequence: " + sequence.join(", "));
    let answer = prompt("Enter the colors in order, comma separated:");
    if(answer.toLowerCase().replace(/\s+/g,'') === sequence.join(",").toLowerCase().replace(/\s+/g,'')) {
        alert("Correct! Well done.");
        score += 20;
        updateScore();
    } else {
        alert("Oops! Correct sequence: " + sequence.join(", "));
    }
}

// Combined Cognitive + Motor Task
function combinedCookingTask() {
    alert("Pick ingredients in correct order and place them on counters!");
    let ingredients = ["Tomato", "Potato", "Carrot"];
    let answer = prompt("Enter the order to pick (comma separated):");
    if(answer.toLowerCase().replace(/\s+/g,'') === ingredients.join(",").toLowerCase().replace(/\s+/g,'')) {
        alert("Great! Task completed successfully.");
        score += 30;
        updateScore();
    } else {
        alert("Incorrect order! Correct order was: " + ingredients.join(", "));
    }
}

// Matching Game
function matchingGame() {
    let items = ["Plate","Cup","Spoon","Fork"];
    let shuffled = items.sort(()=>Math.random()-0.5);
    let answer = prompt("Match the order: " + shuffled.join(", "));
    if(answer.toLowerCase().replace(/\s+/g,'') === items.join(",").toLowerCase().replace(/\s+/g,'')) {
        alert("Correct Matching!");
        score += 20;
        updateScore();
    } else {
        alert("Try Again! Correct order: " + items.join(", "));
    }
}
