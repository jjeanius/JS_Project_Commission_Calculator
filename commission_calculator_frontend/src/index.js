/*const Base_URL = "http://localhost:3000/"
const Product_URL = '${Base_URL}'/products
const Sales_URL = '${Sales_URL}'/sales
const mainDiv = document.querySelector('main') */

let buttonCalculate = document.getElementById('buttonCalculate')
let buttonReset = document.getElementById('buttonReset')

buttonCalculate.addEventListener('click', calculate)
    function calculate(ev){
        console.log(ev.type, ev.target, ev.currentTarget)
    }

buttonReset.addEventListener('click', reset)
    function reset(ev){
        console.log(ev.type, ev.target, ev.currentTarget)
    }





//const productName = document.getElementById(commission-sales-form)


       /* return fetch(Product_URL)
            .then (response => response.json())
            .then(getProducts)

    function getProducts(products)
        products.forEach(product =>{
            let productString = " "
        product.sales.forEach(sale => {
            productString +=<li> ${product.name} </li>
        })



 document.getElementById('Calculate').addEventListener('click, upload');


    function upload(ev){
        ev.preventDefault();   //stop the form submitting
    }



function calculate() {
    calculate_commission_percentage;
}

}

*/