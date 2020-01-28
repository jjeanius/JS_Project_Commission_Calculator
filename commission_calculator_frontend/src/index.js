/*const Base_URL = "http://localhost:3000/"
const Product_URL = '${Base_URL}'/products
const Sales_URL = '${Sales_URL}'/sales
const mainDiv = document.querySelector('main') */

let buttonCalculate = document.getElementById('buttonCalculate');
let buttonReset = document.getElementById('buttonReset');
let inputs = document.querySelectorAll('#commission-sales-form .input');  //nodelist

Array.from(inputs).forEach(function(input){  //change to array and iterate through the inputs nodelist
    input.addEventListener('input', addInput);  // add event listener to each input
        function addInput(ev){
            console.log(ev.target, ev.target.value);
        };
})

/* buttonCalculate.addEventListener('click', calculate);  // add event listener to the calculate button
    function calculate(ev){
        console.log(ev.type, ev.target, ev.currentTarget);
    }  */

buttonReset.addEventListener('click', function(ev){  // add even listener to the reset button
    if(ev.target.classInput == 'reset'){
       const li = e.target.parentElement;
       buttonReset.removeChild(li)
    }
    });

    const addForm = document.forms['commission-sales-form'];   // create commission sales form
        addForm.addEventListener('submit', function(e){     // add even listener to the button
            e.preventDefault();
            const product = addForm.querySelector('input[type="text"]').value;
            //const commission = addForm.querySelector('input[type="integer]').value;
            const price = addForm.querySelector('input[type="integer"]').value;
            const commission_rate = addForm.querySelector('input[type="integer"]').value;
            const quantity = addForm.querySelector('input[type="integer"]').value;
            const commission_amount = addForm.querySelector('input[type="integer"]').value;

            //create elements
            //const divrow = document.createElement('div.row');
            //const divcolumn = document.createElement('div.column')
            const h3 = document.createElement('h3');
            const span = document.createElement('span');
            const productName = document.createElement('productName');
            const comm_rate = document.createElement('commission_rate');
            const sales_price = document.createElement('price');
            const share_quantity = document.createElement('qunatity');
            const comm_amount = document.createElement('commission_amount');
            const delete_button = document.createElement('delete');

            // add content
            delete_button.textContent = "delete";
            productName.textContent = "productName"


            //append to document
            span.appendChild(productName);
            span.appendChild(comm_rate);
            span.appendChild(sales_price);
            span.appendChild(share_quantity);
            span.appendChild(comm_amount);
            span.appendChild(delete_button)
            addForm.appendChild(span);


        });