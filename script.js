
document.getElementById('message').addEventListener('input', function () {
  var maxLength = 250;
  var currentLength = this.value.length;
  var remainingCharacters = maxLength - currentLength;

  var counterElement = document.getElementById('charCount');
  counterElement.textContent = remainingCharacters + '/250 '  ;

  if (remainingCharacters < 0) {
      counterElement.style.color = 'red'; 
  } else {
      counterElement.style.color = '#555'; 
  }
});


