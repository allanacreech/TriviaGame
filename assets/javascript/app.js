
//variable to track which postition/ question user is on
var pos = 0, test, test_status, question, choice, choices, chA, chB, chC, correct = 0;

var questions = [
["What cup was the Iocane Poision put in?<br><br> <img src= 'assets/images/poision.jpg'", "Vizzini" , "Both" , "Dread Pirate Roberts" , "B"],
["What is the Word? <br><br> <img src= 'assets/images/number1.gif'", "Almost Dead", "Murder", "Inconceivable", "C"],
["Which word means it's the same forward to backward? <br><br> <img src='assets/images/Princess-Bride-DVD-cover.jpg'", "Palindrome", "Plankton", "Inkling", "A"],
["Does Fezziks hit him with a rock?<br><br> <img src='assets/images/fezziks.jpg'", "Maybe", "Yes", "No", "C"],
["What does R.O.U.S. stand for?<br><br> <img src='assets/images/rous.png'", "Really Oval Attacking Species", "Random Objects Array Slice", "Rodents Of Unusual Size", "C"],
["What date did the Princess Bride Come to Theaters?<br><br> <img src='assets/images/images.jpg'", "January 4, 1983", "September 25, 1987", "December 7, 1999", "B"],
["What is the name of the actor playing the sick boy?<br><br> <img src='assets/images/boy.jpg'", "Fred Savage", "Mark Hamel", "Steven Universe", "A"],
["Hello. My Name Is ______?<br><br> <img src='assets/images/hello.gif'", "Diago", "Dan", "Inigo Montoya", "C"],
["Who is this Character?<br><br> <img src='assets/images/miracle.gif'", "Miracle Max", "Magical Matt", "Mad Mittens", "A"],
["Was the Dread Pirate Roberts Right or Left Handed?<br><br> <img src='assets/images/sword.jpg'", "Left", "Right", "Ambidextrous", "B"]


];

function _(x) {
	return document.getElementById(x);
}

function renderQuestion(){
	//Below:This references <div id ="test> and identifies it
	test = _("test"); 
	if(pos >= questions.length){
	//Below:To stop this test when last answer is submitted
	test.innerHTML = "<h2>You got " + correct + " of " + questions.length + " questions correct</h2>";
	_("test_status").innerHTML = "Test Completed";
	pos = 0; //returns the test questions back to 0 to be able to restart the test
	correct = 0;//returns the answers back to 0 to be able to restart the test
	return false; //stops renderQuestion function...so when the test is completed it doesn't add more questions in an error
}
	//Below:grabs the question (starts at 0 adds 1 each time) to the total number of questions
	_("test_status").innerHTML = "Question " + (pos + 1) + " of " + questions.length;

	question = questions [pos] [0];//Sting "What is ten plus 4"
	chA = questions [pos] [1];//Array element "12"
	chB = questions [pos] [2];//Array element "14"
	chC = questions [pos] [3];//Array element "16"
	
	//Below:adding radial buttons for user to select which answer in quiz HTML += appends the information together
	test.innerHTML = "<h3>" + question + "</h3>"; //adding question into HTML page
	test.innerHTML += "<input type ='radio' name= 'choices' value = 'A'>" + chA + "<br>";
	test.innerHTML += "<input type ='radio' name= 'choices' value = 'B'>" + chB + "<br>";
	test.innerHTML += "<input type ='radio' name= 'choices' value = 'C'>" + chC + "<br><br>";
	test.innerHTML += "<button onclick = 'checkAnswer ()'>Submit Answer</button>";

	
}
//Below: Function to run checkAnswer() to check the answer they submit
function checkAnswer(){
	// alert ("ok we will"); //this tested out code in Chrome

	//Below: for loop to get through all of our name = "choices" to see click choice from user

	choices = document.getElementsByName("choices");//document.getElementbyName is making an Array
	for(var i=0; i<choices.length; i++){
		if(choices[i].checked){
			choice = choices[i].value;
		}
	}
	//Below:Evaluate if correct choice in answer
	if(choice == questions[pos][4]){
		correct ++;
	}
	//Below:changes which question is now seen
	pos++;

	//Below: Then renders the next question to keep the test going forward to the next questions
	renderQuestion();
}
//Below: When page is loaded it will make the renderQuestion start
window.addEventListener ("load", renderQuestion, false);

//try timer here and once its submitted timer needs to restart
	
	var countDown = (180,"status");//secs=180, elem="status"
	
	function countDown(secs,elem){
		var element = document.getElementById(elem);
		element.innerHTML = "<h2>Timer Remaining " +secs+ " seconds</h2>";
		//Below: this will stop timer not run into negative numbers
		if(secs < 1){
			clearTimeout(timer);
			element.innerHTML = '<h2>Countdown Complete!</h2>';
			element.innerHTML += '<a href="#">Click here to start</a>';
		}

		secs --;//takes away 1 

		var timer = setTimeout('countDown('+secs+' "'+elem+'")',1000);//timer to remeber new number
	}