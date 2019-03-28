 function Question(text, choices, answer) {
this.text=text;
this.choices = choices;
this.answer = answer;
 }
    
 Question.prototype.correctAnswer = function(choice) {
     return choice === this.answer;
 }

 function Quiz(questions) {
    this.score = 0;
    this.questions = questions;
    this.questionIndex = 0;
}

Quiz.prototype.getQuestionIndex = function() {
    return this.questions[this.questionIndex];
}

Quiz.prototype.guess = function(answer) {
    if(this.getQuestionIndex().isCorrectAnswer(answer)) {
        this.score++;
    }

    this.questionIndex++;
}

Quiz.prototype.isEnded = function() {
    return this.questionIndex === this.questions.length;
}





function populate() {
    if(quiz.isEnded()) {
        showScores();
    }
    else {
        // show question
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;

        // show options
        var choices = quiz.getQuestionIndex().choices;
        for(var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }

        showProgress();
    }
};

function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        populate();
    }
};


function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
};

function showScores() {
    var gameOverHTML = "<h1>Result</h1>";
    gameOverHTML += "<h2 id='score'> Your scores: " + quiz.score + "</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
};

// create questions
var questions = [
    new Question("How many colors are in a rainbow?", ["9", "8","7", "6"], "7"),
    new Question("How many letters are in the alphabet", ["29", "28", "27", "26"], "26"),
    new Question("What color is a strawberry?", ["green", "blue","red", "orange"], "red"),
    new Question("What color is a bannana", ["yellow", "orange", "green", "blue"], "yellow"),
    new Question("What is the color of the ocean", "blue", "green","clear", "white"], "blue")
];

// create quiz
var quiz = new Quiz(questions);

// display quiz
populate();