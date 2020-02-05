class Products {  //meat of program
    constructor(){
        this.products = [];  // set property of products and set it to empty array
        this.adapter = new ProductsAdapter();  // create adapter
      //  this.bindEventListerners();  // at somepoint we want to evoke a method eventlisterner
        this.fetchAndLoadProducts();    // evoke the method
    }
        fetchAndLoadProducts(){
            this.adapter.getProducts().then(products =>{
                console.log(products)

            })
        }
    }