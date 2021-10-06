import { Invoice } from './classes/invoice.js';
import { Payment } from './classes/payment.js';
// let docOne: HasFormatter;
// let docTwo: HasFormatter;
// docOne = new Invoice('yoshi', 'webwork', 250)
// docTwo = new Payment('mario', 'plumb work', 200)
// let docs: HasFormatter[] = [];
// docs.push(docOne)
// docs.push(docTwo)
// console.log('docs....', docs)
// const invoiceOne = new Invoice('mario', 'work on mario website', 400)
// const invoiceTwo = new Invoice('luigi', 'work on luigi website', 300)
// let invoices:Invoice[] = []; // only invoices can be added to this array
// invoices.push(invoiceOne, invoiceOne)
// readonly: only allowed to read it, not change it, inside and outside the class
// private: only allowed to access it directly within the class. can access it if its part of a method
// public: allowed to access and change it wherever
// form
const form = document.querySelector('.new-item-form'); // type casting
// inputs
const type = document.querySelector('#type');
const toFrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let doc;
    if (type.value === 'invoice') {
        doc = new Invoice(toFrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(toFrom.value, details.value, amount.valueAsNumber);
    }
    console.log('doc...', doc);
});
