const quizData = [
    {
        question: "Какие циклы есть в языке JavaScript?",
        a: "for, forMap, foreach, while",
        b: "for, forMap, foreach, while, do while",
        c: "for, while, do while, foreach",
        d: "for, while, do while",
        correct: "d",
    },
    {
        question: "Где можно использовать JavaScript?",
        a: "Мобильные приложения",
        b: "Веб-приложения",
        c: "Серверные приложения",
        d: "Можно во всех перечисленных",
        correct: "d",
    },
    {
        question: "Какая переменная записана неверно?",
        a: "var number = 12,5;",
        b: 'var num = "STRING";',
        c: "var isDone = 0;",
        d: "var b = false;",
        correct: "a",
    },
    {
        question: "Где верно указан вывод данных?",
        a: "print(Hello);",
        b: 'write("Hello");',
        c: 'console.log("Hello");',
        d: 'write("Hello");',
        correct: "c",
    },
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEL = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEL.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => (answerEl.checked = false));
}

function getSelected() {
    let answer;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

submitBtn.addEventListener("click", () => {
    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;

        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
                <h2>Вы ответили правильно на ${score}/${quizData.length} вопросов</h2>

                <button onClick="location.reload()">Начать заново</button>
            `;
        }
    }
});
