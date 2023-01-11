var currentContainer = 2;
var numofContainers = 4;
//Grab first container by ID "child1"
//var childWidth = document.getElementById("child1").offsetWidth;
function checkEdge(event) 
{
    //Get encapsulating container of all children by ID 'parent'
    var parent = document.getElementById("parent");

    if ( parent.scrollLeft == parent.scrollWidth-parent.offsetWidth) 
    {
        //Detected scroll to the edge of the right
        currentContainer = ((currentContainer+1)%(numofContainers+1));
        parent.appendChild(document.getElementById("child"+(currentContainer+1))); 
        parent.scrollLeft -= childWidth;
    }
    
    if ( !parent.scrollLeft ) 
    {
        //Left edge
        currentContainer = ((currentContainer-1)%numofContainers+1);
        if ( currentContainer == -2 ) currentContainer = 9;
        parent.insertBefore((document.getElementById("child"+(currentContainer+2))),parent.firstChild);
        parent.scrollLeft += childWidth;
    }
}

function moveRight(event)
{
    leftContainer = currentContainer - 1; 
    rightContainer = currentContainer + 1;

    if(rightContainer > numofContainers)
        rightContainer = 0;

    if(leftContainer < numofContainers)
        leftContainer = numofContainers;
    

    var rightElement = document.getElementById("child"+(rightContainer));
    var leftElement = document.getElementById("child"+(leftContainer));
    var centerElement = document.getElementById("child"+(currentContainer));
    
    document.getElementById("child"+(rightContainer)).style.opacity=1;
    document.getElementById("child"+(currentContainer)).style.opacity=.5;
    document.getElementById("child"+(leftContainer)).style.opacity=0;


}

function moveLeft(event)
{
    leftContainer = currentContainer - 1; 
    rightContainer = currentContainer + 1;

    if(rightContainer > numofContainers)
        rightContainer = 0;

    if(leftContainer < numofContainers)
        leftContainer = numofContainers;


    var rightElement = document.getElementById("child"+(rightContainer));
    var leftElement = document.getElementById("child"+(leftContainer));
    var centerElement = document.getElementById("child"+(currentContainer));
    
    document.getElementById("child"+(rightContainer)).style.opacity=0;
    document.getElementById("child"+(currentContainer)).style.opacity=.5;
    document.getElementById("child"+(leftContainer)).style.opacity=1;


}

/*"use strict";
var CharacterSheet = /** @class *(function () 
{
    function CharacterSheet(initMechanism) 
    {
        this.name = "";
        this.metatype = "";
        this.age = 0;
        this.sex = "";
        this["class"] = "";
        this.height = "";
        this.weight = "";
        this.money = 0;
        this.contacts = [];
        this.attributes = [];
        this.skills = [];
        initMechanism = initMechanism || "NEW";
        switch (initMechanism.toUpperCase()) {
            case "NEW":
            case "N":
                break;
            case "LOAD":
            case "L":
                break;
        }
    }
    CharacterSheet.prototype.addContact = function (name, connection, loyalty) 
    {
        var i = 0;
        for (i = 0; i < this.skills.length; i++) {
            if (this.contacts[i].name === name) {
                this.contacts[i].connection = connection;
                this.contacts[i].loyalty = loyalty;
                return this.contacts[i];
            }
        }
        this.contacts[this.contacts.length] = {
            name: name,
            connection: connection,
            loyalty: loyalty
        };
        return this.contacts[this.contacts.length - 1];
    };

    CharacterSheet.prototype.addSkill = function (name, score) 
    {
        var i = 0;
        for (i = 0; i < this.skills.length; i++) {
            if (this.skills[i].name === name) {
                this.skills[i].score = score;
                return this.skills[i];
            }
        }
        this.skills[this.skills.length] = 
        {
            name: name,
            score: score
        };
        return this.skills[this.skills.length - 1];
    };
    CharacterSheet.prototype.removeSkill = function (name) 
    {
        var i = 0;
        for (i = 0; i < this.skills.length; i++) {
            if (this.skills[i].name === name) {
                this.skills.splice(i, 1);
                return;
            }
        }
    };
    return CharacterSheet;
}());
*/