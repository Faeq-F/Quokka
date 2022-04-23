//Make the DIV element draggable:
dragElement(document.getElementById("BodyContainer"));

function dragElement(element) {
    //default positioning
    var pos1 = 0,
        pos2 = 0,
        pos3 = 0,
        pos4 = 0;
    //if there is a handle
    if (document.getElementById("handle")) {
        /* if present, the handle is where you move the DIV from:*/
        document.getElementById("handle").onmousedown = dragMouseDown;
    } else {
        /* otherwise, move the DIV from anywhere inside the DIV:*/
        element.onmousedown = dragMouseDown;
    }
    //function for dragging handle
    function dragMouseDown(e) {
        //getting event
        e = e || window.event;
        //preventing the default response to the event
        e.preventDefault();
        // get the mouse cursor position at startup:
        pos3 = e.clientX;
        pos4 = e.clientY;
        //stop moving when the mouse has let go of element
        document.onmouseup = closeDragElement;
        // call a function whenever the cursor moves:
        document.onmousemove = elementDrag;
    }
    //when the cursor moves
    function elementDrag(e) {
        //getting event
        e = e || window.event;
        //preventing the default response to the event
        e.preventDefault();
        // calculate the new cursor position:
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        // set the element's new position:
        element.style.top = (element.offsetTop - pos2) + "px";
        element.style.left = (element.offsetLeft - pos1) + "px";
    }
    /* stop moving when mouse button is released:*/
    function closeDragElement() {
        document.onmouseup = null;
        document.onmousemove = null;
    }
}
