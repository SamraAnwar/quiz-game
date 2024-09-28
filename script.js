var questions = [
    {
      question: " What is the capital of Japan?",
      choices: ["Beijing", " Seoul", "Tokyo", "Bangkok"],
      answer: "Tokyo"
    },
    {
      question: "Which element has the chemical symbol O ?",
      choices: ["Gold", "Oxygen", " Silver", "Helium"],
      answer: "Oxygen"
    },
    {
      question: " Who wrote the 'play Romeo and Juliet'?",
      choices: ["Charles Dickens", "William Shakespeare", " Mark Twain", "Jane Austen"],
      answer: "William Shakespeare"
    },
    {
      question: " What is the largest planet in our solar system?",
      choices: ["Earth", "Mars", "Jupiter", " Saturn"],
      answer: "Jupiter"
    },
    {
      question: " In which year did the Titanic sink?",
      choices: [" 1912", "1905", "1920", "1898"],
      answer: " 1912"
    }
  ];
  
  var currentQuestionIndex = 0;
  var score = 0;
  
  var questionElement = document.getElementById('question');
  var choicesElement = document.getElementById('choices');
  var nextBtn = document.getElementById('nextBtn');
  var feedbackElement = document.getElementById('feedback');
  var scoreContainer = document.getElementById('score-container');
  var scoreElement = document.getElementById('score');
  var playAgainBtn = document.getElementById('playAgainBtn');
  
  function loadQuestion() {
    var currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    choicesElement.innerHTML = '';
  
    currentQuestion.choices.forEach(function(choice) {
      var button = document.createElement('button');
      button.textContent = choice;
      button.onclick = function() { checkAnswer(choice); };
      choicesElement.appendChild(button);
    });
  
    feedbackElement.classList.add('hidden');
    nextBtn.classList.add('hidden');
  }
  
  function checkAnswer(selectedChoice) {
    var currentQuestion = questions[currentQuestionIndex];
    if (selectedChoice === currentQuestion.answer) {
      feedbackElement.textContent = 'Correct!';
      feedbackElement.style.color = 'green';
      score++;
    } else {
      feedbackElement.textContent = 'Incorrect!';
      feedbackElement.style.color = 'red';
    }
  
    feedbackElement.classList.remove('hidden');
    nextBtn.classList.remove('hidden');
  }
  
  nextBtn.addEventListener('click', function() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      loadQuestion();
    } else {
      showScore();
    }
  });
  
  function showScore() {
    document.getElementById('quiz-container').classList.add('hidden');
    scoreContainer.classList.remove('hidden');
    scoreElement.textContent = score + ' out of ' + questions.length;
  }
  
  playAgainBtn.addEventListener('click', function() {
    location.reload(); 
  });
  loadQuestion();
  