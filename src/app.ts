// const anchor = document.querySelector('a')!;
// console.log(anchor.href)

// const 

// classes

class Invoice {
    client: string;
    details: string;
    amount: number;

    constructor(c: string, d: string, a: number) {
        this.client = c;
        this.details = d;
        this.amount = a;
    }

    format() {
        return `${this.client} owes $${this.amount} for ${this.details}`
    }
}

const invoiceOne = new Invoice('mario', 'work on mario website', 400)
const invoiceTwo = new Invoice('luigi', 'work on luigi website', 300)

let invoices:Invoice[] = []; // only invoices can be added to this array

const form = document.querySelector('.new-item-form') as HTMLFormElement; // type casting

// inputs
const type = document.querySelector('#type') as HTMLSelectElement;
const toFrom = document.querySelector('#tofrom') as HTMLSelectElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

form.addEventListener('submit', (e: Event) => {
    e.preventDefault();
    console.log(type.value, toFrom.value, details.value, amount.valueAsNumber)
})