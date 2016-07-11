document.addEventListener('scroll', function () { //when you scroll through the page
    document.getElementById('message').value = 'I changed your message'; //the text area field fills in with "I changed your message"
});

var message = document.getElementById('message'); // defines the text area

message.addEventListener('mousemove', function () { // when you mouse over the text area
    document.getElementById('message').value = 'Your message was reset'; // it changes text area message to "Your message was reset"
});
