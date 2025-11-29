const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const quiz = [
  { question: "What is the capital of India?", answer: "delhi" },
  { question: "How many continents are there?", answer: "7" },
  { question: "Which planet is known as the Red Planet?", answer: "mars" },
  { question: "What is H2O commonly called?", answer: "water" },
  { question: "Who is known as the Father of India?", answer: "mahatma gandhi" },
  { question: "Which is the largest ocean?", answer: "pacific ocean" },
  { question: "Which gas do plants release?", answer: "oxygen" },
  { question: "What is the national bird of India?", answer: "peacock" },
  { question: "How many players in a cricket team?", answer: "11" },
  { question: "Which is the largest mammal?", answer: "blue whale" }
];

let score = 0;
let index = 0;

console.log("==============================");
console.log("        Simple GK Quiz");
console.log("==============================\n");

function askNext() {
  if (index === quiz.length) {
    console.log(`Quiz Over!\nYour score: ${score}/${quiz.length}`);
    rl.close();
    return;
  }

  rl.question(`Q${index + 1}: ${quiz[index].question}\nYour answer: `, (userAnswer) => {
    userAnswer = userAnswer.trim().toLowerCase();

    if (userAnswer === quiz[index].answer) {
      console.log("Correct!\n");
      score++;
    } else {
      console.log("Wrong! Correct answer:", quiz[index].answer, "\n");
    }

    index++;
    askNext();
  });
}

askNext();
