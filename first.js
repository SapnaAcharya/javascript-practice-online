console.log("Welcome to Apna College");
console.log("Sapna Acharya");
console.log("I love javascript");

fullname = "Tony Stack";
console.log(fullname);
age = 24;   
tprice = 99.99;
x = null;
y = undefined;
console.log(x);
isfollow = false;  //boolean value store
console.log(isfollow);

fname = "sapna acharya";
FNAME = "aman gupta";
console.log(fname);
console.log(FNAME);

let fullname = "tony stark";
console.log(fullname);

let age =24;
age = 25;
console.log(age);

const address = 24;
console.log(address);

{
    let a = 5;
    console.log(a);
}

{
    let a = 10;
    console.log(a);
}

let x = BigInt(122);

const student = {
    fullname : "Susmita Acharya",
    age : 24,
    cgpa : 8.2,
    ispass : true
};

student["age"] = student["age"] + 1;
student["name"] = "Susma Adhikari";

console.log(student["cgpa"]);

// Practice 2: Create a const object called "product" to store information shown in the picture.

const product = {
    title: "Ball Pen",
    rating: 4,
    offer: 5,
    price: 270
};

// Practice 2: Create a const object called "profile" to store information shown in the picture.
const profile = {
    username: "@susmita",
    isfollow: false,
    followers: 123,
    following: 123,
};
console.log(typeof profile["followers"]);

// Comment in JavaScript : part of code which is not executed.
// This is a single line comment
/* This is a multi line comment */

//Arithmetic Operators
let a =5;
let b= 2;

console.log("a + b=",a+b);
console.log("a - b=",a-b);
console.log("a * b=",a*b);
console.log("a / b=",a/b);
console.log("a % b=", a%b);

//unary operator
let m = 5;
let n = 6;

console.log("m = ", m, "& n =", n);

console.log("m-- = ", m--);
console.log("m = ", m);

//Assignment operator: used to assign values.
let p = 5;
let q = 2;

p %= 4; //p = p % 4
console.log("p =", p); //1

//Comparison operators: used to compare two values
let r = 5;
let s = 2;
let t = "2"; //string to number convert first

console.log("5 ==2", r == s); //false
console.log("5 != 2", r != s); //true

// === is used for comparision of datatype used also.

// Logical opertor are used for comparison two expression
//1.logical AND(&&) : used when 1st condiond and second condition are true.
//2.logical OR(||) : used when any one condition is met true.
//3.logical NOT(!) : used when if condition put is true then convert to false and vice-versa as it print opposite.

//Conditional Statements
let ages = 25;

if(ages > 18) {
    console.log("You can vote");
}

let mode = "dark";
let color;

if(mode === "dark") {
    color = "balck";
}

if(mode === "light") {
    color = "white";
}
console.log(color);

//Conditional Statements: IF Statements
// odd or even
let num = 20;

if (num % 2 === 0) {
    console.log(num, "is even");
} else {
    console.log(num, "is odd");
}

//Syntax -> rules

//Conditional Statements: else-if Statements
if(age < 18) {
    console.log("junior");
} else if (age > 60) {
    console.log("senior");
} else {
    console.log("middle")
}

// Another example

let modes = "dark";
let colors;

if (modes === "dark") {
    colors = "black";
} else if (modes === "pink") {
    colors = "pink";
} else {
    colors = "white";
}
console.log(colors);

if (modes === "dark") {
    console.log(modes);
}

// Practice 1: Get user to input a number using prompt("Enter a number:").
// Check if the number is a multiple of 5 or not.

let number = prompt("Enter a number:");

if (num % 5 === 0) {
    console.log(number,"is a multiple of 5");
} else {
    console.log(number, "is not a multiple of 5");
}

//Practice 2: Write a code which can give grades to studets according to their scores:

let score = prompt("Enter your score (0-100):");
let grade;

