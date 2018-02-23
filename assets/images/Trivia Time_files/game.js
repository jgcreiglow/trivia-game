//global variables//

var correct = 0

var incorrect = 0

var unanswered = 0



// Question & Answer Arrays
var triviaOne = {
    question: "Which was the first Nintendo product?",
    responses: ["Playing Cards", "Television", " Nintendo Entertainment System", "Gamecube"],
    correct: 0,
  }

var triviaTwo = {
    question: "The Nintendo Entertainment System was released in the US in what year?",
    responses: ["1987", "1976", "1982", "1985"],
    correct: 3,
  }

var triviaThree =     {
    question: "which of these is the oldest Nintendo console?",
    responses: ["3DS", "Gamecube", "Switch", "Wii"],
    correct: 1,
  }

var triviaFour =     {
    question: "Which of these is not a Nintendo Console?",
    responses: ["Nintendo64", "Dreamcast", " Nintendo Entertainment System", "Gamecube"],
    correct: 1,
  }

var triviaFive =     {
    question: "Which of these is not a Nintendo Console?",
    responses: ["Nintendo64", "Dreamcast", " Nintendo Entertainment System", "Gamecube"],
    correct: 1,
  }

var triviaSix =     {
    question: "Which of these is not a Nintendo Console?",
    responses: ["Nintendo64", "Dreamcast", " Nintendo Entertainment System", "Gamecube"],
    correct: 1,
  }

var triviaSeven =     {
    question: "Which of these is not a Nintendo Console?",
    responses: ["Nintendo64", "Dreamcast", " Nintendo Entertainment System", "Gamecube"],
    correct: 1,
  }

var triviaEight =     {
    question: "Which of these is not a Nintendo Console?",
    responses: ["Nintendo64", "Dreamcast", " Nintendo Entertainment System", "Gamecube"],
    correct: 1,
  }

var triviaNine =     {
    question: "Which of these is not a Nintendo Console?",
    responses: ["Nintendo64", "Dreamcast", " Nintendo Entertainment System", "Gamecube"],
    correct: 1,
  }

var triviaTen =     {
    question: "Which of these is not a Nintendo Console?",
    responses: ["Nintendo64", "Dreamcast", " Nintendo Entertainment System", "Gamecube"],
    correct: 1,
  }
var questions =[triviaOne, triviaTwo, triviaThree, triviaFour, triviaFive, triviaSix, triviaSeven, triviaEight, triviaNine, triviaTen]
//
function displayQuestion(selected){

  $("#question").html("<h1>" + questions[selected].question + "</h1>");
  $("#button1").html(questions[selected].responses[0]);
  $("#button2").html(questions[selected].responses[1]);
  $("#button3").html(questions[selected].responses[2]);
  $("#button4").html(questions[selected].responses[3]);

};

function start() {
	index = 0;
	displayQuestion(index);
	};

function answer() {
	$('.btn').on('click', function() {
		index++;
		$(".question").html('');
		$("#button1").html('');
		$("#button2").html('');
		$("#button3").html('');
		$("#button4").html('');
		displayQuestion();
	})
};

start();
answer();

// displayQuestion(0);
// return # correct, incorrect unanswered in jumbotron when timer goes off


// if(button checked = correct){
//correct++
//}
//else if (button checked = incorrect){
//wrong ++
//}
//else {
//unanswered ++
//}
