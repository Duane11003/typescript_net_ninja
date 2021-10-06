
import { Invoice } from './classes/invoice.js'
import { ListTemplate } from './classes/listTemplate.js';
import { Payment } from './classes/payment.js'
import { HasFormatter } from './interfaces/HasFormatter.js'

// interfaces: used to inforce structure on classes

interface IsPerson {
    name: string;
    age: number;
    speak(a: string): void;
    spend(a: number): number;
}

// form
const form = document.querySelector('.new-item-form') as HTMLFormElement; // type casting

// inputs
const type = document.querySelector('#type') as HTMLSelectElement;
const toFrom = document.querySelector('#tofrom') as HTMLSelectElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

const ul = document.querySelector('ul')!
const list = new ListTemplate(ul)

form.addEventListener('submit', (e: Event) => {
    e.preventDefault();
    let doc: HasFormatter
    if (type.value === 'invoice') {
        doc = new Invoice(toFrom.value, details.value, amount.valueAsNumber)
    } else  {
        doc = new Payment(toFrom.value, details.value, amount.valueAsNumber)
    }

    list.render(doc, type.value, 'end')

})


// generics: allows us to create reusable blocks of code

const addUID = <T extends {name: string}>(obj: T) => { // the <T> captures whatever properties we pass into the function
 let uid = Math.floor(Math.random() * 1000)
 return {...obj, uid}
}

let docOne = addUID({name: 'duane', age: 40})
console.log(docOne)

interface Resource<T> { // reminder: interfaces define how objects should look
    uuid: number;
    resourceName: string;
    data: T
}

const docThree: Resource<string> = {
    uuid: 3,
    resourceName: 'duane',
    data: 'john'
}

const docFour: Resource<string[]> = {
    uuid: 5,
    resourceName: 'gianna',
    data: ['test']
}

const greeting = (name: string) => `hi, i'm ${name}`