if (score >= 90 && score <= 100) {
    grade = "A";
} else if (score >= 70 && score <= 89) {
    grade = "B";
} else if (score >= 60 && score <= 69 ) {
    grade = "C";
} else if (score >= 50 && score <= 59) {
    grade = "D";
} else if (score >= 0 && score <= 49) {
    grade = "F";
} 

//Loops in JS: used to execute a piece of code again and again.

//Print 1 to 5
for (let i = 1; i <= 5; i++) {
    console.log("i =", i);
}

//while loop
let j = 10;
while (j <= 10) {
    console.log("Apna College");
    j++;
}

//do while loop
let i = 1;
do {
    console.log("i=",i);
    i++;
} while (i <= 5);

//for of loop
let str = "Apna College";

for (let i of str) {  //iterator -> characters
    console.log("i=",i);
}

//for in loop : used when create an object and arrays creation also used.
let student = {
    name: "Rahul Kumar",
    age: 20,
    cgpa: 7.5,
    isPass: true,
};

for (let i in student) {
    console.log(i);
}

//for in loop
let student = {
    name: "Rahul Kumar",
    age: 20,
    cgpa: 7.5,
    isPass: true,
};

for(let key in student) {
    console.log("key=", key, " value=", student[key]);
}

// Print all the even numbers from 0 to 100
for(let num=0; num<100; num++) {
    if(num%2 === 0) { 
        //even number
    console.log("num=",num);
  }
}

//Create a game where you start with any random game number. Ask the user to keep 
//guessing the game number until the user enters correct value.
let gameNum = 25;

let userNum = prompt("Guess the game number :");
// console.log(userNum);

while(userNum != gameNum) { //game
    userNum = prompt("You entered wrong number. Guess again: ");
}

console.log("Congratulations, you entered the right number");

//Strings in JS: String is a sequence of characters used to represent text

let string1 = "Apna College";
console.log(string1[3]); //a

//Template Literal: A way to have embedded expressions in strings
let specialString =`This is a template literal`;
console.log(typeof specialString);

let obj = {
    item: "pen",
    price: 10,
};

let output = `The cost of {obj.item} is ${obj.price} rupees`;   //template string reduce the overhead of writing
// comma again and again that no need to convert into string
console.log(output);

//String Interpolation: To create strings by doing substitution of placeholders

console.log("The cost of", obj.item, " is", obj.price, "rupees");

//String Methods in JS: String are immutable in javascript (original string doesn't change 
//we need to create a new string.)
// 1. str.toUpperCase()
//2. str.toLowerCase()
//3. str.trim() //removes whitespaces from first and last side not from middle.

let string ="ApnaCollege";
let newString = str.toUpperCase();
console.log(string);
console.log(newString);

//4. str.slice(start, end?) //returns part of string
//5. str.concat(str2) //joins str2 with str1



let str1 = "apna";
let str2 = "college"

let res = str1.concat(str2); //results: apnacollege
let result = str2.concat(str1); //results: collegeapna
let results = str1 + str2;
console.log(res);
//6. str.replace(searchVal, newVal)

let strs = "hello";
console.log(strs.replace("h","y")); //results: yellow

//7. 
let str3 = "IloveJS";
str3[0] = "S";  //we cannot vhange the value of string to original string , we need to create a new string.
str3 = str3.replace("I", "S"); // results: SloveJS : we can change in this way using replace method.
console.log(str3.charAt(0));  //results: I

//Practice 1: Prompt the user to enter their full name. Generate a username for them based on the input. 
// Start username with @, followed by their full name and ending with the fullname length.
//eg: user name = "shradhakhapra", username should be "@shradhakhapra13"

let fullName = prompt("Enter your fullname without spaces");
let username = "@" + fullName + fullName.length;
console.log(username);


//Arrays: Collection of items : Arrays are mutable in javascript i.e values can be change
let marks = [97, 82, 75, 64, 36];
console.log(marks);
console.log(marks.length);   //length is property of arrays as it gives only values.

let heroes =["ironman", "thor", "hulk", "shaktiman","spiderman","antman"];
console.log(heroes);

