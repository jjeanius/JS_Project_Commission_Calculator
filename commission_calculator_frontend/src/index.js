/*const Base_URL = "http://localhost:3000/"
const Product_URL = '${Base_URL}'/products
const Sales_URL = '${Sales_URL}'/sales
const mainDiv = document.querySelector('main') */

let buttonCalculate = document.getElementById('buttonCalculate');
let buttonReset = document.getElementById('buttonReset');
let txt = document.getElementById('text');
let inputPrice = document.getElementById('price');
let inputQuantity = document.getElementById('quantity');
let inputCommissionRate = document.getElementById('commission-rate');


buttonCalculate.addEventListener('click', calculate);
    function calculate(ev){
        console.log(ev.type, ev.target, ev.currentTarget);
    }

buttonReset.addEventListener('click', reset);
    function reset(ev){
        console.log(ev.type, ev.target, ev.currentTarget);
    }

txt.addEventListener('input', text);
    function text(ev){
        console.log(ev.target, ev.target.value);
    };

inputPrice.addEventListener('input', price);
    function price(ev){
        console.log(ev.target, ev.target.value);
    };

inputQuantity.addEventListener('input', quantity);
    function quantity(ev){
        console.log(ev.target, ev.target.value);
    };

inputCommissionRate.addEventListener('input', commissionRate);
    function commissionRate(ev){
        console.log(ev.target, ev.target.value);
    };









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