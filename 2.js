function is_name_valid(name) {
	var UpperCase = /[A-Z]/g;
	if (UpperCase.test(name)) {
		return true;
	}
	return false;
}
console.log(is_name_valid('TIARA')); //true

function is_age_valid(age) {
	if (age.length == 2) {
		return true;
	}
	return false;
}
console.log(is_age_valid('21')); //true

function is_username_valid(username) {
	var usernameCase = /([a-z]{3})+([_.])+([0-9]{3})/g;
	if (usernameCase.test(username)) {
		return true;
	}
	return false;
}
console.log(is_username_valid('yani_333')); //true
console.log(is_username_valid('dian.11')); //false
