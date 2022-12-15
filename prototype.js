function Person (name, age, sex){
    this.name = name;
    this.age = age;
    this.sex = sex;
}


Person.prototype.account = function () {
    console.log(`The account has been created successful, details: name: ${this.name}, age: ${this.age}, sex: ${this.sex}`)
}

const p1 = new Person("Leon", 29, "male");
console.log(Person.prototype);
console.log(p1.toString());

p1.account();

const me = new Person("JEAN", 23, "male");

// console.log(me.validEmail());
console.log(me);

// You can add a method to the Person object and javascript will link it to the global Object prototype so that it can be accessible.
Person.prototype.CallMyName = function () {
    return `Hello ${this.name}`;
}

const me2 = new Person("Leon", 28, "male")

// console.log(Person.prototype);
console.log(me.CallMyName());
console.log(me2.CallMyName());

// This sayAge method will online to linked to he me2 object not the global Object prototype, therefore it will can an error
// when trying to access it on another object
me2.sayAge = function(){
    return `the age is ${this.age}`;
};

console.log(me2.sayAge());
// The following code gives an error. 
console.log(me.sayAge());