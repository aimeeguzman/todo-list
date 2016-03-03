var itemList = [];

//declaring addToItem function
function addToItem() {
	//grabs what the user tyes inside of input field and stores it inside var addItem
	var addItem = document.getElementById('addItem').value;
	//reusing what the user types inside input field and creates a list with that item being first on the list
	itemList.push(addItem);

	//makes a list based on user's input in consecutive order
	for (var i = 0; i < itemList.length; i++) {
		var newItem = itemList[i] + "<a href='#' onClick='removeItem(" + i + ");'>X</a>" + "<br>";
	};

	//grabs our div and outputs user's list
	document.getElementById('items').innerHTML += newItem;
}

//user is deleting a single item
function removeItem(i) {
	// body...
	itemList.splice(i, 1);

	var newItem = "";

	for (var i = 0; i < itemList.length; i++) {
		newItem += itemList [i] + "<a href='#' onClick='removeItem(" + i + ");'>X</a>" + "<br>";
	}
	document.getElementById('items').innerHTML = newItem;
}