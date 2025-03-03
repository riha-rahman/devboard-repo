document.addEventListener("DOMContentLoaded", function () {
    // Retrieve stored questions from localStorage
    const qaData = JSON.parse(localStorage.getItem("qaData"));
    const container = document.getElementById("qa-container");

    if (qaData) {
        qaData.forEach((item, index) => {
            const qaCard = document.createElement("div");
            qaCard.classList.add("bg-gray-50", "p-4", "rounded-lg", "shadow", "border-l-4", "border-blue-500");

            qaCard.innerHTML = `
                <h2 class="text-lg font-semibold text-gray-900">${index + 1}. ${item.question}</h2>
                <p class="text-gray-700 mt-2">${item.answer}</p>
            `;

            container.appendChild(qaCard);
        });
    } else {
        container.innerHTML = `
            <p class="text-center text-red-500 font-semibold">
                No data found. Please go back and try again.
            </p>
        `;
    }
});
