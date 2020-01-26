/*const Base_URL = "http://localhost:3000/"
const Product_URL = '${Base_URL}'/products
const Sales_URL = '${Sales_URL}'/sales
const mainDiv = document.querySelector('main') */

let buttonCalculate = document.getElementById('buttonCalculate');
let buttonReset = document.getElementById('buttonReset');

let inputs = document.querySelectorAll('#commission-sales-form .input');  //nodelist

Array.from(inputs).forEach(function(input){
    input.addEventListener('input', addInput);
        function addInput(ev){
            console.log(ev.target, ev.target.value);

        };
})

/*let txt = document.getElementById('text');
let inputPrice = document.getElementById('price');
let inputQuantity = document.getElementById('quantity');
let inputCommissionRate = document.getElementById('commission-rate');  */


buttonCalculate.addEventListener('click', calculate);
    function calculate(ev){
        console.log(ev.type, ev.target, ev.currentTarget);
    }

buttonReset.addEventListener('click', reset);
    function reset(ev){
        console.log(ev.type, ev.target, ev.currentTarget);
    }


