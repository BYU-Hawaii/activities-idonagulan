const animals = [
    {
        name: "elephant",
        description: "This animal is the largest land animal and has a trunk.",
        image: "/activities-idonagulan/final/image/elephant.jpg"
    },
    {
        name: "tiger",
        description: "This big cat is known for its orange coat with black stripes.",
        image: "/activities-idonagulan/final/image/tiger.avif"
    },
    {
        name: "penguin",
        description: "This flightless bird lives in Antarctica and waddles when it walks.",
        image: "/activities-idonagulan/final/image/penguin.jpg"
    },
    {
        name: "cat",
        description: "This are small furry animals that are often kept as pets. They have sharp claws and are good at hunting.",
        image: "/activities-idonagulan/final/image/cat.avif"
    },
    {
        name: "dog",
        description: "This have an incredible sense of smell, about 10,000 to 100,000 times more sensitive than humans.",
        image: "/activities-idonagulan/final/image/dog.jpg"
    },
    {
        name: "zebra",
        description: "This African wild horse has black-and-white stripes.",
        image: "/activities-idonagulan/final/image/zebra.jpg"
    }
];

let currentAnimal;
let revealedLetters;

function startGame() {
    currentAnimal = animals[Math.floor(Math.random() * animals.length)];
    revealedLetters = Array(currentAnimal.name.length).fill("_");
    document.getElementById("description").textContent = currentAnimal.description;
    document.getElementById("letters").textContent = revealedLetters.join(" ");
    document.getElementById("guessInput").value = "";
    document.getElementById("hint1").textContent = "";
    document.getElementById("hint2").innerHTML = "";
    document.getElementById("result").textContent = "";
}

function checkGuess() {
    let guess = document.getElementById("guessInput").value.toLowerCase();
    if (guess === currentAnimal.name) {
        document.getElementById("result").textContent = "Correct! You guessed the animal!";
    } else {
        document.getElementById("result").textContent = "Try again!";
    }
}

function showHint1() {
    let randomIndex = Math.floor(Math.random() * currentAnimal.name.length);
    revealedLetters[randomIndex] = currentAnimal.name[randomIndex];
    document.getElementById("letters").textContent = revealedLetters.join(" ");
    document.getElementById("hint1").textContent = "A letter has been revealed!";
}

function showHint2() {
    document.getElementById("hint2").innerHTML = `<img src="${currentAnimal.image}" alt="${currentAnimal.name}" width="200">`;
}

function playAgain() {
    startGame();
}

// Initialize the game when the page loads
window.onload = startGame;
