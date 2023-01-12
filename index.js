var currentContainer;
var numofContainers = 8;

var farLeftCon;
var farRightCon;
var leftCon;
var rightCon;
var centerCon;

var onHoldCon;

document.addEventListener('readystatechange', event => { 

    // When HTML/DOM elements are ready:
    if (event.target.readyState === "interactive") 
    {   //does same as:  ..addEventListener("DOMContentLoaded"..
        //alert("hi 1");
        farLeftCon = document.getElementById("farLeftDesc");
        farRightCon = document.getElementById("farRightDesc");
        leftCon = document.getElementById("leftDesc");
        rightCon = document.getElementById("rightDesc");
        centerCon = document.getElementById("centerDesc");
        onHoldCon = document.getElementById("onHoldDesc");

        currentContainer = 4;

        updateContainers(currentContainer);
    }

    // When window loaded ( external resources are loaded too- `css`,`src`, etc...) 
    if (event.target.readyState === "complete") 
    {
        
        farLeftCon = document.getElementById("farLeftDesc");
        farRightCon = document.getElementById("farRightDesc");
        leftCon = document.getElementById("leftDesc");
        rightCon = document.getElementById("rightDesc");
        centerCon = document.getElementById("centerDesc");
        onHoldCon = document.getElementById("onHoldDesc");

        currentContainer = 4;

        updateContainers(currentContainer);

    }
});

//Grab first container by ID "child1"
//var childWidth = document.getElementById("child1").offsetWidth;
/*function checkEdge(event) 
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
}*/

function moveRight(event)
{
    console.log(currentContainer);
    updateContainers(currentContainer, true);
}

function moveLeft(event)
{
    console.log(currentContainer);
    updateContainers(currentContainer, false);
}

function updateContainers(centVal, moveRight)
{
    //console.log("Current Val: " + currentContainer);

    //Gather values of the container we need to swap to.
    var currentLeftContainer = centVal - 1; 
    var currentRightContainer = centVal + 1;

    if(currentRightContainer > numofContainers)
        currentRightContainer = 1;
    if(currentLeftContainer <= 0)
        currentLeftContainer = numofContainers;
    
    var nextLeftContainer = currentLeftContainer - 1;
    var nextRightContainer = currentRightContainer + 1;

    if(nextRightContainer > numofContainers)
        nextRightContainer = 1;
    if(nextLeftContainer <= 0)
        nextLeftContainer = numofContainers;

    //console.log("Side Locations (in order): " + nextLeftContainer + " " + currentLeftContainer + " " + currentRightContainer + " " + nextRightContainer);

    //Grab the IDs for each container
    var rightElement = document.getElementById("child"+(currentRightContainer));
    var leftElement = document.getElementById("child"+(currentLeftContainer));
    var centerElement = document.getElementById("child"+(currentContainer));
    var nextRightElement = document.getElementById("child"+(nextRightContainer));
    var nextLeftElement = document.getElementById("child"+(nextLeftContainer));

    cleanUp();

    //If we are moving right, append container to right element.
    if(moveRight)
    {

        farRightCon.appendChild(rightElement);
        rightCon.appendChild(centerElement);
        centerCon.appendChild(leftElement);
        leftCon.appendChild(nextLeftElement);
        
        if(nextLeftContainer - 1 <= 0)
            nextLeftElement = document.getElementById("child"+(numofContainers));
        else
            nextLeftElement = document.getElementById("child"+(nextLeftContainer-1));

        farLeftCon.appendChild(nextLeftElement);

        console.log("Right move performed");
        currentContainer = currentRightContainer;
    }//Otherwise treat it as a 'left move' and append contr to left element.
    else
    {
        farLeftCon.appendChild(leftElement);
        leftCon.appendChild(centerElement);
        centerCon.appendChild(rightElement);
        rightCon.appendChild(nextRightElement);

        if(nextRightContainer + 1 > numofContainers)
            nextRightElement = document.getElementById("child"+(1));
        else
            nextRightElement = document.getElementById("child"+(nextRightContainer+1));

        farRightCon.appendChild(nextRightElement);

        console.log("Left move performed");
        currentContainer = currentLeftContainer;
    }

    //Animate move 
    /*
    let left = document.getElementById('left');
    let right = document.getElementById('right');
    let redBox = document.querySelector('.element');
    left.onclick = function(){
      let pos = parseInt(window.getComputedStyle(redBox,null).getPropertyValue("left"), 10);
      let move = pos - 40;
      redBox.style.left = move + 'px'
    }
    right.onclick = function(){
      let pos = parseInt(window.getComputedStyle(redBox,null).getPropertyValue("left"), 10);
      let move = pos + 40;
      redBox.style.left = move + 'px'
    }*/
}

function cleanUp()
{
    clean(farRightCon);
    clean(rightCon);
    clean(centerCon);
    clean(leftCon);
    clean(farLeftCon);
}

function clean(element)
{
    const myNode = element;
    while (myNode.firstChild) {
      onHoldCon.appendChild(myNode.lastChild);
    }
}