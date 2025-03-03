document.getElementById("theme-btn").addEventListener("click", function () {
    const body = document.querySelector("body");
    
    // Check the current background color and toggle it
    if (body.classList.contains("bg-pink-200")) {
        body.classList.remove("bg-pink-200");
        body.classList.add("bg-blue-200");
        
         // Change to any color you prefer
    } else {
        body.classList.remove("bg-blue-200");
        body.classList.add("bg-pink-200");
    }
});



// document.getElementById("mid-card ").addEventListener("click")


// document.getElementById("mid-card").addEventListener("click", function() {
//     window.location.href = "blog.html"
// });



document.getElementById("mid-card").addEventListener("click", function () {
    const questionsAndAnswers = [
        {
            question: "What are the different ways to select an element in the DOM?",
            answer: "You can use document.getElementById(), document.querySelector(), document.querySelectorAll(), document.getElementsByClassName(), and document.getElementsByTagName()."
        },
        {
            question: "What is the difference between innerHTML, innerText, and textContent?",
            answer: "innerHTML parses HTML, innerText respects CSS styles, and textContent returns raw text."
        },
        {
            question: "What is event delegation in the DOM?",
            answer: "Event delegation is a technique where a parent element handles events for its children using event bubbling."
        },
        {
            question: "What is event bubbling in the DOM?",
            answer: "Event bubbling occurs when an event triggered on a child element propagates up to its parent elements."
        },
        {
            question: "How do you create, add, and remove elements using JavaScript?",
            answer: "Use document.createElement() to create elements, appendChild() or insertBefore() to add them, and removeChild() or element.remove() to delete them."
        }
    ];

    localStorage.setItem("qaData", JSON.stringify(questionsAndAnswers));
    window.location.href = "blog.html";
});






