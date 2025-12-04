/*
 * JavaScript Functions for Manifest Destiny Page
 * File: scripts/scripts.js
 * Purpose: Quiz form validation and answer checking
 */

// Correct answers for the quiz
const correctAnswers = {
	'coinedPhrase': 'O\'Sullivan',
	'louisianaYear': '1803',
	'consequence': 'displacement'
};

// Function to check quiz answers when form is submitted
function validateManifestDestinyQuiz(event) {
	// Prevent the form from submitting automatically
	event.preventDefault();

	// Get the form element
	const form = document.getElementById('manifestDestinyQuiz');
	let allAnswered = true;

	// Check if question 1 is answered
	const question1 = document.querySelectorAll('input[name="coinedPhrase"]');
	let q1Answered = false;
	for (let i = 0; i < question1.length; i++) {
		if (question1[i].checked) {
			q1Answered = true;
		}
	}

	// Check if question 2 is answered
	const question2 = document.querySelectorAll('input[name="louisianaYear"]');
	let q2Answered = false;
	for (let i = 0; i < question2.length; i++) {
		if (question2[i].checked) {
			q2Answered = true;
		}
	}

	// Check if question 3 is answered
	const question3 = document.querySelectorAll('input[name="consequence"]');
	let q3Answered = false;
	for (let i = 0; i < question3.length; i++) {
		if (question3[i].checked) {
			q3Answered = true;
		}
	}

	// If not all questions are answered, show alert
	if (!q1Answered || !q2Answered || !q3Answered) {
		alert('Please answer all questions before submitting.');
		return false;
	}

	// Get selected answers
	let selectedAnswer1 = '';
	for (let i = 0; i < question1.length; i++) {
		if (question1[i].checked) {
			selectedAnswer1 = question1[i].value;
		}
	}

	let selectedAnswer2 = '';
	for (let i = 0; i < question2.length; i++) {
		if (question2[i].checked) {
			selectedAnswer2 = question2[i].value;
		}
	}

	let selectedAnswer3 = '';
	for (let i = 0; i < question3.length; i++) {
		if (question3[i].checked) {
			selectedAnswer3 = question3[i].value;
		}
	}

	// Check answers and display results
	let score = 0;
	let totalQuestions = 3;

	// Check question 1
	const result1 = document.getElementById('result1');
	if (selectedAnswer1 === correctAnswers['coinedPhrase']) {
		result1.innerHTML = '<span class="text-success">✓ Correct!</span>';
		score = score + 1;
	} else {
		result1.innerHTML = '<span class="text-danger">✗ Incorrect. The correct answer is: John Louis O\'Sullivan</span>';
	}

	// Check question 2
	const result2 = document.getElementById('result2');
	if (selectedAnswer2 === correctAnswers['louisianaYear']) {
		result2.innerHTML = '<span class="text-success">✓ Correct!</span>';
		score = score + 1;
	} else {
		result2.innerHTML = '<span class="text-danger">✗ Incorrect. The correct answer is: 1803</span>';
	}

	// Check question 3
	const result3 = document.getElementById('result3');
	if (selectedAnswer3 === correctAnswers['consequence']) {
		result3.innerHTML = '<span class="text-success">✓ Correct!</span>';
		score = score + 1;
	} else {
		result3.innerHTML = '<span class="text-danger">✗ Incorrect. The correct answer is: Forced displacement of Native American tribes</span>';
	}

	// Display total score
	const resultsDiv = document.getElementById('quizResults');
	resultsDiv.innerHTML = '<div class="alert alert-info"><strong>Your Score: ' + score + ' out of ' + totalQuestions + ' correct</strong></div>';

	return false;
}

// Wait for page to load before running code
document.addEventListener('DOMContentLoaded', function() {
	// Get the quiz form
	const quizForm = document.getElementById('manifestDestinyQuiz');

	// If form exists, add event listener for form submission
	if (quizForm) {
		quizForm.addEventListener('submit', validateManifestDestinyQuiz);

		// Reset results when form is reset
		quizForm.addEventListener('reset', function() {
			document.getElementById('result1').innerHTML = '';
			document.getElementById('result2').innerHTML = '';
			document.getElementById('result3').innerHTML = '';
			document.getElementById('quizResults').innerHTML = '';
		});
	}
});
