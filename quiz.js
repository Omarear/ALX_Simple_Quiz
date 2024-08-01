function checkAnswer() {
    const correctAnswer = "4";
    const userAnswerElement = document.querySelector('input[name="quiz"]:checked');

    if (userAnswerElement) {
        const userAnswer = userAnswerElement.value;

        // Compare userAnswer with correctAnswer
        if (userAnswer === correctAnswer) {
            document.getElementById('feedback').textContent = "Correct! Well done.";
        } else {
            document.getElementById('feedback').textContent = "That's incorrect. Try again!";
        }
    } else {
        document.getElementById('feedback').textContent = "Please select an answer.";
    }
}

// Add event listener to the submit button
document.getElementById('submit-answer').addEventListener('click', checkAnswer);
