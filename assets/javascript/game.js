//global variables//

var correct = 0

var incorrect = 0



// Arrays holding Questions, choices and answers

var trivia1 = {
  question: "Which was the first Nintendo product?",
  responses: ["Playing Cards", "Television", " Nintendo Entertainment System", "Gamecube"],
  correct: 0
}

var trivia2 = {
  question: "The Nintendo Entertainment System was released in the US in what year?",
  responses: ["1987", "1976", "1982", "1985"],
  correct: 3
}

var trivia3 = {
  question: "which of these is the oldest Nintendo console?",
  responses: ["3DS", "Gamecube", "Switch", "Wii"],
  correct: 1
}

var trivia4 = {
  question: "Which of these is not a Nintendo Console?",
  responses: ["Nintendo64", " Nintendo Entertainment System", "Gamecube", "Dreamcast"],
  correct: 3
}

var trivia5 = {
  question: "The Legend of Zelda was first released on which console ",
  responses: ["Nintendo64", "Famicom Disk System", " Nintendo Entertainment System", "Gamecube"],
  correct: 1
}

var trivia6 = {
  question: "How many Super Mario World Games are there? ",
  responses: ["12", "19", " 26", "21"],
  correct: 3
}

var trivia7 = {
  question: "Super Smash Bros features characters from how many different Nintendo Games?",
  responses: ["9", "6", "12", "4"],
  correct: 0
}

var trivia8 = {
  question: "Mario's brother's name is ________. ",
  responses: ["Yoshi", "Wario", "Luigi", "Joe"],
  correct: 2
}

var trivia9 = {
  question: "The first savable video game was a Nintendo game, which one was it?",
  responses: ["Legend of Zelda", "Super Mario Bros", " Legend of Zelda: Link to the Past", "Duck Hunt"],
  correct: 3
}

var trivia10 = {
  question: "What Year was the Nintendo Corporation founded?",
  responses: ["1980", "1976", "1910", "1889"],
  correct: 3
}

// Questions array that indexes each choice
var questions = [trivia1, trivia2, trivia3, trivia4, trivia5, trivia6, trivia7, trivia8, trivia9, trivia10 ]

// displays question and options
function displayQuestion(selected) {

  $("#question").html("<h1>" + questions[selected].question + "</h1>");
  $("#button1").html(questions[selected].responses[0]);
  $("#button2").html(questions[selected].responses[1]);
  $("#button3").html(questions[selected].responses[2]);
  $("#button4").html(questions[selected].responses[3]);

};

//starting function that displays first q an choices
function start() {
  index = 0;
  displayQuestion(index);
};

//function that moves question forward to next one
function answer() {
  $('.btn').on('click', function () {
    $(".question").html('');
    $("#button1").html('');
    $("#button2").html('');
    $("#button3").html('');
    $("#button4").html('');

  })
};
//what do I do with a correct answer
function answerCorrect() {
  correct++;
  console.log("right " + correct);
  answer();
  displayQuestion(index++);
};
//what do I do with an incorrect answer
function answerIncorrect() {
  incorrect++;
  console.log("wrong: " + incorrect);
  answer();
  displayQuestion(index++);
};

//displays score at end of game
function Score() {
  $('#question').empty();
  $('#question').append("<h2>" + correct + " correct</h2>");
  $('#question').append("<h2>" + wrong + " incorrect</h2>");
};



//runs start function
start();


//how to determine what the right answer is on clicked
$('.btn').on('click', function () {
  console.log($(this));

  //changes button ID to a number to compare
  if (this.id === 'button1') {
    var answerChosen = '0';
  } else if (this.id === 'button2') {
    answerChosen == '1';
  } else if (this.id === 'button3') {
    answerChosen = '2';
  } else if (this.id === 'button4') {
    answerChosen = '3';
  }
  if ((answerChosen === '0') && (questions[index].correct === 0)) {
    answerCorrect();
  } else if (answerChosen === '0') {
    answerIncorrect();

  }

  if ((answerChosen === '1') && (questions[index].correct === 1)) {
    answerCorrect();
  } else if (answerChosen === '1') {
    answerIncorrect();

  }

  if ((answerChosen === '2') && (questions[index].correct === 2)) {
    answerCorrect();
  } else if (answerChosen === '2') {
    answerIncorrect();

  }

  if ((answerChosen === '3') && (questions[index].correct === 3)) {
    answerCorrect();
  } else if (answerChosen === '3') {
    answerIncorrect();
  }
});