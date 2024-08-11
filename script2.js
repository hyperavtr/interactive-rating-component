//variables
const rateBtns = document.querySelectorAll(".rate-btn");
const submitBtn = document.querySelector(".submit-btn");


// looped through the buttons in the nodelist to give each button a click action.
rateBtns.forEach(btn => {
	const chooseRating = function() {
		const rating = btn.innerText; // made a note of the selected rating.
		btn.classList.add("clicked-btn"); // changed bg-color and font color by adding the class. 
		// made array from nodelist with purpose to use array methods.
		const afterSelectionBtns = Array.from(rateBtns);
		// filtered buttons in the array by class.
		const filteredByClassAfterSelectionBtns = afterSelectionBtns.
			filter(afterSelectionBtn => afterSelectionBtn.classList.contains("clicked-btn")
			);
		// If the array contains > 1 button, I have to remove the colors from the previously selected button. 
		if (filteredByClassAfterSelectionBtns.length > 1) {
			// filtered the already filtered buttons by the note of the selected rating I made in line 15.
			const filteredReelectedBtns = filteredByClassAfterSelectionBtns
				.filter(filteredAfterSelectionBtn => filteredAfterSelectionBtn.innerText !== rating);
			// removed bg color and font color, removing the class in case the rating is reselected.
			filteredReelectedBtns.forEach(reelectedBtn => reelectedBtn.classList.remove("clicked-btn"));
		}

	};

	//choose rating by mouse click;
	btn.addEventListener("click", chooseRating);
	//choose rating by press enter (tab -> move forward),(shift+tab move backward) 
	btn.addEventListener("keypress", chooseRating);

});
