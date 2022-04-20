// Quiz Questions
var questions = [
  {
    question:
      "1. What year did the San Francisco Giants win their first World Series?",
    choices: ["1954", "1989", "2002", "2010"],
    correctAnswer: 3,
  },
  {
    question: "2. Who has hit the most home runs for the San Francisco Giants?",
    choices: ["Buster Posey", "Barry Bonds", "Willie Mays", "Willie McCovey"],
    correctAnswer: 2,
  },
  {
    question: "3. What player had the nickname 'The Freak'?",
    choices: ["Shaun Estes", "Tim Lincecum", "Brian Wilson", "Juan Marichal"],
    correctAnswer: 1,
  },
  {
    question:
      "4. What is the San Francisco Giants franchise record for wins in a single season?",
    choices: ["107", "103", "116", "99"],
    correctAnswer: 0,
  },
  {
    question:
      "5. How many World Series have the San Francisco Giants won since 2010?",
    choices: ["3", "2", "1", "0"],
    correctAnswer: 0,
  },
];

// When I click 'Start', then display question block
const startButton = document.getElementById("start-btn");
const questionBlock = document.getElementById("questionblock")

startButton.addEventListener("click", event => {
  toggleDisplay(startButton.id)
  toggleDisplay(questionBlock.id)
  var oneMinute = 60,
      display = document.getElementById("time");
  startTimer(oneMinute, display);
  $("#question").html(questions[0].question);

});

function toggleDisplay(elementId) {
  var x = document.getElementById(elementId);
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

// Timer needs to start
function startTimer(duration, display) {
  var timer = duration, seconds;
  setInterval(function () {
      seconds = parseInt(timer % 60, 10);

      display.textContent = seconds;

      if (--timer < 0) {
          timer = duration;
      }
  }, 1000)
}

// When I click "Next" button, the next question appears
document.getElementById("nextButton")




// TO-DO
// 
// when i click next, get me the next question