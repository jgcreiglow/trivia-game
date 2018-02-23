//global variables//

var correct = 0

var incorrect = 0

var unanswered = 0




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
    responses: ["Nintendo64", " Nintendo Entertainment System", "Gamecube", "Dreamcast"],
    correct: 3,
  }

var triviaFive =     {
    question: "The Legend of Zelda was first released on which console ",
    responses: ["Nintendo64", "Famicom Disk System", " Nintendo Entertainment System", "Gamecube"],
    correct: 1,
  }

var triviaSix =     {
    question: "How many Super Mario World Games are there? ",
    responses: ["12", "19", " 26", "21"],
    correct: 3,
  }

var triviaSeven =     {
    question: "Super Smash Bros features characters from how many different Nintendo Games?",
    responses: ["9", "6", "12", "4"],
    correct: 0,
  }

var triviaEight =     {
    question: "Mario's brother's name is ________. ",
    responses: ["Yoshi", "Wario", "Luigi", "Joe"],
    correct: 2,
  }

var triviaNine =     {
    question: "The first savable video game was a Nintendo game, which one was it?",
    responses: ["Legend of Zelda", "Super Mario Bros", " Legend of Zelda: Link to the Past", "Duck Hunt"],
    correct: 03,
  }

var triviaTen =     {
    question: "What Year was the Nintendo Corporation founded?",
    responses: ["1980", "1976", "1910", "1889"],
    correct: 3,
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
		displayQuestion(index);
	})
};

function answerCorrect() {
	correct++;
	console.log("correct");
};

function answerIncorrect() {
	incorrect++;
  console.log("boooo");
};

function Score() {
	$('#question').empty();
	$('#question').append("<h2>" + correct + " correct</h2>");
	$('#question').append("<h2>" + wrong + " incorrect</h2>");
};




start();

$('.btn').on('click', function() {
 console.log($(this));
 if(this.id == 'button1') {
 	var answerChosen = '0';
} else if(this.id == 'button2') {
 	answerChosen = '1';
} else if (this.id == 'button3') {
 	answerChosen = '2';
} else if (this.id == 'button4') {
 	answerChosen = '3';
 }
 if ((answerChosen == '0') && (questions[index].correct == 0)) {
 	answerCorrect();
  answer();
} else if (answerChosen == '0') {
 	answerIncorrect();
  answer();
 }

 if ((answerChosen == '1') && (questions[index].correct == 1)) {
 	answerCorrect();
  answer();
} else if (answerChosen == '1') {
 	answerIncorrect();
  answer();
 }

 if ((answerChosen == '2') && (questions[index].correct == 2)) {
 	answerCorrect();
  answer();
} else if (answerChosen == '2') {
 	answerIncorrect();
  answer();
 }

 if ((answerChosen == '3') && (questions[index].correct == 3)) {
   answerCorrect();
  answer();
} else if (answerChosen == '3') {
   answerIncorrect();
  answer();
 }
});

console.log(correct);

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
