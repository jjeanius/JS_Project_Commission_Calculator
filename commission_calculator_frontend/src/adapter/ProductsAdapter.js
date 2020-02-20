class ProductsAdapter{  //talk to our backend API
    constructor(){  // object with our constructor
        this.baseUrl = 'http://localhost:3000/products'   // instantiate with the adapter, would set base url
          }      //  and has ability to call get Product

    getProducts(){     // make a fetch request to our base url
        return fetch(this.baseUrl)   // once it recv response, we parce json from the response
        .then(response => response.json())
       // .then(response =>response.text())  // convert to plan text (https://daveceddia.com/unexpected-token-in-json-at-position-0/)
       // .then(text => console.log(text))  // log it out
      }
    }


// adapter = new ProductAdapter()
// adapter.getProducts() // this will get product from our database
// const products = adapter.getProdcts  // will get our products from database