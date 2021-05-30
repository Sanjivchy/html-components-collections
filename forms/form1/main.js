const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');
const signbtnMbl = document.getElementById('signBtn');
const signbtnMbl2 = document.getElementById('signBtn1');

const formContainer = document.getElementById('formContainer')

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});


signbtnMbl.addEventListener("click", () => {
	toggle();
  });
  signbtnMbl2.addEventListener("click", () => {
	toggle();
  });


function toggle() {
  formContainer.classList.toggle("sign-mbl");
}

  
