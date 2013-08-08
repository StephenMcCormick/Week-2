function submitForm() 
{
var email = document.getElementById('email');
var firstName = document.getElementById('firstName');
var lastName = document.getElementById('lastName');
var comments = document.getElementById('comments');
var errors_found = false;
var firstNamePass = false;
var lastNamePass = false;
var emailPass = false;
var commentsPass = false;

// checks the validation for the first name input box
if ( firstName.value.length == 0 )
{
	err_firstName.innerHTML = "<em>*Please fill in your First Name</em>";
	firstName.className = "bad";
	firstNamePass = false;
} else {
	err_firstName.innerHTML = "";
	firstName.className = "good";
	firstNamePass = true;
}

// checks the validation for the last name input box
if ( lastName.value.length == 0 )
{
	err_lastName.innerHTML = "<em>*Please fill in your Last Name</em>";
	lastName.className = "bad";
	lastNamePass = false;
} else {
	err_lastName.innerHTML = "";
	lastName.className = "good";
	lastNamePass = true;
}

// checks the validation for the email input box should have @ and . within it to be true
if ( email.value.length == 0 || email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1 )
{
	err_email.innerHTML = "<em>*Please fill in your email</em>";
	email.className = "bad";
	errors_found = true;
	emailPass = false;
} else {
	err_email.innerHTML = "";
	email.className = "good";
	emailPass = true;
}

// checks the validation of the comments textarea and to ensure theres no more than 150 charecters
if ( comments.value.length == 0)
{
	err_comment.innerHTML = "<em>*Please add some comments</em>";
	comments.className = "bad";
	commentsPass = false;
} else if ( comments.value.length > 150 )
{
	err_comment.innerHTML = "<em>*No more than 150 letters please</em>";
	comments.className = "bad";
	commentsPass = false;
} else {
	err_comment.innerHTML = "";
	comments.className = "good";
	commentsPass = true;
}

// if an error is found within the email input box a messege will be displayed
if (errors_found == true){
	alert("Email is incorrect");
}

if (firstNamePass == true && lastNamePass == true && emailPass == true && commentsPass == true)
{
	var firstNameResults = "<li>First Name: " + firstName.value + "</li>";
	var lastNameResults = "<li>Last Name: " + lastName.value + "</li>";
	var emailResults = "<li>Email: " + email.value + "</li>";
	var commentsResults = "<li>Comments: " + comments.value + "</li>";
	
	document.getElementById("MyFormID").style.display = "none";

	document.getElementById("conformation").innerHTML = "<h1>COMFORMATION PAGE</h1><br /><ul>" + firstNameResults + lastNameResults + emailResults + commentsResults + "</ul>";

	//form.style.display = "none";
	console.log(firstNameResults);
	console.log(lastNameResults);
	console.log(emailResults);
	console.log(commentsResults);
}







}
