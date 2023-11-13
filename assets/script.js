//
//page says coding quiz challange
//upper left has link to "view high scores" -- link to high score page
//click button that says start quiz -- even listenter to start questions 
//timer starts in upper right hand corner (75sec) --use set interval timer #9-10
//first question appears with multiple choice answers  -- store questions in an array #18 line 9 
//click answer -- event listener
//buttons change color when hovered/clicked

//a new question then appears and "right" or "wrong" appears under the question -- #18 line 18 function for looping questions, go to next question, whether right, or wrong and decrese time
//store result 
//timer decreases by approx 20 seconds if answer is wrong
//timer decrease by 1 or 2 sec if answer is right

//WHEN all questions are answered or the timer reaches 0
//THEN the game is over
//WHEN the game is over
//THEN I can save my initials and score 
//enter initals in box and click submit -- event listener for submit button 

//final score is the time remaining when all questions are answered
//store score and initial -- #18 line 31 (window.location.href to send to high score page)
//high scores and initial will present -- local storage  
//2 buttons will appear "clear high scores" and "go back"
//click "go back" and will return to beginning page
//click 

//event listener to start questions when start button is clicked
var questions = [
  {
    question: "Which JavaScript method is used to write in the browser's console?",
    choices: ["console.write()", "console.log()", "console.output()", "console.write()"],
    correctIndex: 1,     
  },
  {
    question: "The 'function and 'var' are known as?",
    choices: ["keywords", "data types", "declaration statements", "prototypes"],
    correctIndex: 2,
  },
  {
    question: "Which HTML element is sued to put the JavaScript code?",
    choices: ["<javascript>", "<js>", "<scripting>", "<script>"],
    correctIndex: 3, 
  },
  {
    question: "What was the original name of JavaScript when it was discovered?",
    choices: ["LiveScript", "EScript", "JScript", "Mocha"],
    correctIndex : 0,
  },
  {
    question: "Which of the following built-in methods is used to remove the last element from an array and return that element?",
    choices: ["last", "pop", "get", "None of these"],
    correctIndex : 1,
  }
] 

var currentQuestionIndex = 0
var score = 0;

document.addEventListener("DOMContentLoaded", function() {
var startButton = document.getElementById("start-button");
var paragraph = document.querySelector("p");
var questionContainer = document.getElementById("question-container");
var timer = document.getElementById("timer"); 


startButton.addEventListener("click", startQuestions);

function displayQuestion() {
  console.log("displayQuestion called");
  var question = questions[currentQuestionIndex];
  var questionElement = document.getElementById("questions");
  var choicesButtons = document.getElementById("answer-buttons");

  questionElement.textContent = question.question; //update question text

  choicesButtons.innerHTML = "";  // clear prev choices 

 // Loop through choices and create buttons for each
 for (var i = 0; i < question.choices.length; i++) {
  var choiceButton = document.createElement("button");
  choiceButton.textContent = question.choices[i]; 

  //event listener to check if the choice is correct
  choiceButton.addEventListener("click", function (event) {
      checkAnswer(event.target.textContent);
    });
    
    choicesButtons.appendChild(choiceButton);
  }
}

//start questions function is called when the start button is clicked

function startQuestions() {
  console.log("startQuestions called");
  startButton.style.display = "none";  //hide start button
  paragraph.style.display = "none";    //hide paragraph
  questionContainer.style.display = "block"; //show questions container
  startTimer();
  displayQuestion();

}

function startTimer() {
  let time = 75;

  timer.textContent = time;
  let timerInterval = setInterval(function() {   //set timer interval
    time--;
    timer.textContent = time;

    if (time <=0) {
      clearInterval(timerInterval);
      endQuiz(); 
    }
  }, 1000);
}
})

for (let i = 0; i < questions[currentQuestionIndex].choices.length; i++) {
  var choices = questions[currentQuestionIndex].choices[i];
  var button = document.createElement("button");
  button.textContent = choices;
  //loop over choices, build a button, data attr to store index, 
  button.setAttribute("data-index", i);

function checkAnswer(userChoice) {
    var question = questions[currentQuestionIndex];
      //user is correct, update score
    
      if (userChoice === question.choices[question.correctIndex]) {
        score++
      } else {
        timerCount -= 10;    //user incorrect, decrease time
    }

    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
      displayQuestion();     //show next question
    } else {
      endQuiz()               //end quiz if no more questions
    }
    
    button.addEventListener("click", userChoice);
    questionContainer.appendChild(button);
  }

}
