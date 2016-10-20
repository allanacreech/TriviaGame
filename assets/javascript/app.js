
//variable to track which postition/ question user is on
var pos = 0, test, test_status, question, choice, choices, chA, chB, chC, correct = 0;

var questions = [
["What is 10 + 4?", "12" , "14" , "16" , "B"],
["What is 20 - 9?", "7", "13", "11", "C"],
["What is 7 x 3?", "21", "24", "25", "A"],
["What is 8 / 2?", "10", "2", "4", "C"]

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