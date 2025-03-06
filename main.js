// Add a smurf to the button to listen for a click or action then run the set of instructions that follow.

document.querySelector('#submit').addEventListener('click', submitNewsLetter)

// when a click happens, run this instructions.. to go to the document, get the indicated values out and store

function submitNewsLetter() {
  let userEmail = document.querySelector('#email').value 
  let successMessage = document.querySelector('.main-sibling');

  // syntax to check if the entered email follows a valid email pattern

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // conditons to run if the exact results are met after checking the validity of the email

  if (emailRegex.test(userEmail)) {
    document.querySelector('main').style.display = 'none' 
    successMessage.style.display = 'block';
    document.querySelector('#successEmail').innerText = userEmail
  } else {
    document.querySelector('#error-msg').innerText = 'Valid email is required';
    document.querySelector('#error-msg').style.color = 'red';
    document.querySelector('#email').style.borderColor = 'red';
    document.querySelector('#email').style.backgroundColor = 'rgba(255, 62, 62, 0.1)';
    document.querySelector('#email').style.color = 'red';
  }
}

// adding a smurf on the dismiss button to refresh page and go back to Home after submitting

document.querySelector('.dismiss-button').addEventListener('click', goBackToHome)

function goBackToHome() {
  document.querySelector('main').style.display = 'block';
  document.querySelector('.main-sibling').style.display = 'none';
  document.querySelector('#email').value = '';
  document.querySelector('#error-msg').innerText = '';
    document.querySelector('#error-msg').style.color = '';
    document.querySelector('#email').style.borderColor = '';
    document.querySelector('#email').style.backgroundColor = '';
    document.querySelector('#email').style.color = '';
}

