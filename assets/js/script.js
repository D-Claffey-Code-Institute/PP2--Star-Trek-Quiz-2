/* Questions and Answers*/

const quizData = [{
        question: "Who was the captain in the first pilot episode of the original Star Trek Series?",
        options: ["James T. Kirk", "Jean-Luc Picard", "Christopher Pike", "Spock"],
        answer: "Christopher Pike",
    },
    {
        question: "Who wrote the 'The Theme From Star Trek'?",
        options: ["Gene Roddenberry", "John Williams", "Alexander Courage", "William Shatner"],
        answer: "Alexander Courage"
    },
    {
        question: "What is James T. Kirk's Fathers name?",
        options: ["George", "Greg", "James", "Christopher"],
        answer: "George"
    },
    {
        question: "What was Spock's mother's name?",
        options: ["Winona", "Katherine", "Amala", "Amanda"],
        answer: "Amanda"
    },
    {
        question: "What was Captain Janeway's first mission after becoming the captain of the USS Voyager?",
        options: ["Fight the Borg", "Capture the Maquis ship", "Explore the Delta Quadrant", "Protect the Ocampa"],
        answer: "Capture the Maquis ship",
    },
    {
        question: "Whats the name of the ship under Benjamin Sisko's command?",
        options: ["Enterprise", "Defiant", "Dominion", "Voyager"],
        answer: "Defiant",
    },
    {
        question: "The theme song for Star Trek Enterprise is a cover of a song originally sung by:",
        options: ["Sheryl Crow", "Don Henley", "Neil Diamond", "Rod Stewart"],
        answer: "Rod Stewart",
    },
    {
        question: "Who was the first communications officer on the Enterprise?",
        options: ["Hoshi Sato", "Harry Kim", "Tasha Yar", "Nyota Uhara"],
        answer: "Hoshi Sato",
    },
    {
        question: "Who did not appear in at least three Star Trek TV series?",
        options: ["Reginald Barclay", "Q", "William Riker", "Borg"],
        answer: "Reginald Barclay",
    },
    {
        question: "Who provided the computer voice in the Star Trek TV franchise?",
        options: ["Gene Roddenberry", "Majel Barrett", "Christine Chapel", "William Shatner"],
        answer: "Majel Barrett",
    },
];

/* Constants declared for quiz */
const quizContainer = document.getElementById('quiz');
const resultContainer = document.getElementById('result');
const submitButton = document.getElementById('submit');
const retryButton = document.getElementById('retry');
const showAnswerButton = document.getElementById('showAnswer');
const mainHeader = document.getElementsByClassName('main');
const username = document.getElementById('username');

/* Variables for the quiz */
let currentQuestion = 0;
let score = 0;
let incorrectAnswers = [];

/* Function to shuffle questions for each attempt */
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}


/* Function to display the current question */
function displayQuestion() {
    /* Gets the data for the current question */
    const questionData = quizData[currentQuestion];

    const questionElement = document.createElement('div');
    questionElement.className = 'question';
    questionElement.innerHTML = questionData.question;

    const optionsElement = document.createElement('div');
    optionsElement.className = 'options';

    /* Shuffles answers */
    const shuffledOptions = [...questionData.options];
    shuffleArray(shuffledOptions);

    /* Loops through each shuffled option */
    for (let i = 0; i < shuffledOptions.length; i++) {
        const option = document.createElement('label');
        option.className = 'option';
        /* Creates radio button for answer */
        const radio = document.createElement('input');
        radio.type = 'radio';
        radio.name = 'quiz';
        radio.value = shuffledOptions[i];

        const optionText = document.createTextNode(shuffledOptions[i]);

        option.appendChild(radio);
        option.appendChild(optionText);
        optionsElement.appendChild(option);
    }
    quizContainer.innerHTML = '';
    quizContainer.appendChild(questionElement);
    quizContainer.appendChild(optionsElement);
}

//Function that checks the answers are correct and adds to the users score if true
function checkAnswer() {
    const selectedOption = document.querySelector('input[name="quiz"]:checked');

    /* Checks if an option has been selected */
    if (selectedOption) {
        const answer = selectedOption.value;
        /* Checks if the answer is correct */
        if (answer === quizData[currentQuestion].answer) {
            score++;
            /* Stores wrong answers for dispaly later */
        } else {
            incorrectAnswers.push({
                question: quizData[currentQuestion].question,
                incorrectAnswer: answer,
                correctAnswer: quizData[currentQuestion].answer,
            });
        }
        /* Moves to next question */
        currentQuestion++;
        selectedOption.checked = false;
        /* Checks if all questions have been answered */
        if (currentQuestion < quizData.length) {
            displayQuestion();
        } else {
            displayResult();
        }
    }
}

/* Function to display the quiz result */
function displayResult() {
    /* Hides the quiz container and submit button */
    quizContainer.style.display = 'none';
    submitButton.style.display = 'none';
  
    /* Shows the retry and show answer buttons */
    retryButton.style.display = 'inline-block';
    showAnswerButton.style.display = 'inline-block';
  
    /* Displays a message based on the score */
    if (score > 0 && score <= 2) {
      resultContainer.innerHTML = `Back to the Academy Cadet`;
    } else if (score >= 3 && score <= 5) {
      resultContainer.innerHTML = `You've got some work to do Ensign`;