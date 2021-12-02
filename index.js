var readlineSync = require('readline-sync');

var user = readlineSync.question("What's Your Name? ");

console.log("\nWelcome " + user + " to DO YOU KNOW Anup!!! \n");

var score = 0;
var questionnaire = [
  {
    question: "Where do I live?",
    answer: "Kolkata"
  },
  {
    question: "How old am I?",
    answer: "26"
  },
  {
    question: "Which is my favorite computer game?",
    answer: "Valorant"
  },
  {
    question: "What is my first pet's name?",
    answer: "Honey"
  },
  {
    question: "Where do I work?",
    answer: "SpotDraft"
  }
];
var leaderBoard = [
  {
    name: "Arnab",
    score: "5"
  },
  {
    name: "Shubham",
    score: "5"
  },
  {
    name: "Swapnil",
    score: "4"
  }
];

function attemptQuiz(quiz, questionNo) {
  console.log(questionNo + ".", quiz.question);
  var answer = readlineSync.question("Your Answer: ");
  if (quiz.answer.toLowerCase() === answer.toLowerCase()) {
    score = score + 1;
    console.log("\nYup, You Got That Right!!! \n")
  } else {
    console.log("\nNope, That's Not It. Correct answer is " + quiz.answer, "\n");
  }
}

for (var i = 0; i < questionnaire.length; i++) {
  attemptQuiz(questionnaire[i], i+1);
}

console.log("You SCORED: ", score, "\n");

console.log("Check out the high scores, if you should be there ping me and I'll update it");

for (var i = 0; i < leaderBoard.length; i++) {
  console.log(leaderBoard[i].name + ":", leaderBoard[i].score);
}
