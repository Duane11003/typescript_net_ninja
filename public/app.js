"use strict";
// const anchor = document.querySelector('a')!;
// console.log(anchor.href)
// const 
// classes
var Invoice = /** @class */ (function () {
    function Invoice(c, d, a) {
        this.client = c;
        this.details = d;
        this.amount = a;
    }
    Invoice.prototype.format = function () {
        return this.client + " owes $" + this.amount + " for " + this.details;
    };
    return Invoice;
}());
var invoiceOne = new Invoice('mario', 'work on mario website', 400);
var invoiceTwo = new Invoice('luigi', 'work on luigi website', 300);
var invoices = []; // only invoices can be added to this array
var form = document.querySelector('.new-item-form'); // type casting
// inputs
var type = document.querySelector('#type');
var toFrom = document.querySelector('#tofrom');
var details = document.querySelector('#details');
var amount = document.querySelector('#amount');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    console.log(type.value, toFrom.value, details.value, amount.valueAsNumber);
});
