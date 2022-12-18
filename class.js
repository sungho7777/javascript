'use strict';
// Object-oriendted programming
// class: template
// object: instance of class

// Javascript classes
//  - introduced in ES6
//  - syntactical sugar over prototype-based inheritance

// 1. Class declaration
class Person{
    // constructor
    constructor(name, age){
        // fields
        this.name = name;
        this.age = age;
    }

    // methods
    speak(){
        console.log(`${this.name}: hello`);
    }
}

const moritz = new Person('moritz', 30);
console.log(moritz.name);
console.log(moritz.age);
moritz.speak();

// 2. Getter and setters
class User{
    constructoe(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    get age(){
        return this._age;
    }

    set age(value){
        this._age = value < 0 ? 0 : value;
    }
}

const user1 = new User('park', 'sungho', -1);
console.log(user1.age);

// 3. Fields (public, private)
// Too soon!
class Experiment{
    publicField = 2;
    #privateField = 0;
}

const experiment = new Experiment();
console.log(experiment.publicField);
console.log(experiment.privateField);

// 4. Static properties and methods
// Too soon!
class Article{
    static publisher = 'Dream Coding';
    constructor(articleNumber){
        this.articleNumber = articleNumber;
    }
    static printPublisher(){
        console.log(Article.publisher);
    }
}

const article1 = new Article(1);
const article2 = new Article(2);
console.log(Article.publisher);
Article.printPublisher();

// 5. Inheritance
// a way for one class to extend another class.
class Shape{
    constructor(w, h, c){
        this.w = w;
        this.h = h;
        this.c = c;
    }

    draw(){
        console.log(`drawing ${this.c} color of`);
    }

    getArea(){
        return this.w * this.h;
    }
}

class Rectangle extends Shape{}
class Triangle extends Shape{
    draw(){
        super.draw();
        console.log(`>>`);
    }

    getArea(){
        return (this.w * this.h) / 2;
    }
}

const rectangle = new Rectangle(20, 20, 'blue');
rectangle.draw();
console.log(rectangle.getArea());

const triangle = new Triangle(20, 20, 'red');
triangle.draw();
console.log(triangle.getArea());

// 6. Class checking instanceOf()
console.log(rectangle instanceof Rectangle);
console.log(triangle instanceof Rectangle);
console.log(triangle instanceof Triangle);
console.log(triangle instanceof Shape);
console.log(triangle instanceof Object);
