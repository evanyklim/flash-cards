app.controller('MainController', function ($scope, FlashCardsFactory, ScoreFactory) {
	
	FlashCardsFactory.getFlashCards().then(
		function (cards) {
			$scope.flashCards = cards;		
	});

	$scope.scores = ScoreFactory;

	$scope.answerQuestion = function (answer, flashCard) {
		if (!flashCard.answered) {
			flashCard.answered = true;
			flashCard.answeredCorrectly = answer.correct;
			if (answer.correct) {
				$scope.scores.correct += 1;
			} else {
				$scope.scores.incorrect += 1;
			}
		}
	}

	$scope.categories = [
	    'MongoDB',
	    'Express',
	    'Angular',
	    'Node'
	];

	$scope.getCategoryCards = function (category) {
		FlashCardsFactory.getFlashCards(category).then(
			function (cards) {
				$scope.flashCards = cards;
				$scope.categoryNow = category;
			}
		);
	}

});