//


//page says coding quiz challange
//upper left has link to "view high scores"
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


var questions = [
  {
    question: "What color is the sky?",
    choices : ["Blue", "Red", "Yellow", "Green"],
    correctIndex: 0,

        
  }  
]

inner HTML = "" //empty string 

var questionIndex = 0

for(let i = 0; i< questions[questionIndex].choices.length; i++) {
    const choice = questions[questionIndex].choices[i];
 //loop over choices, build a button, data attr to store index, omce button is clicked need an algo
 //compare the users choice and the correctIndex (answer)
}