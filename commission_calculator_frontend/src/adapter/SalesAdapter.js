class SalesAdapter{
    constructor(){
        this.baseUrl = 'http://localhost:3000/sales'   // instantiate with the adapter, would set base url
    }      //  and has ability to call get Product

getSales(){     // make a fetch request to our base url
  return fetch(this.baseUrl)   // once it recv response, we parce json from the response
  .then(response => response.json())  // convert to json
  console.log(Sales)

  //.then(response =>response.text())  // convert to plan text (https://daveceddia.com/unexpected-token-in-json-at-position-0/)
 //.then(text => console.log(text))  // log it out
    }

getCommission(){
    const calculateSale = {
        Sales: calculateValue,
    }
    return fetch(this.baseUrl,{
        method: 'POST',
        Sales:JSON.stringify({calculateSale})
    //.then(response => response.json())
    })
    }
}
/*
clearCommission(){
    return fetch(this.baseUrl, {
        method: 'DELETE',

    })
}
*/
