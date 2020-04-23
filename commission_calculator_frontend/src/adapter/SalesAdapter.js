class SalesAdapter{
    constructor(){
        this.baseUrl = 'http://localhost:3000/sales'   // instantiate with the adapter, would set base url
    }      //  and has ability to call get Product

    getSales(){     // make a fetch request to our base url
        return fetch(this.baseUrl)
        .then(response => response.json())   // once it recv response, we parce json from the response
          // convert to json
         console.log(Sales)

        //.then(response =>response.text())  // convert to plan text (https://daveceddia.com/unexpected-token-in-json-at-position-0/)
        //.then(text => console.log(text))  // log it out
        }

    calculateComm(calculateValue){
        const calculateSale = {
            sale: calculateValue
            }
      // debugger
       return fetch(this.baseUrl,{
        method: 'POST',
        mode: 'no-cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json'
        },
             Sale:JSON.stringify()
        });

         }
    }
/*
clearCommission(){
    return fetch(this.baseUrl, {
        method: 'DELETE',

    })
}
*/