//Looping Over an Arrays: Print all elements of an aray.
//print arrays using for loop
for (let idx=0; idx < heroes.length; idx++) {
    console.log(heroes[idx]);
}

//for of
for (let hero of heroes) {
     console.log(hero);
}

//another example
let cities = ["delhi", "pune", "mumbai", "hydrabad", "gurgaon"];

for (let city of cities) {
    console.log(city);
    console.log(city.toLowerCase());
}

// Practice 1 :For a given array with marks of students -> [85,97,44,37,76,60]
//Find the average marks of the entire class.

let mark = [85,97,44,37,76,60];

let sum = 0;

for(let val of mark) {
    sum = sum + val;
    //OR
    sum += val;
}
let avg = sum / marks.length;
console.log(`avg marks of the class = ${avg}`);

//Practice 2: For a given array with prices of 5 items -> [250, 645, 300, 900, 50]
//All items have an offer of 10% OFF on them. Change the array to store final price after applying offer.

let items = [250, 645, 300, 900, 50];

let idx = 0;
for (let val of items) {
   // console.log(`value at index ${idx} = ${val}`);
    let offer = val / 10;
    items[idx] = items[idx] - offer;
    console.log(`value after offer = ${items[idx]} `);
    idx++;
}

//OR

for (let i = 0; i < items.length; i++) {
    let offer = items[i] / 10;
    items[i] -= offer;
}
console.log(items);

//Arrays methods: 
// 1. Push():add to end

let fooditems = [" potato", "apple", "litchi", "tomato"];
fooditems.push("chips", "burger","paneer");
console.log(fooditems);

//2. Pop():delete from end & return

let foodItems = ["potato", "apple", "litchi","tomato"];
console.log(foodItems);
let deleteditem = foodItems.pop();
console.log(foodItems);
console.log("deleted", deleteditem);

//3. toStrings(): converts array to string

let Fooditems = ["potato","apple","litchi","tomato"];
let markss = [97, 86, 54, 36];

console.log(Fooditems);
console.log(Fooditems.toString());
console.log(Fooditems);

//4. Concat():joins multiple arrays and return result

let marvel_heroes = ["thor", "spiderman", "ironman"];
let dc_heroes = ["superman", "batman"];

let Heroes = marvel_heroes.concat(dc_heroes);
console.log(Heroes);

//5. Slice() : returns a piece of the array: slice(startidx, endidx)
//6. Splice() : change original array(add, remove, replace): splice(startidx, delcount,newel1)

let arr = [1,2,3,4,5,6,7];

arr.splice(2,2,101,102);

//add element
arr.splice(2,0,101);

//delete element
arr.splice(3,1);

//replace an element
arr.replace(3,1,101);

//Practice 1: Create an array to store companies -> "Bloomberg","Microsoft","Uber","Google","IBM","Netflix"
//a. Remove the first company from the array.
//b. Remove Uber & Add Ola in its place
//c. Add Amazon at the end

let companies = ["Bloomberg", "Microsoft","Uber","Google","IBM","Netflix"]

companies.shift();


companies.splice(2, 1, "Ola");

companies.push("Amazon");

//Functions : Block of code that performs a specified task, can be invoked(call) whenever needed.

console.log("hello!");

"abc".toUpperCase()

[1, 2, 3].push(4);

function myfunction() {
    console.log("Welcome to Apna College!");
    console.log("We are learning JS:");
}
myfunction();
myfunction();

function myFunction(msg, n) {
    //parameter -> input
    console.log(msg * n);
}
myFunction("I love JS"); //argument

//Another example
//Function -> 2 numbers, sum

function sum(x, y) {
    //local variable -> scope
    s = x + y;
    console.log(x);
    return s;
}

let val = sum(3, 4);
console.log(x);
console.log(val);


// sum function
function Sum(a, b) {
    s = a + b;
    console.log("before return");
    return s;
    console.log("after return"); //return ke badd wala code execute hudaena
}
let value = sum(3, 4);
console.log(value);

