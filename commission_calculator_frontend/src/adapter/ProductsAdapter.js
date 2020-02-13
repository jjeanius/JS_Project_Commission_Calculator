class ProductsAdapter{  //talk to our backend API
    constructor(){  // object with our constructor
        this.baseUrl =    // instantiate with the adapter, would set base url
        'http://localhost:3000/'   //  and has ability to call get Product
    }

    getProducts(){     // make a fetch request to our base url
        return fetch(this.baseUrl)
        .then(res => res.json())   // once it recv response, we parce json from the response

        }
    }


// adapter = new ProductAdapter()
// adapter.getProducts() // this will get product from our database
// const products = adapter.getProdcts  // will get our products from database