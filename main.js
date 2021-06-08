// QUESTIONS

const questions = [
  {
    "question": "I feel run down and drained of physical or emotional energy.",
    "answer1": "Strongly Disagree",
    "answer1Total": "1",
    "answer2": "Disagree",
    "answer2Total": "2",
    "answer3": "Neutral",
    "answer3Total": "3",
    "answer4": "Agree",
    "answer4Total": "4",
    "answer5": "Strongly Agree",
    "answer5Total": "5"
  },
  {
    "question": "I have negative thoughts about my job.",
    "answer1": "Strongly Disagree",
    "answer1Total": "1",
    "answer2": "Disagree",
    "answer2Total": "2",
    "answer3": "Neutral",
    "answer3Total": "3",
    "answer4": "Agree",
    "answer4Total": "4",
    "answer5": "Strongly Agree",
    "answer5Total": "5"
  },
  {
    "question": "I am harder and less sympathetic with people than perhaps they deserve.",
    "answer1": "Strongly Disagree",
    "answer1Total": "1",
    "answer2": "Disagree",
    "answer2Total": "2",
    "answer3": "Neutral",
    "answer3Total": "3",
    "answer4": "Agree",
    "answer4Total": "4",
    "answer5": "Strongly Agree",
    "answer5Total": "5"
  },
  {
    "question": "I am easily irritated by small problems or by my co-workers and team.",
    "answer1": "Strongly Disagree",
    "answer1Total": "1",
    "answer2": "Disagree",
    "answer2Total": "2",
    "answer3": "Neutral",
    "answer3Total": "3",
    "answer4": "Agree",
    "answer4Total": "4",
    "answer5": "Strongly Agree",
    "answer5Total": "5"
  },
  {
    "question": "I feel  that I am misunderstood or unappreciated by my co-workers.",
    "answer1": "Strongly Disagree",
    "answer1Total": "1",
    "answer2": "Disagree",
    "answer2Total": "2",
    "answer3": "Neutral",
    "answer3Total": "3",
    "answer4": "Agree",
    "answer4Total": "4",
    "answer5": "Strongly Agree",
    "answer5Total": "5"
  },
  {
    "question": "I feel that I have no one to talk to.",
    "answer1": "Strongly Disagree",
    "answer1Total": "1",
    "answer2": "Disagree",
    "answer2Total": "2",
    "answer3": "Neutral",
    "answer3Total": "3",
    "answer4": "Agree",
    "answer4Total": "4",
    "answer5": "Strongly Agree",
    "answer5Total": "5"
  },
  {
    "question": "I feel that I am achieving less than I should.",
    "answer1": "Strongly Disagree",
    "answer1Total": "1",
    "answer2": "Disagree",
    "answer2Total": "2",
    "answer3": "Neutral",
    "answer3Total": "3",
    "answer4": "Agree",
    "answer4Total": "4",
    "answer5": "Strongly Agree",
    "answer5Total": "5"
  },
  {
    "question": "I feel under an unpleasant level of pressure to succeed.",
    "answer1": "Strongly Disagree",
    "answer1Total": "1",
    "answer2": "Disagree",
    "answer2Total": "2",
    "answer3": "Neutral",
    "answer3Total": "3",
    "answer4": "Agree",
    "answer4Total": "4",
    "answer5": "Strongly Agree",
    "answer5Total": "5"
  },
  {
    "question": "I feel that I am not getting what I want out of my job.",
    "answer1": "Strongly Disagree",
    "answer1Total": "1",
    "answer2": "Disagree",
    "answer2Total": "2",
    "answer3": "Neutral",
    "answer3Total": "3",
    "answer4": "Agree",
    "answer4Total": "4",
    "answer5": "Strongly Agree",
    "answer5Total": "5"
  },
  {
    "question": "I feel that I am in the wrong organization or the wrong profession.",
    "answer1": "Strongly Disagree",
    "answer1Total": "1",
    "answer2": "Disagree",
    "answer2Total": "2",
    "answer3": "Neutral",
    "answer3Total": "3",
    "answer4": "Agree",
    "answer4Total": "4",
    "answer5": "Strongly Agree",
    "answer5Total": "5"
  },
  {
    "question": "I am frustrated with parts of my job.",
    "answer1": "Strongly Disagree",
    "answer1Total": "1",
    "answer2": "Disagree",
    "answer2Total": "2",
    "answer3": "Neutral",
    "answer3Total": "3",
    "answer4": "Agree",
    "answer4Total": "4",
    "answer5": "Strongly Agree",
    "answer5Total": "5"
  },
  {
    "question": "I feel that organizational politics or bureaucracy frustrate my ability to do a good job.",
    "answer1": "Strongly Disagree",
    "answer1Total": "1",
    "answer2": "Disagree",
    "answer2Total": "2",
    "answer3": "Neutral",
    "answer3Total": "3",
    "answer4": "Agree",
    "answer4Total": "4",
    "answer5": "Strongly Agree",
    "answer5Total": "5"
  },
  {
    "question": "I feel that there is more work to do than I practically have the ability to do.",
    "answer1": "Strongly Disagree",
    "answer1Total": "1",
    "answer2": "Disagree",
    "answer2Total": "2",
    "answer3": "Neutral",
    "answer3Total": "3",
    "answer4": "Agree",
    "answer4Total": "4",
    "answer5": "Strongly Agree",
    "answer5Total": "5"
  },
  {
    "question": "I feel that I do not have time to do many of the things that are important to doing a good quality job.",
    "answer1": "Strongly Disagree",
    "answer1Total": "1",
    "answer2": "Disagree",
    "answer2Total": "2",
    "answer3": "Neutral",
    "answer3Total": "3",
    "answer4": "Agree",
    "answer4Total": "4",
    "answer5": "Strongly Agree",
    "answer5Total": "5"
  },
  {
    "question": "I find that I do not have time to plan as much as I would like to.",
    "answer1": "Strongly Disagree",
    "answer1Total": "1",
    "answer2": "Disagree",
    "answer2Total": "2",
    "answer3": "Neutral",
    "answer3Total": "3",
    "answer4": "Agree",
    "answer4Total": "4",
    "answer5": "Strongly Agree",
    "answer5Total": "5"
  },
]