//Arrow Functions: Compact way of writing a function
//sum function
function SUM(a , b) {
    return a + b;
}
const o = 5;

const arrowsum = (a, b) => {
    console.log(a + b);
};


//multiplication function
function mul(a, b) {
    return a * b;
}

const arrowmul = (a, b) => {
    console.log(a * b);
};

//Create a function using the "function" keyword that takes a string as an argument 
// & returns the number of vowels in the string.

function countvowels(str) {
    let count = 0;
    //"Apna college", count = 3
    for(const char of str) {
        if(char === "a" || char === "e" || char === "i" || char ==="o" || char ==="u"){
            count++;
        }
    }
    console.log(count);
}

//A callback: Here, it is afunction to execute for eah element in the array.
// A callback is a function

// Creates a new array with the results of some operation. The value its callback returns
// are used to form new array.

//We are given array of marks of students. Filter our of the marks of students that scored 90+.
let MARKS = [97, 64, 32, 49, 99, 96, 86];
let toppers = marks.filter((val) => {
    return val > 90;
});
console.log(toppers);

// Take a number n as an input from user.Create an array of numbers from 1 to n.
// Use the reduce method to calculate sum of all numbers in the array.
// Use the reduce method to calculate product all numbers in the array.
let N = prompt("Enter a number :");
let array =[];
for (let i=1; i<=N; i++) {
    arr[i-1] = i;
}
console.log(array);
let sum = arr.reduce((res, curr) => {
    return res + curr;
});
console.log("sum =", sum);
let factorial = arr.reduce((res, curr) => {
    return res * curr;
});

// DOM( Document Object Model)
// Selecting with id: document.getElementById("myId")
//Selecting with class: document.getElementsByClassName("myClass")
// Selecting with tag: document.getElementsByTagName("p")

//Query Selector: 
//document.querySelector("myId / myClass / tag"): returns first element
//document.querySelectorAll("myId / myClass / tag"): returns a NodeList

let firstelement = document.querySelector("p");  //1st element
console.log(firstelement);

// <style> 
let heading = document.getElementById("heading");
console.dir(heading);

let headings = document.getElementsByClassName("heading"); //returns 1st element
console.dir(heading);

let allelement = document.querySelectorAll("p");  //returns all element
console.dir(allelement);

//DOM Manipulation: Properties ; we can get or set elements
//1. tagName: returns tag for element nodes
//2. innerText: returns the text content of the element and all its children
//3. innerHTML: returns the plain text or HTML contents in the element
//4. textContent: returns textual content even for hidden elements

// Practice 1: Create a H2 heading element with text - "Hello Javascript". Append "from Apna College students" 
// to this text using JS.
let h2 = document.querySelector("h2");
console.dir(h2.innerText);
h2.innerText = h2.innerText + " from Apna College Students";

let divs = document.querySelectorAll(".box");
divs[0].innerText = "new unique value 1";
divs[1].innerText = "new unique value 2";
divs[2].innerText = "new unique value 3";

let divs = document.querySelectorAll(".box");
let idx1 = 1;
for (div of divs) {
    div.innerText = `new unique value $(idx1)`;
    idx1++;
}

//DOM Manipulation: Attributes:
//1. getAttribute(attr) //to get the attribute value
//2. setAttribute(attr,value) //to set the attribute val 

//DOM Manipulation: Insert Elements
// let el = document.createElement("div")

//1. node.append(el) //add at the end of node (inside)
//2. node.prepend(el) //adds at the start of node(inside)
//3. node.before(el) //adds before the node(outside)
//4. node.after(el) //adds after the node(outside)

//Practice 1: Create a new button element. Give it a text "click me", background color of red & text color of white.
//Insert the button as the first element inside the body tag.
let newBtn = document.createElement("button");
newBtn.innerText = "click me!";

newBtn.style.clolor = "white";
newBtn.style.backgroundColor = "red";

document.querySelector("body").prepend(newBtn);

//Practice 2: Create a <p> tag in html, give it a class & some styling.
//Now create a new class in CSS and try to append this class to the <p> element.
// Did you notice, how you overwrite the class name when you add a new one? 
// Solve this problem using classlist.

