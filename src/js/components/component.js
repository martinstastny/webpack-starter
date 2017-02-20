export class MyClass {
    constructor() {
        document.querySelector('.js-clickme').addEventListener("click", this.clickHandler);
        console.log("Hello from ES6 ");
    }

    clickHandler(e){
        e.preventDefault();
        alert('You just have clicked a button')
    }
}

export class Person{
    constructor(name){
        this.person = name;
    }

    get name(){
        return this.person;
    }
}
