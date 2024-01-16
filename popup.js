document.addEventListener('DOMContentLoaded', function() {
    var showAnswerButton = document.getElementById('showAnswer');
    var answerDiv = document.getElementById('answer');
  
    showAnswerButton.addEventListener('click', function() {
      answerDiv.style.display = 'block';
    });
  });
  