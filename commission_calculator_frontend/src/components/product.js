class Product {  //meat of program
    constructor(name){
        this.name = name
        this.product = [];  // set property of product and set it to empty array
        const sale = new Sale();
        this.adapter = new ProductAdapter();  // create adapter
      //this.bindEventListerners();  // at somepoint we want to evoke a method eventlisterner
        this.fetchAndLoadProduct();    // evoke the method
    }
        fetchAndLoadProduct(){
            this.adapter.getProduct().then(product =>{
                console.log(product)

            })
        }
    }

    console.log("Product_Hello")