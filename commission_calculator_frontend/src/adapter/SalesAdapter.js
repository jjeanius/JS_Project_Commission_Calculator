class SalesAdapter{
    constructor(){
        this.baseUrl =
        'http://localhost:3000/sales'   // instantiate with the adapter, would set base url
    }      //  and has ability to call get Product

    getSales(){     // make a fetch request to our base url
        return fetch(this.baseUrl)
        .then(response => response.json())   // once it recv response, we parce json from the response
          // convert to json
          //.then(response =>response.text())  // convert to plan text (https://daveceddia.com/unexpected-token-in-json-at-position-0/)
          //.then(text => console.log(text))  // log it out
        }

    calculateComm(calculateValue){
     /*   const calculateSale = {
            sale: calculateValue
            };  */

     console.log(calculateValue)

        fetch(this.baseUrl, {
        method: 'POST',  // post request, fetch takes in 2nd argument:post
        body: JSON.stringify(calculateValue),
        })
     .then(response => response.json())
     .then(calculateValue => console.log(calculateValue))
    }
}

/*
["Fixed Income-Test", "12", "1000", "15", "percentage"]
SalesAdapter.js:27 {status: 400, error: "Bad Request", exception: 
"#<ActionController::ParameterMissing: param is missing or the value is empty: sale>", 
traces: {…}}
*/