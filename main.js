const quizData = [
    {
        question: "The Best Footbal Player in The World",
        a: 'Messi',
        b: 'C.Ronaldo',
        c: 'Maradona',
        d: 'Neymar',
        correct: 'c'
    },
    {
        question: "The Best Actress in The World",
        a: 'Marie Avgeropoulos',
        b: 'Eliza Taylor',
        c: 'Emma Stone',
        d: 'Lindsey Morgan',
        correct: 'b' 
    },
    {
        question: "What is the most used programming language in 2020",
        a: 'Java',
        b: 'C',
        c: 'Python',
        d: 'JavaScript',
        correct: 'd' 
    },
    {
        question: "Who is the President Of US?",
        a: 'Joe Biden',
        b: 'Donald Trum',
        c: 'Ayoub Fellat',
        d: 'Obama',
        correct: 'a' 
    },
    {
        question: "What does HTML Stand For?",
        a: 'Hypertext Markup Language',
        b: 'Cascading Style Sheet',
        c: 'Jason Object Notation',
        d: 'Document Object Model',
        correct: 'a' 
    },
    {
        question: "What year was JavaScript?",
        a: '1996',
        b: 'none of the above',
        c: '1995',
        d: '2000',
        correct: 'b' 
    },
];

const quiz = document.getElementById('quiz');
const answerEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');


let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {

    deselectedAnswers();
    
    const currentQuizData = quizData[currentQuiz];
    
    questionEl.textContent = currentQuizData.question;
    a_text.textContent = currentQuizData.a;
    b_text.textContent = currentQuizData.b;
    c_text.textContent = currentQuizData.c;
    d_text.textContent = currentQuizData.d;
}

function getSelected() {
    let answer = undefined;

    answerEls.forEach(answerEl => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectedAnswers() {
    answerEls.forEach(answerEl => {
        answerEl.checked = false;
    });
}



submitBtn.addEventListener('click', () => {
    // check to see answer
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
                <h2 class="finalResult">You Answered Correctly At ${score}/${quizData.length} Questions.</h2>
                <button onclick="location.reload()">Reload</button>
                `;
        }
    }
});