const form = document.getElementById("form");
const firstname = document.getElementById("fname");
const secondname = document.getElementById("sname");
const username = document.getElementById("user-name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");

form.addEventListener('submit',(e) => {
    e.preventDefault();
    checkInputs();
})

function checkInputs() {
	// trim to remove the whitespaces
    const firstnameValue = firstname.value.trim();
    const secondnameValue = secondname.value.trim();
	const usernameValue = username.value.trim();
	const emailValue = email.value.trim();
	const phoneValue = phone.value.trim();
	
	
	// validation name
    if(firstnameValue === '') {
		setErrorFor(firstname, 'Le nom d utilisateur est vide');
	} else {
		setSuccessFor(firstname);
	}

    if(secondnameValue === '') {
		setErrorFor(secondname, 'Le nom d utilisateur est vide');
	} else {
		setSuccessFor(secondname);
	}

	if(usernameValue === '') {
		setErrorFor(username, 'Le nom d utilisateur est vide');
	} else {
		setSuccessFor(username);
	}
	// validation email
	
	if(emailValue === '') {
		setErrorFor(email, 'Email est vide');
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, 'Not a valid email');
	} else {
		setSuccessFor(email);
	}
	// validation phone
	
	if(phoneValue === '') {
		setErrorFor(phone, 'phone et vide');
	} else {
		setSuccessFor(phone);
	}

}

// message error 
function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
    small.innerText = message;
	formControl.className = 'form-field error';
      
}
// message success

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-field success';
}

// check email
	
function isEmail (email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}
