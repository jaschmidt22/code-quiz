//questions array

var questions = [
  {
    question: "Which JavaScript method is used to write in the browser's console?",
    choices: ["console.write()", "console.log()", "console.output()", "console.write()"],
    correctIndex: 1,     
  },
  {
    question: "'Function' and 'Var' are known as what type of terms?",
    choices: ["keywords", "data types", "declaration statements", "prototypes"],
    correctIndex: 2,
  },
  {
    question: "Which HTML element is used to add JavaScript code to an HTML page?",
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
      choiceButton.addEventListener("click", function(event) {
          var userChoice = event.target.textContent;
          checkAnswer(userChoice);
    })
    
      choicesButtons.appendChild(choiceButton);
  }
}
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

//start questions function is called when the start button is clicked

    function startQuestions() {
      console.log("startQuestions called");
      startButton.style.display = "none";  //hide start button
      paragraph.style.display = "none";    //hide paragraph
      questionContainer.style.display = "block"; //show questions container
      startTimer();
      currentQuestionIndex = 0;
      displayQuestion();

}

    function startTimer() {
      var time = 75;

      timer.textContent = time;
      let timerInterval = setInterval(function() {   //set timer interval
      time--;
      timer.textContent = time;

    if (time <=0) {
      clearInterval(timerInterval);
      endQuiz(); 
    }
  }   , 1000);
}
})

      for (let i = 0; i < questions[currentQuestionIndex].choices.length; i++) {
        var choices = questions[currentQuestionIndex].choices[i];
        var button = document.createElement("button");
        button.textContent = choices;
  //loop over choices, build a button, data attr to store index, 
        button.setAttribute("data-index", i);

   

    function endQuiz() {
                                      
      var remainingTime = parseInt(timer.textContent);
      var score = remainingTime;        
  
    // Prompt the user for their initials
      var initials = prompt("Enter your initials:");
  
      if (initials) {
  
      var scoreObject = {
        score: score,
        initials: initials
      };
      
      // get existing scores from local storage
      var existingScores = JSON.parse(localStorage.getItem("highScores")) || [];
      
      // Add the new scores
      existingScores.push(scoreObject);
      
      // Save the updated scores back to local storage
      localStorage.setItem("highScores", JSON.stringify(existingScores)); 

      window.location.href = "high-scores.html"; 


  }
  }
}
