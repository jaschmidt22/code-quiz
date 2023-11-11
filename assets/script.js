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
var startButton = document.getElementById("start-button");
var paragraph = document.querySelector("p");
var questionContainer = document.getElementById("question-container");
var timer = document.getElementById("timer"); 

startButton.addEventListener("click", startQuestions);


var questionContainer= [
  {
    question: "Which JavaScript method is used to write in the browser's console?",
    choices: ["console.write()", "console.log()", "console.output()", "console.write()"],
    correctIndex: 1,     
  }
]
  //  question: 
 // }  


//inner HTML = "" //empty string --clear previous question 

var questionIndex = 0

for (let i = 0; i< questions[questionIndex].choices.length; i++) {
    var choice = questions[questionIndex].choices[i];
    var button = document.createElement("button");
    button.textContent = choice;
    //loop over choices, build a button, data attr to store index, 
    button.setAttribute("data-index", i);
    //once button is clicked need an algo to
    //compare the users choice and the correctIndex (answer)
    button.addEventListener("click", userChoice);
    questionContainer.appendChild(button);
}

//start questions function is called when the start button is clicked
function startQuestions() {
  startButton.style.display = "none";  //hide start button
  paragraph.style.display = "none";    //hide paragraph
  questionContainer.style.display = "block"; //show questions container
  timerCount = 75;
  startTimer();
}

function startTimer() {
  let time = 75;

  timer.textContent = time;
  let timerInterval = setInterval(function() {   //set timer interval
    time--;
    timer.textContent = time;
  }, 1000)
}

  
  function userChoice(event) {

}
