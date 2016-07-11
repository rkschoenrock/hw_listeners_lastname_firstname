var submit = document.getElementById('submit');
var firstName = document.getElementById('first');
var lastName = document.getElementById('last');
var email = document.getElementById('email');
var message = document.getElementById('message');

submit.addEventListener('click', function (event) {
    event.preventDefault();
    console.log('The firstName is: ' + firstName.value);
    console.log('The lastName is: ' + lastName.value);
    console.log('The email is: ' + email.value);
    console.log('The message is: ' + message.value);
});
