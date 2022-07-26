// This is js file.

// the main function in which we will writer all our code coz, JavaScript code should work after the HTML document is loaded in browser.
document.addEventListener('DOMContentLoaded', function () {
	// selecing all the cards in the html and putting them in a single variable
	const allCards = document.querySelectorAll('.card');

	// variables just to identify if we are done with first item clicked or not
	let firstSelection = '';
	let secondSelection = '';

	// variable just to count the number of selections
	let counter = 0;

	allCards.forEach((card) => {
		card.addEventListener('click', function () {
			// add a .clicked class to the item which is clicked
			card.classList.add('clicked');

			// checking if the first selection is done or not
			if (counter === 0) {
				firstSelection = card.getAttribute('animal');
				counter++;
			} else {
				secondSelection = card.getAttribute('animal');
				counter = 0;

				// checking on the second selection if both the sections are equal
				if (firstSelection === secondSelection) {
					// you put either firstSelection variable or secondSeletion variable to query the cards coz both variables have the same value at this moment.
					const correctCards = document.querySelectorAll(
						`.card[animal="${secondSelection}"]`
					);

					// adding 'checked' class on  the matched two cards and removing 'clicked' class just to reset them.
					correctCards[0].classList.add('checked');
					correctCards[0].classList.remove('clicked');
					correctCards[1].classList.add('checked');
					correctCards[1].classList.remove('clicked');
				} else {
					// selecing the cards which are clicked but not matched
					const incorrectCards = document.querySelectorAll('.card.clicked');

					// adding 'wrong' class on the cards that are not matched
					incorrectCards[0].classList.add('wrong');
					incorrectCards[1].classList.add('wrong');

					// removing 'wrong' and 'clicked' class after '0.7s' with setTimeout default JavaScript function
					setTimeout(function () {
						incorrectCards[0].classList.remove('wrong');
						incorrectCards[1].classList.remove('wrong');
						incorrectCards[0].classList.remove('clicked');
						incorrectCards[1].classList.remove('clicked');
					}, 700);
				}
			}
		});
	});
});
