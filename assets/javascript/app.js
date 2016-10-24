"use strict";

//variable to track which postition/ question user is on
var pos = 0, test, test_status, question, choice, choices, chA, chB, chC, timer, timer2, correct = 0;
var timeToAnswer = 0;
var originalTimeToAnswer = 25;
var questionNumber = 0;
var questions = [
["What cup was the Iocane Poision put in?<br><br> <img src= 'assets/images/poision.jpg'>", "Vizzini" , "Both" , "Dread Pirate Roberts" , 'B'],
["What is the Word? <br><br> <img src= 'assets/images/number1.gif'>", "Almost Dead", "Murder", "Inconceivable", 3],
["Which word means it's the same forward to backward? <br><br> <img src='assets/images/Princess-Bride-DVD-cover.jpg'>", "Palindrome", "Plankton", "Inkling", 1],
["Does Fezziks hit him with a rock?<br><br> <img src='assets/images/fezziks.jpg'>", "Maybe", "Yes", "No", 3],
["What does R.O.U.S. stand for?<br><br> <img src='assets/images/rous.png'>", "Really Oval Attacking Species", "Random Objects Array Slice", "Rodents Of Unusual Size", 3],
["What date did the Princess Bride Come to Theaters?<br><br> <img src='assets/images/images.jpg'>", "January 4, 1983", "September 25, 1987", "December 7, 1999", 2],
["What is the name of the actor playing the sick boy?<br><br> <img src='assets/images/boy.jpg'>", "Fred Savage", "Mark Hamel", "Steven Universe", 1],
["Hello. My Name Is ______?<br><br> <img src='assets/images/hello.gif'>", "Diago", "Dan", "Inigo Montoya", 3],
["Who is this Character?<br><br> <img src='assets/images/miracle.gif'>", "Miracle Max", "Magical Matt", "Mad Mittens", 'A'],
["Was the Dread Pirate Roberts Right or Left Handed?<br><br> <img src='assets/images/sword.jpg'>", "Left", "Right", "Ambidextrous", 'B']


];

//handling click events
function setUpHandlers(){
	$("#submitButton").on("click",function(){
		checkAnswer();
	});
	$('#startButton').on("click", startQuiz);
	$("#startAgainButton").on("click", function(){
		reset();
		$("#startButton").css("display", "none");///hide start button
		$("#choices").css("display", "none");///hide choices button
		questionNumber = 0;
		renderQuestion(questionNumber);
	});

}

//handling start of game and functions to run trivia
function startQuiz(){
	$("#startButton").css("display", "none");///hide start button
	$("#choices").css("display", "none");///hide choices button
	questionNumber = 0;//shows questions
	renderQuestion(questionNumber);
}//end startquiz

function renderQuestion(pos){
	if(pos >= questions.length)
	{
		$("#submitButton").css("display", "none");
		$("#choices").css("display", "none");
		$("#status").css("display", "none");
		//Below:To stop this test when last answer is submitted
		test.html( "<h2>You got " + correct + " of " + questions.length + " questions correct</h2>");
		$("#test_status").html( "Test Completed");

		$("#startAgainButton").css("display", "block");
		return;
	}
	test = $("#test");


	//Below:This references <div id ="test> and identifies it
	$("#submitButton").css("display", "block");
	//Below:grabs the question (starts at 0 adds 1 each time) to the total number of questions
	$("#test_status").html("Question " + (pos + 1) + " of " + questions.length);

	question = questions [pos][0];//Sting "What is ten plus 4"
	chA = questions [pos][1];//Array element "12"
	chB = questions [pos][2];//Array element "14"
	chC = questions [pos][3];//Array element "16"
	
	//Below:adding radial buttons for user to select which answer in quiz HTML += appends the information together
	$("#test").html(question); //adding question into HTML page
	$("#choices").css("display", "block");///show choices button
	$("#A").html(chA);
	$("#B").html(chB);
	$("#C").html(chC);

	timeToAnswer = originalTimeToAnswer;
	var element = document.getElementById('status');
	element.innerHTML = "<h2>Timer Remaining " +timeToAnswer+ " seconds</h2>";
	timer = setInterval(function(){
		timeToAnswer--;
		element = document.getElementById('status');
		element.innerHTML = "<h2>Timer Remaining " +timeToAnswer+ " seconds</h2>";
		if(timeToAnswer == 0)
		{
			clearInterval(timer);
			$("#submitButton").css("display", "none");
			displayAnswer(pos);
			timer2 = setTimeout( function(){
				clearTimeout(timer2);
				$("#displayAnswer").html("");//clear answer after timer
				$("#choices").css("display", "none");///hide choices button
				choices = document.getElementsByName("choices");//document.getElementbyName is making an Array
				for(var i=0; i<choices.length; i++){
					choices[i].checked = false;
				}
				pos++;
				renderQuestion(pos);
			}, 3000);
		}
	}, 1000);
}

function displayAnswer(pos){
	var answer= 0;
	if(questions[pos][4] == 'A')
		answer = 1;
	else if(questions[pos][4] == 'B')
		answer = 2;
	else
		answer = 3;

	$("#displayAnswer").html(questions[pos][answer]);
}

//Below: Function to run checkAnswer() to check the answer they submit
function checkAnswer(){
	$("#submitButton").css("display", "none");
		//Below: for loop to get through all of our name = "choices" to see click choice from user

	choices = document.getElementsByName("choices");//document.getElementbyName is making an Array
	for(var i=0; i<choices.length; i++){
		if(choices[i].checked){
			choice = choices[i].value;
			break;
		}
	}
	//Below:Evaluate if correct choice in answer
	console.log(choice + " " + questions[pos][4]);

	if(choice == questions[pos][4]){
		correct ++;
		$("#submitButton").css("display", "none");
		$("#displayAnswer").html("Correct!!!!!");
			timer2 = setTimeout( function(){
				clearTimeout(timer2);
				$("#displayAnswer").html("");//clear answer after timer
				$("#choices").css("display", "none");///hide choices button
				choices = document.getElementsByName("choices");//document.getElementbyName is making an Array
				for(var i=0; i<choices.length; i++){
					choices[i].checked = false;
				}
				pos++;
				renderQuestion(pos);
			}, 3000);
	}
}

function reset()
{
	timeToAnswer = originalTimeToAnswer;
	$("#startButton").css("display", "block");///hide start button
	$("#submitButton").css("display", "none");
	$("#choices").css("display", "none");///hide choices button
	pos = 0; //returns the test questions back to 0 to be able to restart the test
	correct = 0;//returns the answers back to 0 to be able to restart the test
	$("#startAgainButton").css("display", "none");
	$("#submitButton").css("display", "none");
	$("#test").empty();
	$("#test_status").empty();
	$("#status").empty();
	$("#displayAnswer").empty();
	$("#choices").css("display", "none");///hide choices button
	choices = document.getElementsByName("choices");//document.getElementbyName is making an Array
	for(var i=0; i<choices.length; i++){
		choices[i].checked = false;
	}
}

$().ready(function(){
	reset();
	setUpHandlers();
});

