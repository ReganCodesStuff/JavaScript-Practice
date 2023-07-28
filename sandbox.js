// else if statements

// const password = "p@ssword1234";

// if(password.length >= 12){
//     console.log("that password is strong");
// } else if(password.length >= 8){
//     console.log("password is not long enough!");
// } else {
//     console.log("password is not long enough");
// }

/// ----- ///

// logical operators

// const password = "p@ssword1234";

// if(password.length >= 12 && password.includes("@")){
//     console.log("that password is mighty strong");
// } else if(password.length >= 8 || password.includes("@") && password.length > 5){
//     console.log("password is not strong enough!");
// } else {
//     console.log("password is not strong enough");
// }

/// ----- ///

// logical NOT (!)

// let user = false;

// if(!user){
//     console.log("you must be logged in to continue")
// }

// console.log(!true);
// console.log(!false);

/// ----- ///

// break and continue

// const scores = [50, 25, 0, 30, 100, 20, 10];

// for(let i = 0; i < scores.length; i++){
//     console.log("your score: ",scores[i]);

//     if(scores[i] === 0){
//       continue;
//     }

//     if (scores[i] === 100){
//         console.log("congrats, you got the top score!");
//         break;
//     }

// }

/// ----- ///

// switch statements
// const grade = "A";

// switch(grade){
//     case "A":
//         console.log("You got an A!")
//         break;
//     case "B":
//         console.log("You got an B!")
//         break;
//     case "C":
//         console.log("You got an C!")
//         break;
//     case "D":
//         console.log("You got an D!")
//         break
//     case "E":
//         console.log("You got an E!")
//         break
//     default:
//         console.log("Not a valid grade!")
// }

/// ----- ///

// variables & block scope

// const age = 30;

// if(true){
//     const age = 40;
//     const name = "luigi";
//     console.log("outsdide 1st code block: ", age, name);

//     if(true){
//         const age = 50;
//         console.log("outsdide 2nd code block: ", age);
//     }
// }

// console.log("outsdide code block: ", age, name);

/// -- functions -- ///

// function declaration
// function greet(){
//     console.log("hello there");
// }

// function expression
// const speak = function(){
//     console.log("good day!");
// };

// greet();
// speak();

/// ----- ///

// arguements & parameters

// const speak = function(name, time){
//     console.log(`good day, ${name}! It's ${time}`);
// };

// speak("mario", "11:30");

/// ----- ///

// returning values

// const calcArea = function(radius){
//     return 3.14 * radius**2;
// }

// const area = calcArea(5);
// console.log(area);

/// ----- ///

// arrow function
// const calcArea = radius => 3.14 * radius**2;

// const area = calcArea(5);
// console.log("area is:", area);

// practise arrow functions

// const greet = function(){
//     return "hello world";
// };

// const greet = () => "hello world";
// const result = greet();
// console.log(result);

// const bill = function(products, tax){
//     let total = 0
//     for(let i = 0; i < products.length; i++){
//         total += products[i] + products[i] * tax
//     }
//     return total;
// }

// console.log(bill([10,15,30], 0.2))

/// ----- ///

// const name = "shaun"

// functions

// const greet = () => "hello";

// let resultOne = greet();
// console.log(resultOne);

// // methods

// let resultTwo = name.toUpperCase();
// console.log(resultTwo);

/// ----- ///

// callbacks & foreach

// const myFunc = (callbackFunc) => {
//     // do something
//     let value = 50;
//     callbackFunc(value);
// };

// myFunc(function(value){
//     // do something
//     console.log(value);
// });

// let people = ["mario", "luigi", "ryu", "shaun", "chun-li"]

// const logPerson = (person, index) => {
//     console.log(`${index} - heelo ${person}`)
// }

// people.forEach(logPerson)

/// ----- ///

// const ul = document.querySelector(`.people`);

// const people = ["mario", "luigi", "ryu", "shaun", "chun-li"]

// let html = ``;

// people.forEach(function(person){
//     // create html template
//     html += `<li style="color: purple"${person}</li>`;
// });

// console.log(html);
// ul.innerHTML = html;

/// ----- ///

// objects literals

// const blogs = [
//     {title: "why mac and cheese rules", likes: 30},
//     {title: "10 things to make with nutella", likes: 50}
// ];

// console.log(blogs)

// let user = {
//     name: "crystal",
//     age: 30,
//     email: "crystal@thenetnnija.co.uk",
//     location: "berlin",
//     blogs: [
//         {title: "why mac and cheese rules", likes: 30},
//         {title: "10 things to make with nutella", likes: 50}
//     ],
//     login: function(){
//         console.log("the user has logged in");
//     },
//     logout: function(){
//         console.log("the user has logged out");
//     },
//     logBlogs: function(){
//         // console.log(this.blogs);
//          console.log("this user has written the following blogs:");
//          this.blogs.forEach(blog => {
//              console.log(blog.title, blog.likes);
//          });
//     }
// };

// user.logBlogs();
// console.log(this);

// user.logBlogs();

// user.login();
// user.logout();

// const name = "mario";
// name.toUpperCase();

// console.log(user);
// console.log(user.name);

// user.age = 35;
// console.log(user.age);

// console.log(user)

/// ----- ///

// Math object

// console.log(Math);
// console.log(Math.PI);
// console.log(Math.E);

// const area = 7.7;

// console.log(Math.round(area));
// console.log(Math.floor(area));
// console.log(Math.ceil(area));
// console.log(Math.trunc(area));

// // random numbers

// const random = Math.random();

// console.log(Math.round(random * 100))
// console.log(random)

/// ----- ///

// primitive values

// let scoreOne = 50;
// let scoreTwo = scoreOne;

// console.log(`scoreOne: ${scoreOne}`, `scoreTwo: ${scoreTwo}`);

// scoreOne = 100;

// refrence values

// const userOne = { name: "ryu", age: 30};
// const userTwo = userOne;

// console.log(userOne, userTwo);

// userOne.name = "chun-li";
// console.log(userOne, userTwo);