import displayItems from "./display items.js";
import roundCorners from "./round corners.js";

export default function currencyConvert(searchString) {
    //getting the user input
    let UInput = searchString.slice(3);
    //getting the currency to convert from
    let from = UInput.substring(0, 3)
    //getting the currency to convert into
    let to = UInput.substring(4, 7)
    //getting the amount that needs to be converted
    let amount = UInput.substring(8, UInput.length)
    //host of API
    const host = 'api.frankfurter.app';
    //fetch using API
    fetch(`https://${host}/latest?amount=${amount}&from=${from}&to=${to}`)
        //once response has been given
        .then(resp => {
            //if response is without error
            if (resp.ok) {
                //parsing response into JSON
                resp.json()
                    //taking data from response
                    .then((data) => {
                        //parsing data as JSON
                        data = JSON.stringify(data)
                        //formatting JSON into seperate items for seperate values
                        data = data.slice(1)
                        data = data.substring(0, data.length - 1)
                        data = data.split(',');
                        data = data.slice(2, 4)
                        //getting the amount (after conversion)
                        let amount = data[1].split(':');
                        //getting the date on which conversion rate was updated
                        let date = data[0].split(':')
                        date = date[1].substring(1, date[1].length - 1)
                        //getting the amount (after conversion)
                        amount = amount[2].substring(0, amount[2].length - 1)
                        //greating final item
                        let Item = [{
                            Title: amount,
                            Subtitle: "Using data last updated on " + date,
                            Icon: "currencyConvert",
                        }, ];
                        //adding item elements
                        displayItems(Item);
                        //displaying item list
                        scrollArea.style.display = "block";
                        roundCorners()
                    });
            } else {
                //error from API - command not given correctly - validation
                //creating item
                let Item = [{
                    Title: "Invalid command",
                    Subtitle: "Currency is unsupported or command is invalid",
                    Icon: "currencyConvert",
                }, ];
                //adding item element
                displayItems(Item);
                //displaying item list
                scrollArea.style.display = "block";
                roundCorners()
            }
        })

}
