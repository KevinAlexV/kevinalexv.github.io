var currentContainer = 4;
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
    var leftContainer = currentContainer - 1; 
    var rightContainer = currentContainer + 1;

    if(rightContainer > numofContainers)
    {
        rightContainer = 0;
    }

    if(leftContainer < 0)
    {
        leftContainer = numofContainers;
    }

    var rightElement = document.getElementById("child"+(rightContainer));
    var leftElement = document.getElementById("child"+(leftContainer));
    var centerElement = document.getElementById("child"+(currentContainer));
    
    document.getElementById("child"+(rightContainer)).style.opacity=1;
    document.getElementById("child"+(currentContainer)).style.opacity=.5;
    document.getElementById("child"+(leftContainer)).style.opacity=0;

    currentContainer = rightContainer;
}

function moveLeft(event)
{
    updateContainers(currentContainer, false)

    



    
}

function updateContainers(centVal = currentContainer, moveRight = false)
{
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

    //Grab the IDs for each container
    var rightElement = document.getElementById("child"+(currentRightContainer));
    var leftElement = document.getElementById("child"+(currentLeftContainer));
    var centerElement = document.getElementById("child"+(currentContainer));
    var nextRightElement = document.getElementById("child"+(nextRightContainer));
    var nextLeftElement = document.getElementById("child"+(nextLeftContainer));

    //Containers the elements will move to.
    var nextMoveCont;
    var otherMoveCont;

    //If we are moving right, append container to right element.
    if(moveRight)
    {

    }//Otherwise treat it as a 'left move' and append contr to left element.
    else
    {
        currentContainer = currentLeftContainer;
        
        //Move div to one of the containers
        var fragment = document.createDocumentFragment();
        fragment.appendChild(centerElement);
        leftCon.appendChild(fragment);
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