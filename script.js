// variables
const rateBtns = document.querySelectorAll(".rating-btn");
const submitBtn = document.querySelector(".submit-btn");
const ratingWrapper = document.querySelector(".rating-wrapper");
const postevaluationWrapper = document.querySelector(".thank-you-wrapper");
const sandClock = document.querySelector(".sand-clock");

const sendRating = document.querySelector(".send-rating");  //crutch to simulate "sending".

function rating() {
	// looped through the buttons in the nodelist to give each button a click action.
	rateBtns.forEach(btn => {
		const chooseRating = function() {
			btn.classList.add("clicked-rating-btn"); // changed bg-color and font color by adding the class. 
			sendRating.textContent = btn.textContent;

			// filtered buttons in the pseudoarray by class.
			const filteredByClassAfterSelectionBtns = [...rateBtns].
				filter(afterSelectionBtn => afterSelectionBtn.classList.contains("clicked-rating-btn")
				);
			// If the array contains > 1 button, I have to remove the colors from the previously selected button. 
			if (filteredByClassAfterSelectionBtns.length > 1) {
				// filtered the already filtered buttons by the note of the selected rating I made in line 14.
				const filteredReelectedBtns = filteredByClassAfterSelectionBtns
					.filter(filteredAfterSelectionBtn => filteredAfterSelectionBtn.textContent !== sendRating.textContent);
				// removed bg color and font color, removing the class in case the rating is reselected.
				filteredReelectedBtns.filter(reelectedBtn => reelectedBtn.classList.remove("clicked-rating-btn"));
			}
		};

		//choose rating by mouse click;
		btn.addEventListener("click", chooseRating);
		//choose rating by press enter (tab to move forward),(shift+tab to move backward) 
		btn.addEventListener("keypress", chooseRating);
	});
}


//submit if span content with class sendRating not equal to "".
function submitRating() {
	function vanishAppear() {
		ratingWrapper.style.display = "none"; //hide main rating section.
		postevaluationWrapper.style.display = "flex"; //show postevaluation section.
		sandClock.style.display = "none";
	}
	if (sendRating.textContent === "") {
		alert("Please rate us!");
	} else {
		ratingWrapper.style.opacity = "0.5";
		sandClock.style.display = "block";
		setTimeout(vanishAppear, 1000);
	}
}

rating();
submitBtn.addEventListener("keypress", submitRating);
submitBtn.addEventListener("click", submitRating);
