var currentContainer = 2;
var numofContainers = 4;

var farLeftCon = document.getElementById("farLeft");
var farRightCon = document.getElementById("farRight");
var leftCon = document.getElementById("left");
var rightCon = document.getElementById("right");
var centerCon = document.getElementById("center");
var onHoldCon = document.getElementById("onHold");

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
    //Gather values of the container we need to swap to.
    currentLeftContainer = currentContainer - 1; 
    currentRightContainer = currentContainer + 1;

    if(rightContainer > numofContainers)
    {
        rightContainer = 0;
    }

    if(leftContainer < 0)
    {    
        leftContainer = numofContainers;
    }

    nextLeftContainer = leftContainer - 1;
    nextRightContainer = rightContainer + 1;

    if(nextRightContainer > numofContainers)
    {
        nextRightContainer = 0;
    }


    if(nextLeftContainer < 0)
    {    
        nextLeftContainer = numofContainers;
    }

    //Grab the IDs for each container
    var rightElement = document.getElementById("child"+(rightContainer));
    var leftElement = document.getElementById("child"+(leftContainer));
    var centerElement = document.getElementById("child"+(currentContainer));
    var nextRightElement = document.getElementById("child"+(nextRightContainer));
    var nextLeftElement = document.getElementById("child"+(nextLeftContainer));

    currentContainer = leftContainer;

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
    }


}