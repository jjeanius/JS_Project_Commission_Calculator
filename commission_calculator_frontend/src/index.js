/*const Base_URL = "http://localhost:3000/"
const Product_URL = '${Base_URL}'/products
const Sales_URL = '${Sales_URL}'/sales
const mainDiv = document.querySelector('main') */

let buttonCalculate = document.getElementById('buttonCalculate');
let buttonReset = document.getElementById('buttonReset');
let inputs = document.querySelectorAll('#commission-calculator .input');  //nodelist

Array.from(inputs).forEach(function(input){  //change to array and iterate through the inputs nodelist
    input.addEventListener('input', addInput);  // add event listener to each input
        function addInput(ev){
            console.log(ev.target, ev.target.value);
        };
})

buttonCalculate.addEventListener('click', calculate);  // add event listener to the calculate button
    function calculate(ev){
        console.log(ev.type, ev.target, ev.currentTarget);
    }

buttonReset.addEventListener('click', function(ev){  // add even listener to the reset button
    if(ev.target.classInput == 'reset'){
       const li = e.target.parentElement;
       buttonReset.removeChild(li)
    }
    });

const addForm = document.forms['commission-calculator'];   // create commission sales form
    addForm.addEventListener('submit', function(e){     // add even listener to the button
        e.preventDefault();
            const product = addForm.querySelector('input[type="text"]').value;
            const price = addForm.querySelector('input[type="price"]').value;
            const quantity = addForm.querySelector('input[type="quantity"]').value;
            const commissionRate = addForm.querySelector('input[type="commission_rate"]').value;

            //Commission Report - create elements
            //const divrow = document.createElement('div.row');
            //const divcolumn = document.createElement('div.column')
            //const h3 = document.createElement('h3');
            const span = document.createElement('span');
            const productName = document.createElement('product_name');
            const salesPrice = document.createElement('price');
            const salesQuantity = document.createElement('quantity');
            const commRate = document.createElement('commission_rate');
            const commAmount = document.createElement('commission_amount');
            const deleteButton = document.createElement('reset');


            // add content
            // deleteButton.textContent = reset
              productName.textContent = product
              salesPrice.textContent = price
              salesQuantity.textContent = quantity
              commRate.innrtHTML = commission_rate
              commAmount.innerHTML =commission_amount


              //append to document
              span.appendChild(productName);
              span.appendChild(salesPrice);
              span.appendChild(salesQuantity);
              span.appendChild(commRate);
              span.appendChild(commAmount);
              span.appendChild(deleteButton);
              addForm.appendChild(span);


          });