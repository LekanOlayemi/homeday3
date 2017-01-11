
function findMissingItem(CurrentArray, PreviousArray){
	
	var CurrentArrSize = CurrentArray.length;
	var PreviousArrSize = PreviousArray.length;

    for(var j = 0; j < PreviousArrSize; j++) {
	if(CurrentArray.indexOf(PreviousArray[j]) == -1)
		return PreviousArray[j];
    }

      return null;

}
module.exports = function(string)