// main.js

const data = [
    {
      id: 1,
      question: "What is JavaScript?",
      answer: "JavaScript is a programming language commonly used for web development."
    },
    {
      id: 2,
      question: "What is a closure in JavaScript?",
      answer: "A closure is a function that has access to its outer scope, even after the outer function has finished executing."
    },
    {
      id: 3,
      question: "What is the difference between == and === in JavaScript?",
      answer: "== compares values with type coercion, while === compares values without type coercion."
    },
    {
      id: 4,
      question: "What is an event loop in JavaScript?",
      answer: "The event loop is a mechanism that allows JavaScript to perform non-blocking I/O operations, even though it is single-threaded."
    },
    {
      id: 5,
      question: "What are JavaScript promises?",
      answer: "Promises are objects that represent the eventual completion or failure of an asynchronous operation."
    },
    {
      id: 6,
      question: "What is the difference between var, let, and const in JavaScript?",
      answer: "var has function scope, let and const have block scope. const is used for constants, while let is for variables that can be reassigned."
    }
  ];
 
        data.forEach(item => {
    // Create a wrapper div for each item
    const itemDiv = document.createElement('div');
    itemDiv.classList.add('item');
    const plusicon = document.createElement('p');
    plusicon.classList.add('plus-icon');
    plusicon.innerHTML = '&plus;';
    
    // Create a question element
    const questionEl = document.createElement('h3');
    questionEl.textContent = item.question ;
    questionEl.classList.add('question');
    questionEl.appendChild(plusicon);
   
    // Create an answer element
    const answerEl = document.createElement('p');
    answerEl.textContent = item.answer;
    answerEl.classList.add('answer');
    answerEl.style.display = 'none'; // Initially hide the answer

    // Toggle visibility of the answer when the question is clicked
    plusicon.addEventListener('click', () => {
        answerEl.style.display = answerEl.style.display === 'none' ? 'block' : 'none';
    });

    // Append question and answer to the item div
    itemDiv.appendChild(questionEl);
    itemDiv.appendChild(answerEl);
   

    // Append item div to the container
    document.getElementById('showdata').appendChild(itemDiv);
});

    
  