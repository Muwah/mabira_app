function SaveItem() {

	var username = "username";
	var email = "email";
	var passConfirm="passConfirm";
	var pass="pass";

	var uPass=document.getElementById('passwordsignup').value;
	var uPassconf=document.getElementById('passwordsignup_confirm').value;
			
	var usernamesignup = document.forms.signupuser.usernamesignup.value;
	var emailsignup = document.forms.signupuser.emailsignup.value;
	var passwordsignup = document.forms.signupuser.passwordsignup.value;
	var passwordsignup_confirm = document.forms.signupuser.passwordsignup_confirm.value;
	if(uPass==uPassconf){
		localStorage.setItem(username, usernamesignup);
		localStorage.setItem(email, emailsignup);
		localStorage.setItem(pass, passwordsignup);
		localStorage.setItem(passConfirm, passwordsignup_confirm);
	}
	else{
		alert("Please verify that you entered matching passwords");
	}
	
	//doShowAll();
	
}

function loginUser(){

	var usernamelogin=document.getElementById('username').value;
	var passwordlogin=document.getElementById('password').value;
	
	var userGet = localStorage.getItem('username');
	var passGet = localStorage.getItem('pass');

	if(userGet==usernamelogin && passGet==passwordlogin){

		// alert("you are logged in");
		window.location.href = "map.html";
	}
	else{
		alert("wrong credentials");
		window.location.href = "index.html";

	}


	 return false;
	
}











// function ModifyItem() {
// 	var name = document.forms.signupuser.name.value;
// 	document.forms.signupuser.emailsignup.value = localStorage.getItem(name);
// 	doShowAll();
// }

// function RemoveItem() {
// 	var name = document.forms.signupuser.name.value;
// 	document.forms.signupuser.emailsignup.value = localStorage.removeItem(name);
// 	doShowAll();
// }

// function ClearAll() {
// 	localStorage.clear();
// 	doShowAll();
// }

// dynamically draw the table

// function doShowAll() {
// 	if (CheckBrowser()) {
// 		var key = "";
// 		var list = "<tr><th>Name</th><th>Value</th></tr>\n";
// 		var i = 0;
// 		for (i = 0; i <= localStorage.length - 1; i++) {
// 			key = localStorage.key(i);
// 			list += "<tr><td>" + key + "</td>\n<td>"
// 					+ localStorage.getItem(key) + "</td></tr>\n";
// 		}
// 		if (list == "<tr><th>Name</th><th>Value</th></tr>\n") {
// 			list += "<tr><td><i>empty</i></td>\n<td><i>empty</i></td></tr>\n";
// 		}
// 		document.getElementById('list').innerHTML = list;
// 	} else {
// 		alert('Cannot store shopping list as your browser do not support local storage');
// 	}
// }

/*
 * Checking the browser compatibility.
 * 
 * Alternately can use Modernizr scripts- JavaScript library that helps us to
 * detect the browser support for HTML5 and CSS features Example - <script
 * type="text/javascript" src="modernizr.min.js"></script>
 * 
 * if (Modernizr.localstorage) { //use localStorage object to store data } else {
 * alert('Cannot store user preferences as your browser do not support local
 * storage'); }
 */
function CheckBrowser() {
	if ('localStorage' in window && window['localStorage'] !== null) {
		// we can use localStorage object to store data
		return true;
	} else {
			return false;
	}
}