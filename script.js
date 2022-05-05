//VARIABLES

// var item, item2;

// item = 4;
// item2 = "hey";
//Scope -> Global and local scope

//DATA TYPES

// var name = "Devan",
//     age = 18,
//     married = false,
//     money = null;
//typeof -> it gives the data type of an element

//ARRAYS

// var list = ["Devan", "Aswin", "NMS", 18, true],
//     list2 = [],
//     list3 = new Array(10, false);

//list[<position>] -> it prints the element on the specified position in the list.
//list.length -> it displays the number of elements in the list.
//list.push[<item>] -> it will add the given item into the list.
//list.pop() -> it removes the last item from the list.
//list.shift() -> it removes the first item from the list.
//list.unshift(<item>) -> it adds the item to the first position of the list.
//list.indexof(<item>) -> it displays the position of the specified item in the list.

//OBJECTS

// var person = new Object(),
//     house = {};

// person.name = "Devan";
// person.age = 18;
// person.height = 190;
// person.married = false;

// person["name"] = "Devasurya";

// person.car = {};
// person.car.make = "Maruthi Suzuki";

// var person2 = {
//     Name: "Rithu",
//     Age: "28"
// };

//OPERATORS

//Assignment operators -> +,-,*,/
//eg: x = x+y (or) x += y
//    x = x/y (or) x /= y

//Comparison operators -> ==,>,<,!=,=== (they will return true or false)
//=== -> it compares the value as well ass the datatype of two elements

//Incriment operator (it requires only one operant) -> ++,--,etc

//if-else STATEMENTS

// var marks = 69;

// if (marks >= 33 && marks < 50) {
//     console.log("You did an average performance, need to improve a lot!");
// }
// if (marks >= 50 && marks < 70); {
//     console.log("You did good but need to improve.");
// }
// if (marks >= 70 && marks < 90) {
//     console.log("you did very good. A bit of more effort can make you go even better.");
// }
// if (marks >= 90 && marks <= 100) {
//     console.log("GGWP you did an excellent job. Keep it up. Hope I will see the same in next offline exam too...");
// }
// else if (marks < 33) {
//     console.log("You failed dumbass. GET GOOD!")
// }

// marks > 33 ? console.log("You passed") : console.log("You failed! :( ")

//LOOPS

//for Loops

// for (var x = 69; x < 421; x += 69) {
//     console.log(x);
// }

//do-while LOOP

// var rickroll = ["Never", "Gonna", "Give", "You", "Up"];

// var x = 0;

// do {
//     console.log(rickroll[x]);
//     x++;
// } while (x < 5);

//FUNCTION

// function add(x, y) {
//     console.log(x + y);
// }
// add(2, 3);


// var sum = function (x, y) {
//     return x + y;
// }

// var product = function (x, y) {
//     return x * y;
// }

// var x = 69, y = 420;

// console.log(sum(x, y));
// console.log(product(x, y));

//SELECTORS

//document.getElementById("id")
//document.getElementsByClassName("class")
//document.getElementsByTagName("tag") tag-> eg: p

//EVENTS

var submitBtn = document.getElementById("click me"),
    container = document.querySelector(".conatianer");

submitBtn.addEventListener("click", function (event) {
    console.log("Clicked from scrpt.js!");
})