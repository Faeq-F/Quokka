//rounds the corners of the items (required separately as items rounded with a scrollbar does not work; need to be rounded when there is no scrollbar)
export default function roundCorners() {
    //gets all list items
    var itemNodes = document.getElementsByTagName("li");
    //get last seperator in item list
    var separator = document.getElementsByTagName("hr").item(document.getElementsByTagName("hr").length - 1);
    //if there are no items in the list, hide it
    if (itemNodes.length == 0) {
        scrollArea.style.display = "none";
    }
    //if there are items present
    try {
        //check if the number of items is less than the number needed for the scrollbar to show
        if (itemNodes.length < 6) {
            // if so, round all the corners
            itemList.style.cssText = "border-radius: 15px 0 15px 15px;";
        } else {
            //if not, do not round the two right corners
            itemList.style.cssText = "border-radius: 15px 0 0 15px;";
        }
        //remove the last seperator from the list (the one that appears after the last item) - useless
        separator.style.cssText = "display:none;";
    } catch (error) {
        //no items to round corners for
    }
}
