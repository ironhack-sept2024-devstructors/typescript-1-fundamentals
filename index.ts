/********************/
/* TypeScript Intro */
/********************/


//
// Strings, Numbers and Booleans
//
let price: number = 20;
let userName: string = "alice";
let isLoggedIn: boolean = true;



//
// Explicit types
//
let amount = 30;
// amount = "eleven"; // Type 'string' is not assignable to type 'number'.ts(2322)




// 
// Any
// 

let message: any;

message = "hello world"
message = 3;


// 
// Functions
// 

function greet(userName: string, amountOfPoints: number) {
    console.log(`Hello ${userName}, you have ${amountOfPoints} points`);
}


// 
// Functions - Optional parameters
// 

function offerFood(userName: string, food?: string) {
    if (food === undefined) {
        console.log(`hello, ${userName}, we can see you're not hungry`);
    } else {
        console.log(`hello, ${userName} would you like some ${food}`);
    }
}

offerFood("alice", "pizza");
offerFood("bob");


// 
// Functions - Return types
// 

function getPoints(isLoggedIn: boolean): number {
    if (isLoggedIn) {
        return 25;
    } else {
        return 0;
    }
}

const result = getPoints(true);


//
// Functions - Arrow functions
//

const calcUserPoints = (amountOfPoints: number, isLoggedIn: boolean): number => {
    return isLoggedIn ? (amountOfPoints * 3) : amountOfPoints;
}

// 
// Functions - Anonymous Functions
// 

const users = ["alice", "bob", "charlie"];

users.forEach(function (userName) {
    console.log(".......");
    console.log(userName.toUpperCase());
    console.log(userName.length);
    // console.log(userName.push()); // Property 'push' does not exist on type 'string'.ts(2339)
});


// 
// Classes
// 

class Product {
    name: string;
    price?: number;

    constructor(productName: string, productPrice: number) {
        this.name = productName;
        this.price = productPrice;
    }

    displayFormattedPrice(currency: string): void {
        console.log(`Price: ${this.price}${currency}`);
    }
}

const p1 = new Product('t-shirt', 20);
p1.displayFormattedPrice('€');

const p2 = new Product('ball', 5);
p2.displayFormattedPrice('€');


// 
// Arrays
// 

let students: string[];
students = ["alice", "bob", "charlie"];


let points: number[];
points = [20, 30, 40];


//
// Multi-dimensional Arrays
//

let school: string[][];
school = [
    ['alice', 'bob', 'charlie'],
    ['angelina', 'brad', 'cameron'],
    ['helsinki', 'tokyo', 'denver'],
];


//
// Tuples
//
// A tuple is a specific type of array where we define the exact number of elements and the type of each element.
//

let bookDetails: [string, number];
bookDetails = ["The hobbit", 1937]



// 
// Union Types
// 

let statusCode: number | string;

statusCode = 200;
statusCode = "not found";
// statusCode = true; // Type 'boolean' is not assignable to type 'string | number'.

function displayMessage(amount: number | string) {
    console.log('You have ' + amount + ' new notifications');
}

displayMessage(5);
displayMessage("five");


//
// Objects
//

function displayUserDetails(user: { name: string, age: number }) {
    console.log(user.name)
    console.log(user.age)
}

const u1 = { name: "alice", age: 30 };
const u2 = { name: "bob", age: 40 };

displayUserDetails(u1);
displayUserDetails(u2);


// 
// Type Alias
// 

type Player = {
    name: string,
    year: number,
    favouriteDrink?: string
}

let player1: Player;
let player2: Player;
let player3: Player;

player1 = { name: "Cristiano", year: 1985 };
player2 = { name: 'lionel', year: 1987, favouriteDrink: "Mate" };
player3 = { name: 'neymar ', year: 1992, favouriteDrink: 'mojito' };


//
// We can use the keyword type to give a name to any type...
//

type Status = number | string;

let status1: Status;
let status2: Status;

status1 = 200;
status2 = "not found";


// 
// Interfaces
// 

interface EventDetails {
    title: string,
    location: string,
    price?: number,
}
interface Concert extends EventDetails {
    artist: string,
    genres: string[]
}

const conference1: EventDetails = {
    title: "TS Fundamentals",
    location: "Dublin",
    price: 200
}

const concert1: Concert = {
    title: 'Ed Sheeran',
    location: 'Berlin',
    price: 90,
    artist: 'Ed Sheeran',
    genres: ['Pop', 'Folk-pop']
};

