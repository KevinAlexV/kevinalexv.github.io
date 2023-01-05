function loadSheet() {
	var loadString = window.prompt("Enter Character Sheet JSON String");
	characterSheet = JSON.parse(loadString);
}

function saveSheet(sheet) {
	alert("Copy this JSON String for later use:\n\n" + JSON.stringify(sheet));
}