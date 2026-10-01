const timer = document.querySelector(".timer");

const eggButtons = document.querySelectorAll(".egg-button");

const startButton = document.querySelector(".start-button");

const resetButton = document.querySelector(".reset-button");

let selectedTime = 5 * 60;

let remainingTime = selectedTime;

let timerInterval;


eggButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        if (button.textContent === "Soft") {
            selectedTime = 5 * 60;
        }

        else if (button.textContent === "Medium") {
            selectedTime = 7 * 60;
        }

        else if (button.textContent === "Hard") {
            selectedTime = 10 * 60;
        }

        remainingTime = selectedTime;

        updateDisplay();

    });

});


startButton.addEventListener("click", function() {

    clearInterval(timerInterval);

    timerInterval = setInterval(function() {

        if (remainingTime > 0) {

            remainingTime--;

            updateDisplay();

        }

        else {

            clearInterval(timerInterval);

        }

    }, 1000);

});


resetButton.addEventListener("click", function() {

    clearInterval(timerInterval);

    remainingTime = selectedTime;

    updateDisplay();

});


function updateDisplay() {

    const minutes = Math.floor(remainingTime / 60);

    const seconds = remainingTime % 60;

    timer.textContent =
        `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;

}