const questions = [
    {
        question: "In the last month, how often have you been upset beacuse of something that happened unexpectedly?",
        answers: [
            { text: "Never", score: 0 },
            { text: "Almost never", score: 1 },
            { text: "Sometimes", score: 2 },
            { text: "Fairly often", score: 3 }
        ]
    },
    {
        question: "How often do you feel that you were unable to control the important things in your life?",
        answers: [
            { text: "Never", score: 0 },
            { text: "Almost never", score: 1 },
            { text: "Sometimes", score: 2 },
            { text: "Fairly often", score: 3 }
        ]
    },
    {
        question: "Do you find it difficult to concentrate on daily tasks?",
        answers: [
            { text: "Not at all", score: 0 },
            { text: "A little", score: 1 },
            { text: "Moderately", score: 2 },
            { text: "Very much", score: 3 }
        ]
    },
    {
        question: "How often do you feel overwhelmed?",
        answers: [
            { text: "Never", score: 0 },
            { text: "Rarely", score: 1 },
            { text: "Sometimes", score: 2 },
            { text: "Often", score: 3 }
        ]
    },
    {
        question: "How well do you sleep at night?",
        answers: [
            { text: "Very well", score: 0 },
            { text: "Well", score: 1 },
            { text: "Not so well", score: 2 },
            { text: "Not at all", score: 3 }
        ]
    },
    {
        question: "Do you feel lack of motivation to do your everyday tasks?",
        answers: [
            { text: "Never", score: 0 },
            { text: "Almost never", score: 1 },
            { text: "Sometimes", score: 2 },
            { text: "Fairly often", score: 3 }
        ]
    },
    {
        question: "How often have you felt confident about your ability to handle personal problems/everday tasks?",
        answers: [
            { text: "Never", score: 0 },
            { text: "Almost never", score: 1 },
            { text: "Sometimes", score: 2 },
            { text: "Fairly often", score: 3 }
        ]
    },
    {
        question: "Can you control your irritations in your life?",
        answers: [
            { text: "Yes", score: 0 },
            { text: "No", score: 1 },
            { text: "Sometimes", score: 2}
        ]
    },

    // Add more questions as needed
];

let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.getElementById("question");
const answerButtonsElement = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-button");
const resultContainer = document.getElementById("result-container");
const scoreElement = document.getElementById("score");

function startGame() {
    currentQuestionIndex = 0;
    score = 0;
    resultContainer.classList.add("hide");
    nextButton.classList.add("hide");
    showQuestion(questions[currentQuestionIndex]);
}

function showQuestion(question) {
    questionElement.innerText = question.question;
    resetAnswerButtons();
    question.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerText = answer.text;
        button.classList.add("btn");
        button.addEventListener("click", () => selectAnswer(answer));
        answerButtonsElement.appendChild(button);
    });
}

function resetAnswerButtons() {
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
}


function selectAnswer(answer) {
    score += answer.score
    
    const isLastQuestion = currentQuestionIndex === questions.length - 1;
    if (isLastQuestion) {
        showResult();
    } else {
        nextButton.classList.remove("hide");
    }
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion(questions[currentQuestionIndex]);
        nextButton.classList.add("hide");
    }
}

function showResult() {
    resultContainer.classList.remove("hide");
    scoreElement.innerText = score;
}

startGame();