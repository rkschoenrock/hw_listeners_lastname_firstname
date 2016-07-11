var heading = document.getElementsByTagName('h1')[0];
var paragraphs = document.getElementsByTagName('p');

heading.addEventListener('click', function () {
    var newParagraph = document.createElement('article');
    newParagraph.innerHTML = '<p>This is click number ' + [paragraphs.length + 1] + '</p>';
    document.getElementsByTagName('body')[0].appendChild(newParagraph);
});
