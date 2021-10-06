import { Invoice } from './classes/invoice.js';
import { ListTemplate } from './classes/listTemplate.js';
import { Payment } from './classes/payment.js';
// form
const form = document.querySelector('.new-item-form'); // type casting
// inputs
const type = document.querySelector('#type');
const toFrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
const ul = document.querySelector('ul');
const list = new ListTemplate(ul);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let doc;
    if (type.value === 'invoice') {
        doc = new Invoice(toFrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(toFrom.value, details.value, amount.valueAsNumber);
    }
    list.render(doc, type.value, 'end');
});
// generics: allows us to create reusable blocks of code
const addUID = (obj) => {
    let uid = Math.floor(Math.random() * 1000);
    return Object.assign(Object.assign({}, obj), { uid });
};
let docOne = addUID({ name: 'duane', age: 40 });
console.log(docOne);
const docThree = {
    uuid: 3,
    resourceName: 'duane',
    data: 'john'
};
const docFour = {
    uuid: 5,
    resourceName: 'gianna',
    data: ['test']
};
const greeting = (name) => `hi, i'm ${name}`;
