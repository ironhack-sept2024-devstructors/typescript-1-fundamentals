/********************/
/* TypeScript Intro */
/********************/
//
// Strings, Numbers and Booleans
//
var price = 20;
var userName = "alice";
var isLoggedIn = true;
//
// Explicit types
//
var amount = 30;
// amount = "eleven"; // Type 'string' is not assignable to type 'number'.ts(2322)
// 
// Any
// 
var message;
message = "hello world";
message = 3;
// 
// Functions
// 
function greet(userName, amountOfPoints) {
    console.log("Hello ".concat(userName, ", you have ").concat(amountOfPoints, " points"));
}
// 
// Functions - Optional parameters
// 
function offerFood(userName, food) {
    if (food === undefined) {
        console.log("hello, ".concat(userName, ", we can see you're not hungry"));
    }
    else {
        console.log("hello, ".concat(userName, " would you like some ").concat(food));
    }
}
offerFood("alice", "pizza");
offerFood("bob");
// 
// Functions - Return types
// 
function getPoints(isLoggedIn) {
    if (isLoggedIn) {
        return 25;
    }
    else {
        return 0;
    }
}
var result = getPoints(true);
//
// Functions - Arrow functions
//
var calcUserPoints = function (amountOfPoints, isLoggedIn) {
    return isLoggedIn ? (amountOfPoints * 3) : amountOfPoints;
};
// 
// Functions - Anonymous Functions
// 
var users = ["alice", "bob", "charlie"];
users.forEach(function (userName) {
    console.log(".......");
    console.log(userName.toUpperCase());
    console.log(userName.length);
    // console.log(userName.push()); // Property 'push' does not exist on type 'string'.ts(2339)
});
// 
// Classes
// 
var Product = /** @class */ (function () {
    function Product(productName, productPrice) {
        this.name = productName;
        this.price = productPrice;
    }
    Product.prototype.displayFormattedPrice = function (currency) {
        console.log("Price: ".concat(this.price).concat(currency));
    };
    return Product;
}());
var p1 = new Product('t-shirt', 20);
p1.displayFormattedPrice('€');
var p2 = new Product('ball', 5);
p2.displayFormattedPrice('€');
// 
// Arrays
// 
var students;
students = ["alice", "bob", "charlie"];
var points;
points = [20, 30, 40];
//
// Multi-dimensional Arrays
//
var school;
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
var bookDetails;
bookDetails = ["The hobbit", 1937];
// 
// Union Types
// 
var statusCode;
statusCode = 200;
statusCode = "not found";
// statusCode = true; // Type 'boolean' is not assignable to type 'string | number'.
function displayMessage(amount) {
    console.log('You have ' + amount + ' new notifications');
}
displayMessage(5);
displayMessage("five");
//
// Objects
//
function displayUserDetails(user) {
    console.log(user.name);
    console.log(user.age);
}
var u1 = { name: "alice", age: 30 };
var u2 = { name: "bob", age: 40 };
displayUserDetails(u1);
displayUserDetails(u2);
var player1;
var player2;
var player3;
player1 = { name: "Cristiano", year: 1985 };
player2 = { name: 'lionel', year: 1987, favouriteDrink: "Mate" };
player3 = { name: 'neymar ', year: 1992, favouriteDrink: 'mojito' };
var status1;
var status2;
status1 = 200;
status2 = "not found";
var conference1 = {
    title: "TS Fundamentals",
    location: "Dublin",
    price: 200
};
var concert1 = {
    title: 'Ed Sheeran',
    location: 'Berlin',
    price: 90,
    artist: 'Ed Sheeran',
    genres: ['Pop', 'Folk-pop']
};
console.log("ab");
