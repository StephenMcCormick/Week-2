function submitForm() 
{
var email = document.getElementById('email');
var firstName = document.getElementById('firstName');
var lastName = document.getElementById('lastName');
var comments = document.getElementById('comments');
var errors_found = false;

if ( firstName.value.length == 0 )
{
  err_firstName.innerHTML = "<em>*Please fill in your First Name</em>";
	firstName.className = "bad";
} else {
	err_firstName.innerHTML = "";
	firstName.className = "good";
}

if ( lastName.value.length == 0 )
{
	err_lastName.innerHTML = "<em>*Please fill in your Last Name</em>";
	lastName.className = "bad";
} else {
	err_lastName.innerHTML = "";
	lastName.className = "good";
}

if ( email.value.length == 0 || email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1 )
{
	err_email.innerHTML = "<em>*Please fill in your email</em>";
	email.className = "bad";
	errors_found = true
} else {
	err_email.innerHTML = "";
	email.className = "good";
}

if ( comments.value.length == 0 || comments.value.length > 150)
{
	err_comment.innerHTML = "<em>*Please add some comments, but no more than 150 letters</em>";
	comments.className = "bad";
} else {
	err_comment.innerHTML = "";
	comments.className = "good";
}

if (errors_found == true){
	alert("Email is incorrect");
}

}
