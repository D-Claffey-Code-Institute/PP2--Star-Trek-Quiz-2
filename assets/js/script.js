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