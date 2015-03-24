var poker = {
  // Returns the name of the input hand.
  // See the specs for the required formats.
  labelHand: function(hand) {

  	var splitHand = hand.split(" ");
  	var sortHand = [];


  	//ranks = A, K, Q, J, T

  	var replaceLetters = function(splitHand) {

  		var cardValues = {
  			T : 10,
  			J : 11,
  			Q : 12,
  			K : 13,
  			A : 14
  		}

  		for(var i = 0; i < splitHand.length; i ++) {
  			var key = splitHand[i][0];
  			if(cardValues[key]) {
  				sortHand.push(cardValues[key] + splitHand[i][1]);
  			} else {
  				sortHand.push(splitHand[i]);
  			}
  		}
  	}

  	var highCard = function(hand) {

  	}

  	var pair = function(hand) {

  	}

  	var twoPair = function(hand) {

  	}

  	var threeOfKind = function(hand) {

  	}

  	var traverseHand = function(checker) {

  		for(var i = 0; i < splitHand.length; i ++) {

  		}
  	}
  }
};