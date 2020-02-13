class Products {
    constructor(){
        this.Products = [];  // set property of product and set it to empty array
        const sale = new Sale();
        this.adapter = new ProductsAdapter();  // create adapter
        //this.bindEventListerners();  // at somepoint we want to evoke a method eventlisterner
        this.fetchAndLoadProducts();    // evoke the method
    }
        fetchAndLoadProducts(){
            this.adapter.getProducts().then(products =>{
                console.log(products)

            })
        }
}