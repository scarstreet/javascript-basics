//var, let, const ---------------------------------------------
// var is globally scoped
// === ES6 === 
// let -> can reassign values
// const -> can't be reassigned

// Primitive variable types -----------------------------------
// String, Numbers, Boolean, null, undefined

// String operations ------------------------------------------
const str = 'abcd'
const str1 = 'aaaa'
const str2 = 'bbbb'
function demoStrings() {
    // concat
    console.log(str1+str2)
    console.log(`${str1} ${str2}`)

    // others
    console.log(str1.length)
    console.log(str1.toUpperCase())
    console.log(str1.toLowerCase())
    console.log(str.substring(1,3).toUpperCase())
    str.split('c').forEach((e)=>{console.log('from split: '+e)})
}

// Arrays  -----------------------------------------------------
function arrayDemo() {
    const arr = [1,2,3,4,5]
    console.log(arr)
    
    arr.push(2)
    console.log(arr)
    
    arr.pop()
    console.log(arr)
    
    console.log('index of 3: '+arr.indexOf(3))
    
    console.log(arr[0])
    console.log(arr.length)
    
}

// Object ------------------------------------------------------
/* Astrid.... you already know this........ */
function objectDemo() {
    const obj = {
        id:1,
        name: 'Harry',
        age: 22,
        stuff: {
            potions: ['a','b','c'],
            weapons: ['knife','gun'],
        }
    }

    const {id,age,stuff:{weapons}} = obj
    console.log(weapons)
    
    obj.isHandsome = true
    console.log(obj.isHandsome)
    
}

// JSON ---------------------------------------------------------
function jsonDemo() {
    const obj = {
        id:1,
        name: 'Harry',
        age: 22,
        stuff: {
            potions: ['a','b','c'],
            weapons: ['knife','gun'],
        }
    }
    const objJSON = JSON.stringify(obj)
    console.log(JSON.parse(objJSON))   
}

// Loops --------------------------------------------------------

function loopDemos() {
    // === FOR LOOP ===
    for(let i = 0;i<10;i++){
        console.log(i)
    }
    
    // === WHILE LOOP ===
    let i = 0
    while(i<10){
        i++
        console.log(i)
    }
    
    // === FOR-OF LOOP ===
    const arr = [1,2,3,4] 
    for(a of arr) {
        console.log(a)
    }
}

// foreach, map, filter -----------------------------------------
function otherLoopDemo() {
    // == FOREACH ==
    [1,2,3].forEach((n)=>{console.log(n)})
    
    // == MAP ==
    const a = [1,2,3].map((e)=>{
        return e+11
    })
    console.log(a)
    
    // == FILTER ==
    const b = [1,2,3].filter((e)=>{
        return e%2==1;
    })
    console.log(b)
}

// conditionals -------------------------------------------------
function demoConditionals() {
    // if else
    const a = 10+1>10 ? 'yes':'no'
    switch(a) {
        case 'yes':
            console.log('ofc...')
            break;
        case 'no':
            console.log('wait, holdup-')
            break;
        default:
            console.log('h?')
            break;
    }
}

// OOP ==========================================================
function demoOOP() {
    // Constructor ---------------------------- ES5
    function Person(name='npc', age=0) {
        this.name = name
        this.age = age
        this.creationDate = new Date()
    
        // == can add a function here ==
        // this.getInfo = ()=>{
        //     return `Name: ${this.name}, Age:${this.age}, Creation Date:${this.creationDate}`
        // }
    }
    // == can set function as prototpe instead :D
    Person.prototype.getInfo = function(){
        return `Name: ${this.name}, Age:${this.age}, Creation Date:${this.creationDate}`
    }
    
    const npc1 = new Person('Ally',12)
    console.log(npc1)
    console.log(npc1.getInfo())
    
    // ------------------------------------------ ES6
    class Person2 {
        constructor(name='npc',age=0) {
            this.name = name
            this.age = age
            this.creationDate = new Date()
        }
        getInfo() {
            return `Name: ${this.name}, Age:${this.age}, Creation Date:${this.creationDate}`
        }
    }
}

// DOM management -----------------------------------------------
class User {
    constructor(name='???',age='N/A'){
        this.name = name
        this.age = age
    }
}

console.log(document.querySelectorAll('div'))

// querySelector and getElementBy is how we reference DOM tags
const form = document.querySelector('form')

// REMOVING AN OBJECT
// form.remove()
// form.lastElementChild.remove()
// form.lastElementChild.textContent='aa'
// form.children[0].textContent = 'aaaa'
// form.children[0].innerHTML = 'aaa'
// form.style.background = 'blue'

const submit = document.querySelector('button')
submit.addEventListener('click',(e)=>{
    e.preventDefault()
    const name = document.querySelector('#name')
    const age = document.querySelector('#age')
    const users = document.querySelector('#users')
    if(age.value===''||name.value===''){
        
    } else {
        const user = document.createElement('li')
        user.innerHTML = name.value + " " + age.value
        users.appendChild(user)
        name.value = ""
        age.value = ""
    }

});