let currentQuestion = 0;
let score = [];
let selectedAnswersData = [];
const totalQuestions = questions.length;

const container = document.querySelector('.quiz-container');
const questionEl = document.querySelector('.question');
const option1 = document.querySelector('.option1');
const option2 = document.querySelector('.option2');
const option3 = document.querySelector('.option3');
const option4 = document.querySelector('.option4');
const option5 = document.querySelector('.option5');
const nextButton = document.querySelector('.next');
const previousButton = document.querySelector('.previous');
const restartButton = document.querySelector('.restart');
const result = document.querySelector('.result');

//Function to generate question 
function generateQuestions(index) {
  //Select each question by passing it a particular index
  const question = questions[index];
  const option1Total = questions[index].answer1Total;
  const option2Total = questions[index].answer2Total;
  const option3Total = questions[index].answer3Total;
  const option4Total = questions[index].answer4Total;
  const option5Total = questions[index].answer5Total;
  //Populate html elements 
  questionEl.innerHTML = `${question.question}`
  option1.setAttribute('data-total', `${option1Total}`);
  option2.setAttribute('data-total', `${option2Total}`);
  option3.setAttribute('data-total', `${option3Total}`);
  option4.setAttribute('data-total', `${option4Total}`);
  option5.setAttribute('data-total', `${option5Total}`);

  option1.innerHTML = `${question.answer1}`
  option2.innerHTML = `${question.answer2}`
  option3.innerHTML = `${question.answer3}`
  option4.innerHTML = `${question.answer4}`
  option5.innerHTML = `${question.answer5}`
}


function loadNextQuestion() {
  const selectedOption = document.querySelector('input[type="radio"]:checked');
  //Check if there is a radio input checked
  if (!selectedOption) {
    alert('Please select your answer!');
    return;
  }
  //Get value of selected radio
  const answerScore = Number(selectedOption.nextElementSibling.getAttribute('data-total'));

  ////Add the answer score to the score array
  score.push(answerScore);

  selectedAnswersData.push()


  const totalScore = score.reduce((total, currentNum) => total + currentNum);

  //Finally we incement the current question number ( to be used as the index for each array)
  currentQuestion++;

  //once finished clear checked
  selectedOption.checked = false;
  //If quiz is on the final question
  if (currentQuestion == totalQuestions - 1) {
    nextButton.textContent = 'Finish';
  }
  //If the quiz is finished then we hide the questions container and show the results 
  if (currentQuestion == totalQuestions) {
    container.style.display = 'none';
    result.innerHTML =
      ` 
           <h1 class="final-score">Your score: ${totalScore}</h1>
           <div class="summary">
              
              <h1>Score Interpretation</h1>
              <img src = "score.png"></img>
          </div>
           `;
    return;
  }
  generateQuestions(currentQuestion);
}

//Function to load previous question
function loadPreviousQuestion() {
  //Decrement quentions index
  currentQuestion--;
  //remove last array value;
  score.pop();
  //Generate the question
  generateQuestions(currentQuestion);
}

//Fuction to reset and restart the quiz;
function restartQuiz(e) {
  if (e.target.matches('button')) {
    //reset array index and score
    currentQuestion = 0;
    score = [];
    //Reload quiz to the start
    location.reload();
  }

}


generateQuestions(currentQuestion);
nextButton.addEventListener('click', loadNextQuestion);
previousButton.addEventListener('click', loadPreviousQuestion);
result.addEventListener('click', restartQuiz);