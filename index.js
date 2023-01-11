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