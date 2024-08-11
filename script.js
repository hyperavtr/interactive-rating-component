// variables
const rateBtns = document.querySelectorAll(".rating-btn");
const submitBtn = document.querySelector(".submit-btn");
const ratingWrapper = document.querySelector(".rating-wrapper");
const postevaluationWrapper = document.querySelector(".thank-you-wrapper");

const sendRating = document.querySelector(".send-rating");  //crutch to simulate "sending".
const afterSelectionBtns = Array.from(rateBtns); // made array from nodelist with purpose to use array methods.

// looped through the buttons in the nodelist to give each button a click action.
rateBtns.forEach(btn => {
	const chooseRating = function() {
		const rating = btn.textContent; // made a note of the selected rating.
		btn.classList.add("clicked-rating-btn"); // changed bg-color and font color by adding the class. 
		sendRating.textContent = rating;

		// filtered buttons in the array by class.
		const filteredByClassAfterSelectionBtns = afterSelectionBtns.
			filter(afterSelectionBtn => afterSelectionBtn.classList.contains("clicked-rating-btn")
			);
		// If the array contains > 1 button, I have to remove the colors from the previously selected button. 
		if (filteredByClassAfterSelectionBtns.length > 1) {
			// filtered the already filtered buttons by the note of the selected rating I made in line 14.
			const filteredReelectedBtns = filteredByClassAfterSelectionBtns
				.filter(filteredAfterSelectionBtn => filteredAfterSelectionBtn.textContent !== rating);
			// removed bg color and font color, removing the class in case the rating is reselected.
			filteredReelectedBtns.forEach(reelectedBtn => reelectedBtn.classList.remove("clicked-rating-btn"));
		}
	};

	//choose rating by mouse click;
	btn.addEventListener("click", chooseRating);
	//choose rating by press enter (tab to move forward),(shift+tab to move backward) 
	btn.addEventListener("keypress", chooseRating);
});


//submit if span content with class sendRating not equal to "".
const submitRating = function() {
	if (sendRating.textContent === "") {
		alert("Please rate us!");
	} else {
		ratingWrapper.style.display = "none"; //hide main rating section.
		postevaluationWrapper.style.display = "flex"; //show postevaluation section.
	}
}

submitBtn.addEventListener("keypress", submitRating);
submitBtn.addEventListener("click", submitRating);
