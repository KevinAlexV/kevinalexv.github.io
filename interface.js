var characterSheet;

// Initialization Stuff 
$(document).ready(function(){
	characterSheet = new CharacterSheet();

	document.getElementById("addSkill").onclick = function() {	
		do {
			var skillName = window.prompt("Enter a Skill:", "");
			if (skillName === "") alert("Please enter a Valid Skill Name");
		} while (skillName === "");
		var skillScore = window.prompt("Enter a Skill Score:", "");
		
		var skill = characterSheet.addSkill(skillName, skillScore);
		var skillElement = document.createElement("tr");
		var name = document.createElement("th");
		var nameText = document.createTextNode(skill.name);
		name.appendChild(nameText);
		
		var score = document.createElement("td");
		var scoreInput = document.createElement("input");
		scoreInput.class = "inputField";
		scoreInput.type = "number";
		scoreInput.pattern = "[0-9]+";
		scoreInput.name = skill.name;
		scoreInput.value = skill.score;
		score.appendChild(scoreInput);
		
		skillElement.appendChild(name);
		skillElement.appendChild(score);
		
		document.getElementById("skillstable").appendChild(skillElement);
	};
	
	document.getElementById("contactstable").onclick = function() {	
		do {
			var contactName = window.prompt("Enter a Contac Name:", "");
			if (contactName === "") alert("Please enter a Valid Skill Name");
		} while (contactName === "");
		var contactConnection = window.prompt("Enter a Connection Rating:", "");
		var contactLoyalty = window.prompt("Enter a Loyalty Rating:", "");
		
		var contact = characterSheet.addContact(contactName, contactConnection, contactLoyalty);
		
		var contactElement1 = document.createElement("tr");
		var contactNameElement = document.createElement("th");
		contactNameElement.rowSpan = "2";
		contactNameElement.appendChild(document.createTextNode(contact.name));
		var contactConnectionElement = document.createElement("td");
		contactConnectionElement.appendChild(document.createTextNode("Connection: " + contact.connection));
		
		contactElement1.appendChild(document.createElement("th"));
		contactElement1.appendChild(contactNameElement);
		contactElement1.appendChild(contactConnectionElement);
		
		var contactElement2 = document.createElement("tr");
		var contactLoyaltyElement = document.createElement("td");
		contactLoyaltyElement.appendChild(document.createTextNode("Loyalty:" + contact.loyalty));
		
		contactElement2.appendChild(document.createElement("th"));
		contactElement2.appendChild(contactLoyaltyElement);
		
		document.getElementById("contactstable").appendChild(contactElement1);
		document.getElementById("contactstable").appendChild(contactElement2);	
	};
});
