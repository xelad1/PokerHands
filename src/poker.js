var poker = {
  // Returns the name of the input hand.
  // See the specs for the required formats.
  labelHand: function(hand) {


  	//create function to split hand apart
  	var splitHand = function(hand) {
  		return hand
            .split(' ')
            .map(function(card) {
                var actualRank = card[0];
                var suit = card[1];
                var numericRanks = {
                    "T": 10,
                    "J": 11,
                    "Q": 12,
                    "K": 13,
                    "A": 14
                };
                var numericRank = numericRanks[actualRank] || actualRank;
                return {rankNum: numericRank, rank: actualRank, suit: suit};
            }

  	}
	//create sorting function
  	var sortHandLowToHigh = function(hand) {
        return splitHand(hand)
            .sort(function(a, b) {
                return a.rankNum > b.rankNum;
            });
    };
    //count the ranks in the hand
    var countsOfRanks = function(hand) {
        var results = {1:[], 2:[], 3:[] 4:[]};
        var sortedHands = sortHandLowToHigh(hand);
        var currentRank = sortedHand[0].rank;
        var currentRankCount = 0;
        for(var i = 0; i < 5; i ++) {
            if(sortedHand[i].rank === currentRank) {
                currentRankCount++;
            } else {
                results[currentRankCount].push(currentRank);
                currentRank = sortedHand[i].rank;
                currentRankCount = 1; 
            }
        }
    }   results[currentRankCount].push(currentRank);


  }


};