let para = document.querySelector(".content")


// Event IN JS:
// The change in the state of an object is known as an Event
//Events are fired to notify code of "interesting changes" that may affect code execution
//Mouse events (click, double click etc.)
//Keyboard events (keypress, keyup, keydown)
//Form events (submit etc.)
//Print event & many more.

//Event Listeners:
// node.addEventListener(event, callback)
// node.removeEventListener(event, callback)
// Note: the callback reference should be same to remove.

let btn1 = document.querySelector("#btn1");

btn1.addEventListener("click", (evt) => {
    console.log("button1 was clicked - handler1");
});

btn1.addEventListener("click", () => {
    console.log("button1 was clicked - handler2");
});

btn1.addEventListener("click", () => {
    console.log("button1 was clicked - handler3");
});

btn1.addEventListener("click", () => {
    console.log("button1 was clicked - handler4");
});

btn1.removeEventListener("click", () => {
    console.log("button1 was clicked - handler5");
});

//Practice
// Create a toggle button that changes the screen to dark-mode when clicked & light-mode when clicked again.

let modeBtn = document.querySelector("#mode");
let body = document.querySelector("body");
let currMode = "light";  //dark

modeBtn.addEventListener("click", () => {
    if(currMode === "light") {
        currMode = "dark";
        document.querySelector("body").style.backgroundColor = "black";
        body.classList.add("dark");
        body.classList.remove("light");
    } else {
        currMode = "light";
        document.querySelector("body").style.backgroundColor = "white";
        body.classList.add("light");
        body.classList.remove("dark");
    }
    console.log(currMode);
});

//Protypes in JS
// A javascript object is an entity having state and behaviour 
//(propertities and method).
//JS objects have a special property called prototype.
//We can set prototype using _ _ proto _ _
// If object & prototype have same method, object's method will be used.

const student = {
    fullName : "sapna acharya",
    marks: 94,
    printmarks: function() {
        console.log("marks =", this.marks);
    },
};

let arrays = ["apple", "mango", "banana"];

const employee = {
    calcTax() {
        console.log("tax rate is 10%");
    },
};

const karanArjun = {
    salary: 50000,
};

karanArjun.__proto__ = employee;

//Classes in JS
// Class is a program-code template for creating objects.
//Those objects will have some state (variables) & some behaviour (functons)
// inside it.
class Myclass{
    constructor(){}
    mymethod(){}
}

let myobj = new Myclass();


class ToyotaCar {
      start() {
        console.log("start");
    }
    stop() {
        console.log("stop");
    }

    setBrand(brand){
        this.brand = brand;  //this ma ayeko object ko property
    }
}

let fortuner = new ToyotaCar();
fortuner.setBrand("fortuner");
let lexus = new ToyotaCar();
lexus.setBrand("lexus");

//Constructor
// constructor() method is automatically invoked by new : constructor(){}
//initializes object : mymethod(){}

//implementing classes

class person {
    constructor(name) {
        this.species = "homo sapiens";
        this.name = name;
    }

    eat() {
        console.log("eat");
    }
}
class Engineer extends Person {
    constructor(name) {
        super(name); //to invoke parent class constructor
    }
    work() {
        super.eat();
        console.log("solve problems, build something");
    }
}
let engobj = new Engineer("sapna");

//practice 1: You are creating a website for your college. 
// Create a class user with 2 properties name & email. 
//It also has a method called viewData() that allows 
//user to view website data.

let DATA = "secret information";

class user {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    viewData() {
        console.log("data = ", DATA);
    }
}

let student1 = new user("shradha", "abc@email.com");
let student2 = new user("aman", "aman@email.com");

let teacher1 = new user("dean", "dean@college.com");

//Create a new class called Admin which inherits from user.
// Add a new method called editData to Admin that it to 
// to edit website data.

let A = 5;
let B = 10;
console.log("A =", A);
console.log("B =", B);

