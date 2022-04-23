export default function Calculate(searchString, displayItems, roundCorners){
    //gets the calculation wanted
    let calculation = searchString.slice(5);
    //Mathematical operations
    try {
        //Uses JS math to calculate output
        let Answer = eval(calculation);
        //creating the item
        let Item = [{
            Title: Answer,
            Subtitle: calculation,
            Icon: "Calculation",
        }, ];
        //displaying item
        displayItems(Item);
        scrollArea.style.display = "block";
        roundCorners()
    } catch (error) {
        //Error occurs when user ends calculation on an operator or invalid math rules are used
        //creating item - validation
        let Item = [{
            Title: "Bad or Invalid calculation",
            Subtitle: calculation,
            Icon: "Calculation",
        }, ];
        //displaying item
        displayItems(Item);
        scrollArea.style.display = "block";
        roundCorners()
    }
}
