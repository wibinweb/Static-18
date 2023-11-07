var form = document.getElementById('form').addEventListener('submit', function(event1){
	event1.preventDefault();
	var email = document.getElementById('email').value.trim();
	var emailError = document.getElementById('emailError');
	var main = document.getElementById('main');
	var emailValue = document.getElementById('emailValue');
	var section = document.getElementById('section-alert');
	if (email === ''){
		emailError.classList.toggle('error-p-change');
	} else {
		main.classList.toggle('main-hide');
		section.classList.toggle('section-show');
		emailValue.textContent= email;
	}
})


var buttonToHide = document.getElementById('buttonToHide').addEventListener('click', function(event){
	var section = document.getElementById('section-alert');
	section.classList.toggle('section-hide');
})


