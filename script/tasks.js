


// document.addEventListener("DOMContentLoaded", function () {
//     const completedSection = document.getElementById("completed");
//     const taskAssignedEl = document.querySelector("#task-assignd span:nth-child(2)"); 
//     const navbarTaskEl = document.getElementById("navbar-task"); 
//     const activityLogEl = document.querySelector(".activity-log > div"); 
//     const clearHistoryBtn = document.querySelector(".activity-log button"); 

//     if (completedSection) {
//         const completeButtons = completedSection.querySelectorAll(".complete-btn");

//         completeButtons.forEach((button) => {
//             button.addEventListener("click", function () {
//                 alert("Task Completed!");

                
//                 const now = new Date();
//                 const timeString = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });

                
//                 let taskAssigned = parseInt(taskAssignedEl.innerText);
//                 if (taskAssigned > 0) {
//                     taskAssigned -= 1;
//                     taskAssignedEl.innerText = taskAssigned;
//                 }

                
//                 let navbarTask = parseInt(navbarTaskEl.innerText);
//                 navbarTask += 1;
//                 navbarTaskEl.innerText = navbarTask;

                
//                 const taskTitle = this.closest(".p-5").querySelector("h3").innerText;

                
//                 const logEntry = document.createElement("p");
//                 logEntry.className = "text-sm text-gray-700 mt-1";
//                 logEntry.innerHTML = `<span class="text-blue-600 font-medium">Completed:</span> ${taskTitle} <span class="text-gray-500 text-xs ml-2">(${timeString})</span>`;
//                 activityLogEl.appendChild(logEntry);

            
//                 this.disabled = true;
//                 this.innerText = "Completed";
//                 this.classList.add("bg-gray-500", "cursor-not-allowed");
//             });
//         });
//     }

    
//     if (clearHistoryBtn) {
//         clearHistoryBtn.addEventListener("click", function () {
//             activityLogEl.innerHTML = ""; // 
//         });
//     }
// });










document.addEventListener("DOMContentLoaded", function () {
    const completedSection = document.getElementById("completed");
    const taskAssignedEl = document.querySelector("#task-assignd span:nth-child(2)"); // Fixed selector
    const navbarTaskEl = document.getElementById("navbar-task"); // Navbar task count
    const activityLogEl = document.querySelector(".activity-log > div"); // Fixed activity log selector
    const clearHistoryBtn = document.querySelector(".activity-log button"); // Corrected selector

    if (completedSection) {
        const completeButtons = completedSection.querySelectorAll(".complete-btn");

        completeButtons.forEach((button) => {
            button.addEventListener("click", function () {
                alert("Task Completed!");

                // Get current time
                const now = new Date();
                const timeString = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });

                // Update Task Assigned Count (Decrease)
                let taskAssigned = parseInt(taskAssignedEl.innerText);
                if (taskAssigned > 0) {
                    taskAssigned -= 1;
                    taskAssignedEl.innerText = taskAssigned;
                }

                // Update Navbar Task Count (Increase)
                let navbarTask = parseInt(navbarTaskEl.innerText);
                navbarTask += 1;
                navbarTaskEl.innerText = navbarTask;

                // Get Task Title
                const taskTitle = this.closest(".p-5").querySelector("h3").innerText;

                // Add to Activity Log with Timestamp
                const logEntry = document.createElement("p");
                logEntry.className = "activity-message text-sm text-gray-700 mt-1";
                logEntry.innerHTML = `<span class="text-blue-600 font-medium">Completed:</span> ${taskTitle} <span class="text-gray-500 text-xs ml-2">(${timeString})</span>`;
                activityLogEl.appendChild(logEntry);

                // Disable Button After Completion
                this.disabled = true;
                this.innerText = "Completed";
                this.classList.add("bg-gray-500", "cursor-not-allowed");
            });
        });
    }

    // Clear History Functionality (Only Removes Messages)
    if (clearHistoryBtn) {
        clearHistoryBtn.addEventListener("click", function () {
            const messages = document.querySelectorAll(".activity-message"); // Select all messages
            messages.forEach(msg => msg.remove()); // Remove only messages
        });
    }
});
